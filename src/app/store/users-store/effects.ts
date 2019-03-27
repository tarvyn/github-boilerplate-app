import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubApiConnectorService } from '@api-connectors';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { State } from './state';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as usersActions from './actions';
import * as usersSelectors from './selectors';

@Injectable()
class UsersStoreEffects {
  usersSearch$ = this.store.pipe(select(usersSelectors.selectUsersSearch));

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<usersActions.SearchUsersStartAction>(
      usersActions.ActionTypes.SEARCH_USERS_START
    ),
    withLatestFrom(this.usersSearch$),
    switchMap(([, search]) =>
      this.githubApiConnectorService
        .searchUsers(search)
        .pipe(
          map(users => new usersActions.SearchUsersSuccessAction({ users })),
          catchError((error: HttpErrorResponse) =>
            observableOf(new usersActions.SearchUsersErrorAction({ error: error.message }))
          )
        )
    )
  );

  constructor(
    private githubApiConnectorService: GithubApiConnectorService,
    private actions$: Actions,
    private store: Store<State>,
  ) { }
}

export { UsersStoreEffects };
