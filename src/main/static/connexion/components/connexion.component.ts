import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'reactor-connexion',
  moduleId: module.id,
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class ConnexionComponent {
}
