import { GithubUser } from '@models';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  SET_SEARCH = '[Users] Set Search',
  SEARCH_USERS_START = '[Users] Search Users Start',
  SEARCH_USERS_ERROR = '[Users] Search Users Error',
  SEARCH_USERS_SUCCESS = '[Users] Search Users Success'
}

export class SetSearchAction implements Action {
  readonly type = ActionTypes.SET_SEARCH;

  constructor(public payload: { search: string }) {}
}

export class SearchUsersStartAction implements Action {
  readonly type = ActionTypes.SEARCH_USERS_START;
}

export class SearchUsersErrorAction implements Action {
  readonly type = ActionTypes.SEARCH_USERS_ERROR;

  constructor(public payload: { error: string }) {}
}

export class SearchUsersSuccessAction implements Action {
  readonly type = ActionTypes.SEARCH_USERS_SUCCESS;

  constructor(public payload: { users: Array<GithubUser> }) {}
}

export type Actions = SetSearchAction
  | SearchUsersStartAction
  | SearchUsersErrorAction
  | SearchUsersSuccessAction;
