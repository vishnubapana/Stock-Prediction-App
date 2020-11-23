import NavBar from './Navbar';
import React, { Children } from 'react';
import { shallow, render } from 'enzyme';

describe('Tests navbar',()=>{

    it('Navbar renders',()=>
    {
        const wrapper = shallow(<NavBar/>);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('Navbar has all links',()=>
    {
        const wrapper = render(<NavBar/>);
        const shallowWrapper = shallow(<NavBar/>)
        expect(wrapper.find('.nav-link')).toHaveLength(3);

        let headerLinkProp = [
            { title: "GitHub", location: "https://github.com/Codubee/StockPredictionMW11-1"},
            { title: "User Input", location:"#"},
            { title: "Home Page", location: "#"}
        ]

        shallowWrapper.find('.nav-link').forEach((node, index) => {
            expect(node).toBeTruthy();
            expect(node.prop('href') === headerLinkProp[index].location).toBe(true);
            expect(node.prop('children') === headerLinkProp[index].title).toBe(true);
        });
    });

    it('Navbar brand has link',()=>
    {
        const wrapper = shallow(<NavBar/>);
        expect(wrapper.find('.nav-brand').prop('href') === '#').toBe(true);
    });
});

