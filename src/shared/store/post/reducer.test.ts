import reducer from './reducer';
import { postInitialState, PostActionTypes, PostState } from './types';

describe('Post reducer', () => {
    let state: PostState;

    beforeEach(() => {
        state = { ...postInitialState };
    });

    it('should return the initial state', () => {
        expect(postInitialState).toEqual(state);
    });

    it('should change into loading state', () => {
        state.isLoading = true;
        expect(reducer(undefined, { type: PostActionTypes.POST_REQUEST })).toEqual(state);
    });

    it('should invalidate the data in the store', () => {
        state.didInvalidate = true;
        expect(reducer(undefined, { type: PostActionTypes.POST_INVALIDATE })).toEqual(state);
    });
});
