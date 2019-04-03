/* tslint:disable:no-any prefer-const */
import { TestBed } from '@angular/core/testing';
import { GithubApiConnectorService } from '@api-connectors';
import { provideMockActions } from '@ngrx/effects/testing';
import * as usersActions from '@store/users-store/actions';
import { EffectsStoreConnectorService } from '@store/users-store/effects-store-connector.service';
import { MocksModule } from '@testing/mocks';
import { defer, Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { UsersStoreEffects } from './effects';

describe('EffectEffects', () => {
  const scheduler = new TestScheduler((actual, expected) => {
    expect(actual)
      .toEqual(expected);
  });
  let actions$: Observable<any>;
  let effects: UsersStoreEffects;
  let usersSearch$$;
  let usersApiCall$$;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MocksModule
      ],
      providers: [
        UsersStoreEffects,
        {
          provide: GithubApiConnectorService,
          useValue: {
            searchUsers() {
              return defer(() => usersApiCall$$);
            }
          }
        },
        {
          provide: EffectsStoreConnectorService,
          useValue: {
            usersSearch$: defer(() => usersSearch$$)
          }
        },
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(UsersStoreEffects);
  });

  it('should be created', () => {
    expect(effects)
      .toBeTruthy();
  });

  describe('usersLoadRequestEffect$', () => {
    it('should correctly call searchUsers method of api-connector service', () => {
      const fakeSearch = 'fakeSearch';
      const action = new usersActions.SearchUsersStartAction();
      const apiConnectorService = TestBed.get(GithubApiConnectorService);

      spyOn(apiConnectorService, 'searchUsers');

      actions$ = of(action);
      usersSearch$$ = of(fakeSearch);
      effects.usersLoadRequestEffect$.subscribe();

      expect(apiConnectorService.searchUsers)
        .toHaveBeenCalledWith(fakeSearch);
    });

    it('should dispatch SearchUsersSuccessAction in case of successful users-search response', () => {
      const fakeUsers = 'fakeUsers' as any;
      const action = new usersActions.SearchUsersStartAction();
      const completion = new usersActions.SearchUsersSuccessAction({ users: fakeUsers });

      scheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('-a', { a: action });
        usersSearch$$ = hot('a-', { a: undefined });
        usersApiCall$$ = cold('a', { a: fakeUsers });

        expectObservable(effects.usersLoadRequestEffect$)
          .toBe('-c', { c: completion });
      });
    });

    it('should dispatch SearchUsersErrorAction in case of erroneous users-search response', () => {
      const fakeErrorMessage = 'fakeErrorMessage' as any;
      const action = new usersActions.SearchUsersStartAction();
      const completion = new usersActions.SearchUsersErrorAction({ error: fakeErrorMessage });

      scheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('-a-', { a: action });
        usersSearch$$ = hot('a--', { a: undefined });
        usersApiCall$$ = cold('#', null, { message: fakeErrorMessage });

        expectObservable(effects.usersLoadRequestEffect$)
          .toBe('--c', { c: completion });
      });
    });
  });
});
