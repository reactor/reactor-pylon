import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {FluxComponent} from './flux.component';

export function main() {
  describe('Flux component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let fluxDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(fluxDOMEl, 'h2')[0].textContent).toEqual('Features');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [FluxComponent],
  template: '<reactor-flux></reactor-flux>'
})
class TestComponent {}
