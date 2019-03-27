import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { MockState, MockStore } from '@ngrx/store/testing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({})
  ],
  providers: [
    {
      provide: Store,
      useClass: MockStore
    },
    MockState
  ]
})
export class MocksModule {}
