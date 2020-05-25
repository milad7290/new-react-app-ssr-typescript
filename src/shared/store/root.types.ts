import RootReducer from './root.reducer';
import { AppActionTypes, AppActions, appInitialState } from './app/types';

export type RootState = ReturnType<typeof RootReducer>;
export const rootInitialState: RootState = {
    app: appInitialState,
};

export const RootActionTypes = Object.assign({}, AppActionTypes);

export type RootActions = AppActions;

export type Action = {
    type: string;
    payload?: any;
};
