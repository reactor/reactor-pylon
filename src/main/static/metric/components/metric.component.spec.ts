import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {MetricComponent} from './metric.component';

export function main() {
  describe('Metric component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let metricDOMEl = rootTC.debugElement.children[0].nativeElement;
            expect(DOM.querySelectorAll(metricDOMEl, 'h2')[0].textContent).toEqual('Features');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [MetricComponent],
  template: '<reactor-metric></reactor-metric>'
})
class TestComponent {}
