import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import ReactResources from '../ReactResources';

describe('ReactResources test suite', () => {
    it('check for ', () => {
        const wrapper = mount(<ReactResources /> )  // neither shallow nor render worked for me
        expect(wrapper.find('.value').exists()).toBe(true);
    })
})