import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {SidebarComponent} from './../sidebar/sidebar.component';
import {HomeComponent} from '../../../home/components/home.component';
import {FluxComponent} from '../../../flux/components/flux.component';
import {BufferComponent} from '../../../buffer/components/buffer.component';
import {HostComponent} from '../../../host/components/host.component';
import {SystemComponent} from '../../../system/components/system.component';
import {MetricComponent} from '../../../metric/components/metric.component';
import {ConnectionComponent} from '../../../connection/components/connection.component';
import {LogComponent} from '../../../log/components/log.component';
import {NameListService} from '../../../shared/services/name-list.service';
import {SocketService} from '../../../shared/services/socket.service';
import {BehaviorSubject} from 'rxjs/Rx';

@Component({
  selector: 'reactor-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './pylon.component.html',
  styleUrls: ['./pylon.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, SidebarComponent]
})
@RouteConfig([
  { path: '/',            component: HomeComponent,       as: 'Home'  },
  { path: '/metric',      component: MetricComponent,     as: 'Metric' },
  { path: '/flux',        component: FluxComponent,       as: 'Flux' },
  { path: '/host',        component: HostComponent,       as: 'Host' },
  { path: '/buffer',      component: BufferComponent,     as: 'Buffer' },
  { path: '/system',      component: SystemComponent,     as: 'System' },
  { path: '/log',         component: LogComponent,        as: 'Log' },
  { path: '/connection',   component: ConnectionComponent,  as: 'Connection' }
])

export class PylonComponent {
  loaded: Boolean = false;
  disabledSidebar: Boolean = true;

  constructor(public router: Router, public socketService : SocketService) {
    var socketState = BehaviorSubject.create();

    socketState.subscribe( state => {
      console.log(state);
    });

    router.subscribe(path => {
      if(path === 'connection') {
        this.disabledSidebar = true;
        this.loaded = true;
      }
    });

    socketService.ws('ws://localhost:12012/nexus/stream', socketState).then(socket => {
      this.loaded = true;
      socket.receiver.subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
      this.disabledSidebar = true;
      router.navigate(['Connection']);
    });
  }
}
