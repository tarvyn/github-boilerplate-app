import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {Item} from '../../models';
import {featureAdapter, State} from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectEntityFeatureState: MemoizedSelector<object,
  State> = createFeatureSelector<State>('entityFeature');

export const selectAllEntityFeatureItems: (
  state: object
) => Item[] = featureAdapter.getSelectors(selectEntityFeatureState).selectAll;

export const selectEntityFeatureById = (id: string) =>
  createSelector(this.selectAllEntityFeatureItems, (allEntityFeatureItems: Item[]) => {
    if (allEntityFeatureItems) {
      return allEntityFeatureItems.find(p => p.id === id);
    } else {
      return null;
    }
  });

export const selectEntityFeatureError: MemoizedSelector<object, any> = createSelector(
  selectEntityFeatureState,
  getError
);

export const selectEntityFeatureIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectEntityFeatureState,
  getIsLoading
);
