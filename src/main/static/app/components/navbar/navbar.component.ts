import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from 'angular2/router';

@Component({
  selector: 'reactor-navbar',
  moduleId: module.id,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {

  constructor(public router: Router, public location: Location) {}

  isRouteActive(path: String) {
    return this.router.isRouteActive(this.router.generate([path]));
    //return this.location.path() === path;
  }
}
