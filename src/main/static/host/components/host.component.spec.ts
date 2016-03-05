import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {HostComponent} from './host.component';

export function main() {
  describe('Host component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let hostDOMEl = rootTC.debugElement.children[0].nativeElement;
            expect(DOM.querySelectorAll(hostDOMEl, 'h2')[0].textContent).toEqual('Features');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [HostComponent],
  template: '<reactor-host></reactor-host>'
})
class TestComponent {}
