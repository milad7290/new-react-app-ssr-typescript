import reducer, { initialState } from './reducer';
import { SETLOCALE } from './types';

describe('App Reducer', () => {
    it('sets the locale', () => {
        expect(reducer(initialState, { type: SETLOCALE, payload: 'de_DE' })).toEqual({
            locale: 'de_DE',
        });
    });
});
