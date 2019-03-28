/* tslint:disable:no-any prefer-const */
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MocksModule } from '@testing/mocks';
import { Observable } from 'rxjs';
import { UsersStoreEffects } from './effects';

describe('EffectEffects', () => {
  let actions$: Observable<any>;
  let effects: UsersStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MocksModule
      ],
      providers: [
        UsersStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(UsersStoreEffects);
  });

  it('should be created', () => {
    expect(effects)
      .toBeTruthy();
  });
});
