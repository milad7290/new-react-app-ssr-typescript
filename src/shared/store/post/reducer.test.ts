import { postInitialState, PostState } from './types';

describe('Post reducer', () => {
    let state: PostState;

    beforeEach(() => {
        state = { ...postInitialState };
    });

    it('should return the initial state', () => {
        expect(postInitialState).toEqual(state);
    });
});
