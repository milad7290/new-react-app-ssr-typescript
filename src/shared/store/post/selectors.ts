import { createSelector } from 'reselect';
import { RootState } from '../root.types';

export const getPost = (state: RootState) => state.post || {};

export const getPostItems = createSelector([getPost], (post) => {
    return post.items;
});

export const isLoading = createSelector([getPost], (post) => {
    return post.isLoading;
});
