import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EntityFeatureStoreEffects } from './effects';

describe('EffectEffects', () => {
  let actions$: Observable<any>;
  let effects: EntityFeatureStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EntityFeatureStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(EntityFeatureStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
