import React from 'react';
import Tools from './components/Tools.js';
import { shallow } from 'enzyme';

it('should show Tools title', () => { 
    const wrapper = shallow(<Tools />); 
    expect(wrapper.text().includes('Tools')).toBe(true);
});
