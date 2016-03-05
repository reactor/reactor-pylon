import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'reactor-log',
  moduleId: module.id,
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class LogComponent {
}
