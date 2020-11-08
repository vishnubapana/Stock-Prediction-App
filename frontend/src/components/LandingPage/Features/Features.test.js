import { shallow } from 'enzyme';
import Features from './Features'
import React from 'react';

it('Checks if Features component renders correctly', () => {
    const wrapper = shallow(<Features/>);
    expect(wrapper.text().includes("Features of this Application")).toBe(true);
});