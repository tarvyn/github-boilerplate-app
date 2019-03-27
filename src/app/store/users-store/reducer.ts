import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SET_SEARCH: {
      return {
        ...state,
        search: action.payload.search
      };
    }
    case ActionTypes.SEARCH_USERS_START: {
      return featureAdapter.removeAll({
        ...state,
        isLoading: true,
        error: null
      });
    }
    case ActionTypes.SEARCH_USERS_SUCCESS: {
      return featureAdapter.addAll(action.payload.users, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.SEARCH_USERS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}

export { featureReducer };
