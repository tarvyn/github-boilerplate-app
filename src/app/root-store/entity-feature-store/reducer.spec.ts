import {featureReducer} from './reducer';
import {initialState} from './state';

describe('EntityFeature Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = featureReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
