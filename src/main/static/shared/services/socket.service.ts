import {Observable, Subject}           from 'rxjs/Rx';
import {Cookies} from 'js-cookie';
import {Injectable} from 'angular2/core';

@Injectable() export class SocketService {
    defaultTarget = 'ws://localhost:12012/nexus/stream';

    target = '';

    offline = 0;
    ready = 1;
    working = 2;
    retry = 3;

    socket:WebSocket;

    defaultOrLastTarget() {
        var target = Cookies.get('targetAPI');
        if (typeof target === 'undefined') {
            this.target = this.defaultTarget;
        }
        else {
            this.target = target;
        }
        return this.target;
    }

    checkConnection(nextState, replaceState) {
        if (this.socket === null) {
            replaceState({nextPathname: nextState.location.pathname}, '/pylon/connect');
        }
    }

    formatUrl(uri) {
        if (uri.indexOf('://') === -1) {
            return 'ws://' + uri;
        }
        return uri;
    }

    updateTargetAPI(target) {
        if (typeof target !== 'undefined') {
            this.target = target;
            Cookies.set('targetAPI', this.target);
        }
    }

    bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) {
            return [0, 'Bytes'];
        }
        var i = Math.floor(Math.log(bytes) / Math.log(1024));
        return [Math.round(bytes / Math.pow(1024, i)), sizes[i]];
    }

    ws(path:string, stateObserver:Subject<number>) {
        this.updateTargetAPI(path);
        // Handle the data
        return new Promise((resolve, reject) => {

            if (stateObserver !== undefined) {
                stateObserver.next(this.working);
            }
            var ws = new WebSocket(path);

            ws.onopen = (e) => {
                console.log('Connected to ' + path);
                this.socket = ws;
                if (stateObserver !== undefined) {
                    stateObserver.next(this.ready);
                }

                resolve({
                    receiver: Observable.create ((obs) => {
                        // Handle messages
                        if (ws === null) {
                            ws = new WebSocket(path);
                            ws.onopen = (e) => {
                                this.socket = ws;
                                console.log('Reconnected to ' + path);
                                if (stateObserver !== undefined) {
                                    stateObserver.next(this.ready);
                                }
                            };
                        }

                        ws.onmessage = (msg) => {
                            var data = JSON.parse(msg.data);
                            if (data.cause) {
                                obs.error(data);
                            }
                            else {
                                obs.next(data);
                            }
                        };
                        ws.onerror = (e) => {
                            ws = null;
                            if (stateObserver !== undefined) {
                                stateObserver.next(this.offline);
                            }
                            obs.error(e);
                        };

                        ws.onclose = (e) => {
                            if (ws !== null) {
                                ws = null;
                                if (stateObserver !== undefined) {
                                    stateObserver.next(this.offline);
                                }
                                obs.error({message: 'Server connection has been lost'});
                            }
                        };

                        // Return way to unsubscribe
                        return () => {
                            if (ws !== null) {
                                console.log('Closing connection');
                                var _ws = ws;
                                this.socket = null;
                                ws = null;
                                _ws.close();
                            }
                        };
                    }).retryWhen(attempts => {
                        return Observable
                            .range(1, 10)
                            .zip(attempts, i => i)
                            .scan(i => i * 2, 1)
                            .flatMap(i => {
                                if (stateObserver !== undefined) {
                                    stateObserver.next(this.retry);
                                }
                                console.log(`delay retry by ${i} second(s)`);
                                return Observable.timer(i * 1000);
                            });
                    }), sender: Subject.create((data) => {
                        if (ws.readyState === WebSocket.OPEN) {
                            ws.send(data);
                        }
                    })
                });
            };

            ws.onerror = reject;
        });
    }
}
