import { GithubUser } from '@models';
import { Action } from '@ngrx/store';

enum ActionTypes {
  SEARCH_USERS_START = '[Users] Search Users Start',
  SEARCH_USERS_ERROR = '[Users] Search Users Error',
  SEARCH_USERS_SUCCESS = '[Users] Search Users Success'
}

class SearchUsersStartAction implements Action {
  readonly type = ActionTypes.SEARCH_USERS_START;

  constructor(public payload: { search: string }) {}
}

class SearchUsersErrorAction implements Action {
  readonly type = ActionTypes.SEARCH_USERS_ERROR;

  constructor(public payload: { error: string }) {}
}

class SearchUsersSuccessAction implements Action {
  readonly type = ActionTypes.SEARCH_USERS_SUCCESS;

  constructor(public payload: { users: Array<GithubUser> }) {}
}

type Actions = SearchUsersStartAction | SearchUsersErrorAction | SearchUsersSuccessAction;

export {
  ActionTypes,
  SearchUsersStartAction,
  SearchUsersErrorAction,
  SearchUsersSuccessAction,
  Actions
};

