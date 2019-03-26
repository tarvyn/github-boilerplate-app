import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('users', featureReducer),
    EffectsModule.forFeature([UsersStoreEffects])
  ],
  providers: [UsersStoreEffects]
})
export class UsersStoreModule {}
