import { createSelector } from 'reselect';
import { RootState } from '../rootTypes';

// Cache TTL in Milliseconds
const CACHE_TTL = 60 * 1000;

export const getPost = (state: RootState) => state.post || {};

export const getPostItems = createSelector(
    [getPost],
    (post): Array<any> => {
        return post.items;
    }
);

export const isExpired = (state: RootState): boolean => {
    const { updatedAt, didInvalidate } = getPost(state);
    if (didInvalidate === true || !updatedAt || Date.now() - updatedAt > CACHE_TTL) {
        return true;
    }
    return false;
};

export const isLoading = createSelector([getPost], (post) => {
    return post.isLoading;
});

export const didInvalidate = createSelector([getPost], (post) => {
    return post.didInvalidate;
});
