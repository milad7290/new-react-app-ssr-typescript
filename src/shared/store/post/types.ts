import { Post } from '../../models/post.model';
import { Action } from '../rootTypes';

export type PostState = {
    didInvalidate: boolean;
    isLoading: boolean;
    items: Post[];
    updatedAt: number | null;
};

export const postInitialState: PostState = Object.freeze({
    didInvalidate: false,
    isLoading: false,
    items: [],
    updatedAt: null,
});

export const PostActionTypes = {
    POST_REQUEST: 'react-ssr-setup/post/request',
    POST_SUCCESS: 'react-ssr-setup/post/success',
    POST_FAILURE: 'react-ssr-setup/post/failure',
    POST_INVALIDATE: 'react-ssr-setup/post/invalidate',
};

interface PostRequestAction extends Action {
    type: typeof PostActionTypes.POST_REQUEST;
}

interface PostSuccessAction extends Action {
    type: typeof PostActionTypes.POST_SUCCESS;
    payload: {
        items: Post[];
        updatedAt: number;
    };
}

interface PostFailureAction extends Action {
    type: typeof PostActionTypes.POST_FAILURE;
}

interface PostInvalidateAction extends Action {
    type: typeof PostActionTypes.POST_INVALIDATE;
}

export type PostActions =
    | PostRequestAction
    | PostSuccessAction
    | PostFailureAction
    | PostInvalidateAction;
