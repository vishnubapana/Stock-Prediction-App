  
import { shallow } from 'enzyme';
import { screen, render } from '@testing-library/react';
import Team from './Team'
import React from 'react';

describe('Test Team component', () => {
    const wrapper = shallow(<Team/>);

    it('team component rendering test', () => {   
        expect(wrapper.exists()).toBe(true);
    });

    it('title rendering test', () => {
        expect(wrapper.text().includes("Meet the Team Members")).toBe(true);
    }); 

    it('Card text rendering properly', () => {
        render(<Team/>);
        let cardTitles = [/Vishnu Bapanapalli/i, /Damian Ozuna/i, /Joshua Durana/i, /Kenny Ngo/i, /Ryan Dimaranan/i]
        cardTitles.forEach(element => {
            const textElement = screen.getByText(element);
            expect(textElement).toBeInTheDocument();
        });
    }); 
});