import { EntityFeatureStoreState } from './entity-feature-store';
import { StandardFeatureStoreState } from './standard-feature-store';

export interface State {
  entityFeature: EntityFeatureStoreState.State;
  standardFeature: StandardFeatureStoreState.State;
}
