import { Dispatch } from 'react';
import { HttpProvider } from '../providers/http.provider';
import { RootThunk, RootActions, RootState } from '../store/root.types';
import { Post } from '../models/post.model';
import { PostRequest, PostSuccess, PostFailure } from '../store/post/actions';

export const fetchPosts = (): RootThunk<void> => async (
    dispatch: Dispatch<RootActions>,
    getState: () => RootState
) => {
    dispatch(PostRequest());
    try {
        // TODO: should be modified
        const posts = await HttpProvider<Post[]>({ url: '/posts' });

        dispatch(PostSuccess(posts));
    } catch (error) {
        dispatch(PostFailure());
    }
};
