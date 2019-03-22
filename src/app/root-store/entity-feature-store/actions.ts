import { Action } from '@ngrx/store';
import { Item } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Entity Feature] Load Request',
  LOAD_FAILURE = '[Entity Feature] Load Failure',
  LOAD_SUCCESS = '[Entity Feature] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;

  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: { items: Item[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
