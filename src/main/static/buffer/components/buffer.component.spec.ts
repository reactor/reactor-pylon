import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {BufferComponent} from './buffer.component';

export function main() {
  describe('Buffer component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let bufferDOMEl = rootTC.debugElement.children[0].nativeElement;

            expect(DOM.querySelectorAll(bufferDOMEl, 'h2')[0].textContent).toEqual('Features');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [BufferComponent],
  template: '<reactor-flux></reactor-flux>'
})
class TestComponent {}
