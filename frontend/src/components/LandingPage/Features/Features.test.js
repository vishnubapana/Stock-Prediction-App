import { shallow } from 'enzyme';
import { screen, render } from '@testing-library/react';
import Features from './Features'
import React from 'react';

describe('Test features component', () => {
    const wrapper = shallow(<Features/>);

    it('Checks if Features component renders', () => {   
        expect(wrapper.exists()).toBe(true);
    });

    it('Check if title text renders properly', () => {
        expect(wrapper.text().includes("Features of this Application")).toBe(true);
    }); 

    it('Check if cards render text properly', () => {
         render(<Features/>);
         let cardTitles = [/Guess Prices/i, /Get Stock Information/i, /Get Current News/i]
         cardTitles.forEach(element => {
             const textElement = screen.getByText(element);
             expect(textElement).toBeInTheDocument();
         });
    }); 

});