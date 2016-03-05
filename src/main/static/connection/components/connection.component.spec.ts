import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {ConnectionComponent} from './connection.component';

export function main() {
  describe('Connection component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let connectionDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(connectionDOMEl, 'h2')[0].textContent).toEqual('Features');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [ConnectionComponent],
  template: '<reactor-connection></reactor-connection>'
})
class TestComponent {}
