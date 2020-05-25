import { shallow } from 'enzyme';
import * as React from 'react';
import PostList from './PostList';

describe('PostList', () => {
    const defaultProps = {};

    it('tests something', () => {
        shallow(<PostList {...defaultProps} />);
    });
});
