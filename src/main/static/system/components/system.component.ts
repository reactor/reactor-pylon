import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'reactor-system',
  moduleId: module.id,
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class SystemComponent {
}
