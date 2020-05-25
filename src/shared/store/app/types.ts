import { Action } from '../root.types';

export type Locale = 'en_US' | 'de_DE';

export type AppState = Readonly<{
    locale: Locale;
}>;
export const appInitialState: AppState = Object.freeze<AppState>({
    locale: 'en_US',
});

export enum AppActionTypes {
    SETLOCALE = 'SETLOCALE',
}
interface SetLocaleAction extends Action {
    type: typeof AppActionTypes.SETLOCALE;
    payload: Locale; // error index
}

export type AppActions = SetLocaleAction;
