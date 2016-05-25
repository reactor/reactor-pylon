/*
 * Copyright (c) 2011-2016 Pivotal Software Inc, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import Nvd3 from './../../core/chart/Nvd3';

require('./HostView.scss');

class HostView extends React.Component {

    constructor(props) {
        super(props);
    }

    getDummy() {
        var c1 = [];
        for (var i = 0; i < 60; i++) {
            c1.push({x: i, y: Math.round(Math.random() * 0.9 * 100)});
        }
        return [
            { values: c1, key: 'CPU', color: '#60b124' },
        ];
    }

    render() {
        return (
            <div>
                <div className="heading">
                    <strong>Server #1</strong>
                </div>
                <div className="host-view">
                    <div className="row">
                        <div className="gr-4">
                            <h2>Main informations</h2>
                            <div className="host-infos">
                                <img src="/images/host/linux.png" width="60px" />
                                <ul>
                                    <li>OS: <strong>Debian OS</strong></li>
                                    <li>Version: <strong>12.1</strong></li>
                                    <li>Status: <strong>pending</strong></li>
                                    <li>Memory: <strong>2Go / 20Go</strong></li>
                                    <li>CPU: <strong>Intel Core 4Q</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="gr-4">
                            <h2>Network</h2>
                            <ul>
                                <li>DestinationAddress:	<strong>12.2.204.201</strong></li>
                                <li>SubnetMask:	<strong>255.255.255.255</strong></li>
                                <li>DestinationAddress:	<strong>169.254.0.0</strong></li>
                                <li>SubnetMask:	<strong>255.255.0.0</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="statistics">
                        <div className="row">
                            <div className="gr-6">
                                <h2>CPU</h2>
                                <div className="chart">
                                    {
                                        React.createElement(Nvd3, {
                                            type:'lineChart',
                                            id: "toto1",
                                            datum: this.getDummy(),
                                            margin: {left: 20, bottom: 20, right: 10, top:5},
                                            useInteractiveGuideline: true,
                                            showYAxis: true,
                                            showXAxis: true,
                                            showLegend: false,
                                            forceY: [0,100],
                                            duration: 1
                                        })
                                    }
                                </div>
                            </div>
                            <div className="gr-6">
                                <h2>Memory</h2>
                                <div className="chart">
                                    {
                                        React.createElement(Nvd3, {
                                            type:'lineChart',
                                            id: "toto1",
                                            datum: this.getDummy(),
                                            margin: {left: 20, bottom: 20, right: 10, top:5},
                                            useInteractiveGuideline: true,
                                            showYAxis: true,
                                            showXAxis: true,
                                            showLegend: false,
                                            forceY: [0,100],
                                            duration: 1
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="heading heading-h2">
                    <strong>Logs</strong>
                </div>
                <div className="filtering">
                    <div className="search">
                        <input className="input" type="text" placeholder="Find in logs" />
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
                <div className="logs">
                    <div className="log">
                        <span className="date">16:39:08.456</span>
                        <span className="author">[hotSample]</span>
                        <span className="type"><span className="label label-info">INFO</span></span>
                        <span className="mess">pub - onSubscribe(reactor.core.publisher.EmitterProcessor$EmitterSubscriber@7326d2d7)</span>
                    </div>
                    <div className="log">
                        <span className="date">16:39:08.529</span>
                        <span className="author">[hotSample]</span>
                        <span className="type"><span className="label label-info">INFO</span></span>
                        <span className="mess">pub - request(256)</span>
                    </div>
                    <div className="log">
                        <span className="date">16:39:08.456</span>
                        <span className="author">[hotSample]</span>
                        <span className="type"><span className="label label-info">INFO</span></span>
                        <span className="mess">pub - onSubscribe(reactor.core.publisher.EmitterProcessor$EmitterSubscriber@7326d2d7)</span>
                    </div>
                    <div className="log">
                        <span className="date">16:39:08.529</span>
                        <span className="author">[hotSample]</span>
                        <span className="type"><span className="label label-info">INFO</span></span>
                        <span className="mess">pub - request(256)</span>
                    </div>
                    <div className="log error">
                        <span className="date">16:39:08.529</span>
                        <span className="author">[hotSample]</span>
                        <span className="type">
                          <span className="label label-error">ERROR</span>
                        </span>
                        <span className="mess">pub - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span>
                    </div>
                    <div className="log warning">
                        <span className="date">16:39:08.529</span>
                        <span className="author">[hotSample]</span>
                        <span className="type"><span className="label label-warning">WARNING</span></span>
                        <span className="mess">pub - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span>
                    </div>
                </div>

            </div>
        )
    }
}

export default HostView;
