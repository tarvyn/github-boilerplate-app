import { GithubUser } from '@models';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { featureAdapter, State } from './state';

export const getError = (state: State): string => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const getSearch = (state: State): string => state.search;

export const selectUsersState: MemoizedSelector<object, State> =
  createFeatureSelector<State>('users');

export const selectAllUsers: (state: State) => Array<GithubUser> =
  createSelector(
    selectUsersState,
    featureAdapter.getSelectors().selectAll
  );

export const selectUserById = (id: GithubUser['id']) =>
  createSelector(selectAllUsers, (users: Array<GithubUser>) => {
    if (users) {
      return users.find(user => user.id === id);
    }
    return null;
  });

export const selectUsersSearchError: MemoizedSelector<object, string> = createSelector(
  selectUsersState,
  getError
);

export const selectUsersIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectUsersState,
  getIsLoading
);

export const selectUsersSearch: MemoizedSelector<object, string> = createSelector(
  selectUsersState,
  getSearch
);
