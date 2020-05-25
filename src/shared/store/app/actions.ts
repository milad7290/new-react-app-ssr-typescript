import { Locale, AppActionTypes, AppActions } from './types';

export const setLocale = (locale: Locale): AppActions => ({
    type: AppActionTypes.SETLOCALE,
    payload: locale,
});
