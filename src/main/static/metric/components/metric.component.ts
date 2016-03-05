import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'reactor-flux',
  moduleId: module.id,
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class MetricComponent {
}
