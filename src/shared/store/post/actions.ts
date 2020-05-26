import { Post } from '../../models/post.model';
import { PostActions, PostActionTypes } from './types';

export const PostListRequest = (): PostActions => ({
    type: PostActionTypes.POST_LIST_REQUEST,
});

export const PostListSuccess = (items: Post[]): PostActions => ({
    type: PostActionTypes.POST_LIST_SUCCESS,
    payload: { items, updatedAt: Number(Date.now()) },
});

export const PostListFailure = (error?: string): PostActions => ({
    type: PostActionTypes.POST_LIST_FAILURE,
    payload: { reason: error || 'Something went wrong!' },
});

export const PostAddRequest = (): PostActions => ({
    type: PostActionTypes.POST_ADD_REQUEST,
});

export const PostAddSuccess = (item: Post): PostActions => ({
    type: PostActionTypes.POST_ADD_SUCCESS,
    payload: item,
});

export const PostAddFailure = (error?: string): PostActions => ({
    type: PostActionTypes.POST_ADD_FAILURE,
    payload: { reason: error || 'Something went wrong!' },
});

export const PostUpdateRequest = (postId: number): PostActions => ({
    type: PostActionTypes.POST_UPDATE_REQUEST,
    payload: { id: postId },
});

export const PostUpdateSuccess = (item: Post): PostActions => ({
    type: PostActionTypes.POST_UPDATE_SUCCESS,
    payload: item,
});

export const PostUpdateFailure = (postId: number, error?: string): PostActions => ({
    type: PostActionTypes.POST_UPDATE_FAILURE,
    payload: { id: postId, reason: error || 'Something went wrong!' },
});

export const PostRemoveRequest = (postId: number): PostActions => ({
    type: PostActionTypes.POST_REMOVE_REQUEST,
    payload: { id: postId },
});

export const PostRemoveSuccess = (postId: number): PostActions => ({
    type: PostActionTypes.POST_REMOVE_SUCCESS,
    payload: { id: postId },
});

export const PostRemoveFailure = (postId: number, error?: string): PostActions => ({
    type: PostActionTypes.POST_REMOVE_FAILURE,
    payload: { id: postId, reason: error || 'Something went wrong!' },
});
