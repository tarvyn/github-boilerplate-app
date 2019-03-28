import { GithubUser } from '@models';
import { Action } from '@ngrx/store';

enum ActionTypes {
  SET_SEARCH = '[Users] Set Search',
  SEARCH_USERS_START = '[Users] Search Users Start',
  SEARCH_USERS_ERROR = '[Users] Search Users Error',
  SEARCH_USERS_SUCCESS = '[Users] Search Users Success'
}

class SetSearchAction implements Action {
  public readonly type = ActionTypes.SET_SEARCH;

  constructor(public payload: { search: string }) {}
}

class SearchUsersStartAction implements Action {
  public readonly type = ActionTypes.SEARCH_USERS_START;
}

class SearchUsersErrorAction implements Action {
  public readonly type = ActionTypes.SEARCH_USERS_ERROR;

  constructor(public payload: { error: string }) {}
}

class SearchUsersSuccessAction implements Action {
  public readonly type = ActionTypes.SEARCH_USERS_SUCCESS;

  constructor(public payload: { users: Array<GithubUser> }) {}
}

type Actions = SearchUsersStartAction
  | SearchUsersErrorAction
  | SearchUsersSuccessAction
  | SetSearchAction;

export {
  ActionTypes,
  SetSearchAction,
  SearchUsersStartAction,
  SearchUsersErrorAction,
  SearchUsersSuccessAction,
  Actions
};

