import { rootInitialState } from '../root.types';
import { getLocale } from './selectors';

describe('App Selectors', () => {
    it('gets the locale', () => {
        expect(getLocale(rootInitialState)).toMatch('en_US');
    });
});
