import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityFeatureStoreModule } from './entity-feature-store/entity-feature-store.module';
import { StandartFeatureStoreModule } from './standard-feature-store/standard-feature-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityFeatureStoreModule,
    StandartFeatureStoreModule
  ]
})
export class RootStoreModule { }
