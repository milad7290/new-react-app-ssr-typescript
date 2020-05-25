import createRootReducer from './rootReducer';
import { AppActionTypes, AppActions, appInitialState } from './app/types';
import { PostActionTypes, PostActions, postInitialState } from './post/types';

export type RootState = ReturnType<typeof createRootReducer>;
export const rootInitialState: RootState = {
    app: appInitialState,
    post: postInitialState,
};

export const RootActionTypes = Object.assign({}, AppActionTypes, PostActionTypes);

export type RootActions = AppActions | PostActions;

export type Action = {
    type: string;
    payload?: any;
};
