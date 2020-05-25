import { ThunkAction } from 'redux-thunk';
import { PostActionTypes, PostActions, postInitialState } from './post/types';
import RootReducer from './root.reducer';
import { AppActionTypes, AppActions, appInitialState } from './app/types';

export type RootState = ReturnType<typeof RootReducer>;
export const rootInitialState: RootState = {
    post: postInitialState,
    app: appInitialState,
};

export const RootActionTypes = Object.assign({}, PostActionTypes, AppActionTypes);

export type RootActions = PostActions | AppActions;

export type Action = {
    type: string;
    payload?: any;
};

export type RootThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, RootActions>;
