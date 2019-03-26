import { GithubUser } from '@models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const featureAdapter: EntityAdapter<GithubUser> =
  createEntityAdapter<GithubUser>({
    selectId: user => user.id
  });

export interface State extends EntityState<GithubUser> {
  isLoading?: boolean;
  error?: string;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
