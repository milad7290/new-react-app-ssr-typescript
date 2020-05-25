import { Locale, AppActionTypes, SETLOCALE } from './types';

export const setLocale = (locale: Locale): AppActionTypes => ({
    type: SETLOCALE,
    payload: locale,
});
