/* tslint:disable:no-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: '<div></div>'
})
export class MockSearchBarComponent {
  @Input() public value: any;
  @Input() public isLoading: any;
  @Output() public search = new EventEmitter<any>();
  @Output() public searchApply = new EventEmitter<any>();
}
