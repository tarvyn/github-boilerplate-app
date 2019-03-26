import { Injectable } from '@angular/core';
import { GithubApiConnectorService } from '@api-connectors';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as usersActions from './actions';

@Injectable()
export class UsersStoreEffects {
  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<usersActions.SearchUsersStartAction>(
      usersActions.ActionTypes.SEARCH_USERS_START
    ),
    startWith(new usersActions.SearchUsersStartAction({ search: '' })),
    switchMap(action =>
      this.githubApiConnectorService
        .searchUsers(action.payload.search)
        .pipe(
          map(users => new usersActions.SearchUsersSuccessAction({ users })),
          catchError(error =>
            observableOf(new usersActions.SearchUsersErrorAction({ error }))
          )
        )
    )
  );

  constructor(
    private githubApiConnectorService: GithubApiConnectorService,
    private actions$: Actions
  ) { }
}
