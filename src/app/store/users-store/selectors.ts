import { GithubUser } from '@models';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { featureAdapter, State } from './state';

const getError = (state: State): string => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const selectUsersState: MemoizedSelector<object, State> =
  createFeatureSelector<State>('users');

const selectAllUsers: (state: State) => Array<GithubUser> =
  createSelector(
    selectUsersState,
    featureAdapter.getSelectors().selectAll
  );

const selectUserById = (id: GithubUser['id']) =>
  createSelector(selectAllUsers, (users: Array<GithubUser>) => {
    if (users) {
      return users.find(user => user.id === id);
    }
    return null;
  });

const selectUsersSearchError: MemoizedSelector<State, string> = createSelector(
  selectUsersState,
  getError
);

const selectUsersIsLoading: MemoizedSelector<State, boolean> = createSelector(
  selectUsersState,
  getIsLoading
);

export {
  getError,
  getIsLoading,
  selectUsersState,
  selectAllUsers,
  selectUserById,
  selectUsersSearchError,
  selectUsersIsLoading
};
