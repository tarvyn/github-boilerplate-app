import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StandardFeatureStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('standardFeature', featureReducer),
    EffectsModule.forFeature([StandardFeatureStoreEffects])
  ],
  providers: [StandardFeatureStoreEffects]
})
export class StandardFeatureStoreModule {}
