import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Item } from '../../models';

export const featureAdapter: EntityAdapter<Item> =
  createEntityAdapter<Item>({
    selectId: model => model.id,
    sortComparer: (a: Item, b: Item): number =>
      b.someDate.toString().localeCompare(a.someDate.toString())
  });

export interface State extends EntityState<Item> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
