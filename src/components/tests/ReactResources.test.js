import React from 'react';
import { shallow, render } from '../../enzyme';

import ReactResources from "../ReactResources"

describe('React Resources Generic List Component', () => {

    it('renders all the mocked resource options', () => {
        const resource = ['https://devhints.io/enzyme'];

        const wrapper = render(<ReactResources options={resource} />);

        expect(wrapper.find('.options')).toBeDefined();
        expect(wrapper.find('.value')).toHaveLength(resource.length);
    });

    it('renders no resource options', () => {
        const resource = [];
        const wrapper = shallow(<ReactResources options={resource} />);

        expect(wrapper.find('.empty').exists()).toBe(true);
        expect(wrapper.text()).toEqual("Nothing to see here. Move along.");
    });
});