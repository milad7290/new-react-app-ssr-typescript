import createRootReducer from './rootReducer';
import { AppActionTypes } from './app/types';

export type Action = {
    type: string;
    payload: any;
};

export type RootState = ReturnType<typeof createRootReducer>;

export type RootActions = AppActionTypes;
