import React from 'react';
import { shallow, mount, render } from '../../enzyme';
import ReactResources from '../ReactResources'

describe('Our test suite', () => {

    it('checks for a resource url link', () => {
        const resource = 'https://jestjs.io/docs/en/expect#tobevalue';

        const wrapper = render(<ReactResources options={resource} />);

        expect(wrapper.text()).toEqual('https://jestjs.io/docs/en/expect#tobevalue')
    });
});