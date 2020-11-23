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
        expect(wrapper.text().includes("Features of our Application")).toBe(true);
    }); 

    it('Check if cards render text properly', () => {
        render(<Features/>);

        let cardElements = [
            {title: /Guess Future Stock Prices/i, subtitle: /Less uncertainty/i, textSnippet: /Stocks are unpredicatble and always fluctuating./i},
            {title: /Get Stock Information/i, subtitle: /All the data you need/i, textSnippet: /Get all the information you need/i},
            {title: /Get Current News/i, subtitle: /Stay informed/i, textSnippet: /Our website provides the latest news/i}
        ];

        cardElements.forEach(element => {
            const titleElement = screen.getByText(element.title);
            const subtitleElement = screen.getByText(element.subtitle);
            const textElement = screen.getByText(element.textSnippet);

            expect(titleElement).toBeInTheDocument();
            expect(subtitleElement).toBeInTheDocument();
            expect(textElement).toBeInTheDocument();
        });
    }); 

});