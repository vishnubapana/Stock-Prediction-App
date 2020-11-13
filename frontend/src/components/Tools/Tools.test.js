import React from 'react';
import { shallow } from 'enzyme';
import Tools from './Tools';

describe('testing tools component', () => {
    const wrapper = shallow(<Tools/>);

    it('should render tools component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render tools title', () => {
        expect(wrapper.text().includes('Tools used in this project')).toBe(true);
    })
})
