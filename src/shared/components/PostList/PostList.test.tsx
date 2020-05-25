import * as React from 'react';
import { shallow } from 'enzyme';

import PostList from './PostList';

describe('PostList', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<PostList {...defaultProps} />);
    });
});
