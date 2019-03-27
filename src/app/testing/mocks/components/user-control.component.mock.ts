/* tslint:disable:no-any */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-control',
  template: '<div></div>'
})
export class MockUserControlComponent {
  @Input() label: any;
  @Input() value: any;
  @Input() href: any;
}
