import { rootInitialState } from '../rootTypes';
import { getLocale } from './selectors';

describe('App Selectors', () => {
    it('gets the locale', () => {
        expect(getLocale(rootInitialState)).toMatch('en_US');
    });
});
