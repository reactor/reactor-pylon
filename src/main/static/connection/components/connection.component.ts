import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'reactor-connection',
  moduleId: module.id,
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class ConnectionComponent {
}
