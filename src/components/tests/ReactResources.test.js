import React from 'react';
import { shallow, mount, render } from '../../enzyme';
import ReactResources from '../ReactResources';


describe('React Resource List Component', () => {

    it('renders all react resource options', () => {
        const resources = ['freeCodeCamp',];

        const wrapper = render(<ReactResources options={resources} />);

        expect(wrapper.find('.options')).toBeDefined();
    })
})