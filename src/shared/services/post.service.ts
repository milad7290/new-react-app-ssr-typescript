import { Dispatch } from 'react';
import { Post } from '../models/post.model';
import { HttpProvider } from '../providers/http.provider';
import { RootActions, RootState, RootThunk } from '../store/root.types';
import {
    PostListRequest,
    PostListSuccess,
    PostListFailure,
    PostAddRequest,
    PostAddSuccess,
    PostAddFailure,
    PostUpdateRequest,
    PostUpdateSuccess,
    PostUpdateFailure,
    PostRemoveRequest,
    PostRemoveSuccess,
    PostRemoveFailure,
} from '../store/post/actions';

export const fetchPosts = (): RootThunk<void> => async (
    dispatch: Dispatch<RootActions>,
    getState: () => RootState
) => {
    dispatch(PostListRequest());
    try {
        const posts = await HttpProvider<Post[]>({ url: '/posts' });

        dispatch(PostListSuccess(posts));
    } catch (error) {
        dispatch(PostListFailure(error));
    }
};

export const addPost = (newPost: Partial<Post>): RootThunk<void> => async (
    dispatch: Dispatch<RootActions>,
    getState: () => RootState
) => {
    dispatch(PostAddRequest());
    try {
        const post = await HttpProvider<Post>({ url: '/posts', method: 'POST', data: newPost });

        dispatch(PostAddSuccess(post));
    } catch (error) {
        dispatch(PostAddFailure(error));
    }
};

export const updatePost = (post: Post): RootThunk<void> => async (
    dispatch: Dispatch<RootActions>,
    getState: () => RootState
) => {
    dispatch(PostUpdateRequest(post.id));
    try {
        const returnedPost = await HttpProvider<Post>({ url: '/posts/' + post.id, method: 'PUT' });

        dispatch(PostUpdateSuccess(returnedPost));
    } catch (error) {
        dispatch(PostUpdateFailure(post.id, error));
    }
};

export const removePost = (id: number): RootThunk<void> => async (
    dispatch: Dispatch<RootActions>,
    getState: () => RootState
) => {
    dispatch(PostRemoveRequest(id));
    try {
        const post = await HttpProvider<Post>({ url: '/posts/' + id, method: 'DELETE' });

        dispatch(PostRemoveSuccess(post.id));
    } catch (error) {
        dispatch(PostRemoveFailure(id, error));
    }
};
