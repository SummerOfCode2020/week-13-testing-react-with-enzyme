import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import ReactResources from '../ReactResources';

describe('A test for react resources component', () => {

    it('contains at least one string item', () => {
        const linkOne = '';

        const wrapper = render(<ReactResources options={linkOne} />)

        expect(wrapper.find('.options')).toBeDefined();
        expect(wrapper.find('.value')).toHaveLength(linkOne.length);
    });
    
}); 