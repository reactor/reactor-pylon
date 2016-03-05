import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {SidebarComponent} from './../sidebar/sidebar.component';
import {HomeComponent} from '../../../home/components/home.component';
import {FluxComponent} from '../../../flux/components/flux.component';
import {BufferComponent} from '../../../buffer/components/buffer.component';
import {HostComponent} from '../../../host/components/host.component';
import {SystemComponent} from '../../../system/components/system.component';
import {MetricComponent} from '../../../metric/components/metric.component';
import {ConnexionComponent} from '../../../connection/components/connection.component';
import {LogComponent} from '../../../log/components/log.component';
import {NameListService} from '../../../shared/services/name-list.service';

@Component({
  selector: 'reactor-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
  { path: '/connection',   component: ConnexionComponent,  as: 'Connexion' }
])

export class AppComponent {
  loaded: Boolean = false;
  disabledSidebar: Boolean = true;

  constructor(public router: Router) {
    router.subscribe(path => {
        this.disabledSidebar = (path === 'connection');
        this.loaded = true;
    });
  }
}
