import {Component, ViewEncapsulation} from 'angular2/core';
import {NavbarComponent} from './../navbar/navbar.component';

@Component({
  selector: 'sidebar-header',
  moduleId: module.id,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [NavbarComponent]
})
export class SidebarComponent {}
