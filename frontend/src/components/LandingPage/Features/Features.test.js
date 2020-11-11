import { shallow } from 'enzyme';
import { screen, render } from '@testing-library/react';
import Features from './Features'
import React from 'react';



describe('Test features component', () => {
    
    it('Checks if Features component renders', () => {
        const wrapper = shallow(<Features/>);
        expect(wrapper.exists()).toBe(true);
    });

    it('Check if title text renders properly', () => {
        render(<Features/>);
        const textElement = screen.getByText(/Features of this Application/i);
        expect(textElement).toBeInTheDocument();
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