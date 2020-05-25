import { Action } from '../rootTypes';

export type Locale = 'en_US' | 'de_DE';

export type AppState = Readonly<{
    locale: Locale;
}>;

export const SETLOCALE = 'SETLOCALE';
interface SetLocaleAction extends Action {
    type: typeof SETLOCALE;
    payload: Locale; // error index
}

export type AppActionTypes = SetLocaleAction;
