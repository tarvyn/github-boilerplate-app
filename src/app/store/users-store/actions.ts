import { GithubUser } from '@models';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  SEARCH_USERS_START = '[Users] Search Users Start',
  SEARCH_USERS_ERROR = '[Users] Search Users Error',
  SEARCH_USERS_SUCCESS = '[Users] Search Users Success'
}

export class SearchUsersStartAction implements Action {
  readonly type = ActionTypes.SEARCH_USERS_START;

  constructor(public payload: { search: string }) {}
}

export class SearchUsersErrorAction implements Action {
  readonly type = ActionTypes.SEARCH_USERS_ERROR;

  constructor(public payload: { error: string }) {}
}

export class SearchUsersSuccessAction implements Action {
  readonly type = ActionTypes.SEARCH_USERS_SUCCESS;

  constructor(public payload: { users: Array<GithubUser> }) {}
}

export type Actions = SearchUsersStartAction | SearchUsersErrorAction | SearchUsersSuccessAction;
