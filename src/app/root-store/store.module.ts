import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { EntityFeatureStoreModule } from './entity-feature-store';
import { StandardFeatureStoreModule } from './standard-feature-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityFeatureStoreModule,
    StandardFeatureStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule {}
