import { GithubUser } from '@models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

const featureAdapter: EntityAdapter<GithubUser> =
  createEntityAdapter<GithubUser>({
    selectId: user => user.id
  });

interface State extends EntityState<GithubUser> {
  isLoading?: boolean;
  error?: string;
}

const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);

export {
  featureAdapter,
  State,
  initialState
};
