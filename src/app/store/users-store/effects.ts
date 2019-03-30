import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubApiConnectorService } from '@api-connectors';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import * as usersActions from './actions';
import { EffectsStoreConnectorService } from './effects-store-connector.service';

@Injectable()
class UsersStoreEffects {
  public usersSearch$ = this.storeConnectorService.usersSearch$;

  @Effect()
  public usersLoadRequestEffect$: Observable<Action> = this.actions$.pipe(
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
    private storeConnectorService: EffectsStoreConnectorService
  ) { }
}

export { UsersStoreEffects };
