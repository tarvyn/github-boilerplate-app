/* tslint:disable:no-any */
import { featureReducer } from './reducer';
import { initialState } from './state';

describe('Reducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = featureReducer(initialState, action);

      expect(result)
        .toBe(initialState);
    });
  });
});
