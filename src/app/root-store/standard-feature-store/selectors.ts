import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { User } from '../../models';
import { State } from './state';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getUser = (state: State): any => state.user;

export const selectStandardFeatureState: MemoizedSelector<object, State> =
  createFeatureSelector<State>('standardFeature');

export const selectStandardFeatureError: MemoizedSelector<object, any> = createSelector(
  selectStandardFeatureState,
  getError
);

export const selectStandardFeatureIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectStandardFeatureState,
  getIsLoading
);

export const selectStandardFeatureUser: MemoizedSelector<object, User> = createSelector(
  selectStandardFeatureState,
  getUser
);
