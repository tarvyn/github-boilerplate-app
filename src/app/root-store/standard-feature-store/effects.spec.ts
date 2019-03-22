import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';
import {StandardFeatureStoreEffects} from './effects';

describe('Effects', () => {
  let actions$: Observable<any>;
  let effects: StandardFeatureStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StandardFeatureStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(StandardFeatureStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
