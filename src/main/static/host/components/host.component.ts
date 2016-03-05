import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'reactor-host',
  moduleId: module.id,
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class HostComponent {
}
