import reducer from './reducer';
import { AppActionTypes, appInitialState } from './types';

describe('App Reducer', () => {
    it('sets the locale', () => {
        expect(
            reducer(appInitialState, { type: AppActionTypes.SETLOCALE, payload: 'de_DE' })
        ).toEqual({
            locale: 'de_DE',
        });
    });
});
