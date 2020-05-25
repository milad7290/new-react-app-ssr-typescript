import { Post } from '../../models/post.model';
import { PostActionTypes, PostActions } from './types';

export const PostRequest = (): PostActions => ({
    type: PostActionTypes.POST_REQUEST,
});

export const PostSuccess = (items: Post[]): PostActions => ({
    type: PostActionTypes.POST_SUCCESS,
    payload: {
        items,
        updatedAt: Number(Date.now()),
    },
});

export const PostFailure = (): PostActions => ({
    type: PostActionTypes.POST_FAILURE,
});

export const PostInvalidate = (): PostActions => ({
    type: PostActionTypes.POST_INVALIDATE,
});
