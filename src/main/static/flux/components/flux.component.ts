import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'reactor-buffer',
  moduleId: module.id,
  templateUrl: './flux.component.html',
  styleUrls: ['./flux.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class FluxComponent {
}
