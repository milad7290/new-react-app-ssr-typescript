import { Post } from '../../models/post.model';
import { Action } from '../root.types';

export type PostState = {
    fetchLimit: number;
    isLoading: boolean;
    items: Post[];
    errors: string[];
    lastOneFetched: boolean;
};

export const postInitialState: PostState = Object.freeze({
    fetchLimit: 25,
    isLoading: false,
    items: [],
    errors: [],
    lastOneFetched: false,
});

export enum PostActionTypes {
    POST_LIST_REQUEST = 'react-ssr-setup/post/request',
    POST_LIST_SUCCESS = 'react-ssr-setup/post/success',
    POST_LIST_FAILURE = 'react-ssr-setup/post/failure',
    POST_UPDATE_REQUEST = 'react-ssr-setup/post/update/request',
    POST_UPDATE_SUCCESS = 'react-ssr-setup/post/update/success',
    POST_UPDATE_FAILURE = 'react-ssr-setup/post/update/failure',
    POST_REMOVE_REQUEST = 'react-ssr-setup/post/remove/request',
    POST_REMOVE_SUCCESS = 'react-ssr-setup/post/remove/success',
    POST_REMOVE_FAILURE = 'react-ssr-setup/post/remove/failure',
}
interface PostRequestAction extends Action {
    type: typeof PostActionTypes.POST_LIST_REQUEST;
}

interface PostSuccessAction extends Action {
    type: typeof PostActionTypes.POST_LIST_SUCCESS;
    payload: Post[];
}

interface PostFailureAction extends Action {
    type: typeof PostActionTypes.POST_LIST_FAILURE;
    payload: { reason: string };
}

interface PostUpdateRequestAction extends Action {
    type: typeof PostActionTypes.POST_UPDATE_REQUEST;
    payload: { id: number };
}

interface PostUpdateSuccessAction extends Action {
    type: typeof PostActionTypes.POST_UPDATE_SUCCESS;
    payload: Post;
}

interface PostUpdateFailureAction extends Action {
    type: typeof PostActionTypes.POST_UPDATE_FAILURE;
    payload: { id: number; reason: string };
}

interface PostRemoveRequestAction extends Action {
    type: typeof PostActionTypes.POST_REMOVE_REQUEST;
    payload: { id: number };
}

interface PostRemoveSuccessAction extends Action {
    type: typeof PostActionTypes.POST_REMOVE_SUCCESS;
    payload: Post;
}

interface PostRemoveFailureAction extends Action {
    type: typeof PostActionTypes.POST_REMOVE_FAILURE;
    payload: { id: number; reason: string };
}

export type PostActions =
    | PostRequestAction
    | PostSuccessAction
    | PostFailureAction
    | PostUpdateRequestAction
    | PostUpdateSuccessAction
    | PostUpdateFailureAction
    | PostRemoveRequestAction
    | PostRemoveSuccessAction
    | PostRemoveFailureAction;
