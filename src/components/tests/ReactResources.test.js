import React from 'react';
import { shallow, mount, render } from '../../enzyme';

import ReactResources from '../ReactResources'

describe('Our test suite', () => {

  it('renders all the options', () => {
    const resource1 = ['https://github.com/enzymejs/enzyme'];

    const wrapper = render(<ReactResources options={resource1} />);

    expect(wrapper.find('.options')).toBeDefined();
    expect(wrapper.find('.value')).toHaveLength(resource1.length);
  });

  it('renders no resource options', () => {
    const resource1 = [];
    const wrapper = shallow(<ReactResources options={resource1} />);

    expect(wrapper.find('.empty').exists()).toBe(true);
    expect(wrapper.text()).toEqual('Nothing to see here. Move along.')
  });

  it('renders a single resource option', () => {
    const resource1 = ['https://github.com/enzymejs/enzyme'];
    const wrapper = mount(<ReactResources options={resource1} />);

    expect(wrapper.contains(<li key='https://github.com/enzymejs/enzyme' className="value">https://github.com/enzymejs/enzyme</li >)).toBeTruthy();
  });

});