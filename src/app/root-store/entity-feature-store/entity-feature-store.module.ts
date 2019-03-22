import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntityFeatureStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('entityFeature', featureReducer),
    EffectsModule.forFeature([EntityFeatureStoreEffects])
  ],
  providers: [EntityFeatureStoreEffects]
})
export class EntityFeatureStoreModule {}
