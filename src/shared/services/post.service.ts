import { Dispatch } from 'react';
import { NewPost, Post } from '../models/post.model';
import { HttpProvider } from '../providers/http.provider';
import {
    PostAddFailure,
    PostAddOrUpdateSuccess,
    PostAddRequest,
    PostFailure,
    PostRemoveFailure,
    PostRemoveRequest,
    PostRemoveSuccess,
    PostRequest,
    PostSuccess,
    PostUpdateFailure,
    PostUpdateRequest,
} from '../store/post/actions';
import { RootActions, RootState, RootThunk } from '../store/root.types';

export const fetchPosts = (): RootThunk<void> => async (
    dispatch: Dispatch<RootActions>,
    getState: () => RootState
) => {
    dispatch(PostRequest());
    try {
        const posts = await HttpProvider<Array<Post>>({ url: '/posts' });

        dispatch(PostSuccess(posts));
    } catch (error) {
        dispatch(PostFailure(error));
    }
};

export const addPost = (newPost: NewPost): RootThunk<void> => async (
    dispatch: Dispatch<RootActions>,
    getState: () => RootState
) => {
    dispatch(PostAddRequest());
    try {
        const post = await HttpProvider<Post>({ url: '/posts', method: 'POST', data: newPost });

        dispatch(PostAddOrUpdateSuccess(post));
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

        dispatch(PostAddOrUpdateSuccess(returnedPost));
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
