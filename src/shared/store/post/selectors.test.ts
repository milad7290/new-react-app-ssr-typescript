import { rootInitialState } from '../root.types';
import { postInitialState } from './types';
import * as selectors from './selectors';

describe('post selectors', () => {
    it('should select the post branch of the state', () => {
        expect(selectors.getPost(rootInitialState)).toEqual(postInitialState);
    });
});
