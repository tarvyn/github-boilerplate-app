/* tslint:disable:no-any */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  template: '<div></div>'
})
export class MockUsersListComponent {
  @Input() public users: any;
}
