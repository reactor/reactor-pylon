import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'reactor-buffer',
  moduleId: module.id,
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class BufferComponent {
}
