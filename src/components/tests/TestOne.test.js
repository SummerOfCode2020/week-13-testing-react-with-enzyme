import React from 'react'
import {shallow, mount, render} from '../../enzyme'
import TestOne from '../TestOne'

describe('Test One' , () => {
    it('Should find "hello-world"  data-test' , () => {
        const wrapper = shallow(<TestOne/>)

// data test attribute

        expect(wrapper.find('[data-test="hello-world"]').exists()).toBe(true)

    })
})