/* tslint:disable:no-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: '<div></div>'
})
export class MockSearchBarComponent {
  @Input() value: any;
  @Input() isLoading: any;
  @Output() search = new EventEmitter<any>();
  @Output() searchApply = new EventEmitter<any>();
}
