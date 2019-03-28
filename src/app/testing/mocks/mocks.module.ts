import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { MockState, MockStore } from '@ngrx/store/testing';
import {
  MockNgbAccordionComponent,
  MockNgbPanelComponent,
  MockSearchBarComponent,
  MockUserControlComponent,
  MockUsersListComponent
} from './components';

const components = [
  MockSearchBarComponent,
  MockUserControlComponent,
  MockUsersListComponent,
  MockNgbAccordionComponent,
  MockNgbPanelComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({})
  ],
  providers: [
    {
      provide: Store,
      useClass: MockStore
    },
    MockState,
  ]
})
export class MocksModule {}
