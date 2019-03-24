import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { Item } from '../../models';
import { featureAdapter, State } from './state';

export const getError = (state: State): string => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectEntityFeatureState: MemoizedSelector<object,
  State> = createFeatureSelector<State>('entityFeature');

export const selectAllEntityFeatureItems: (
  state: object
) => Array<Item> = featureAdapter.getSelectors(selectEntityFeatureState).selectAll;

export const selectEntityFeatureById = (id: string) =>
  createSelector(selectAllEntityFeatureItems, (allEntityFeatureItems: Array<Item>) => {
    if (allEntityFeatureItems) {
      return allEntityFeatureItems.find(p => p.id === id);
    } else {
      return null;
    }
  });

export const selectEntityFeatureError: MemoizedSelector<object, string> = createSelector(
  selectEntityFeatureState,
  getError
);

export const selectEntityFeatureIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectEntityFeatureState,
  getIsLoading
);
