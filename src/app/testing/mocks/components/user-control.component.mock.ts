/* tslint:disable:no-any */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-control',
  template: '<div></div>'
})
export class MockUserControlComponent {
  @Input() public label: any;
  @Input() public value: any;
  @Input() public href: any;
}
