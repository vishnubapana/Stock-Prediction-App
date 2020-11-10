import React from 'react';
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
 } from 'reactstrap';

function NavBar()
{
    //Navbar for github link, user input, and home page
    return(
        <div>

            <Navbar color = "light" light expand = "md">      
                <NavbarBrand className="Brand">Stock Prediction MW11-1</NavbarBrand>

                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" href = "https://github.com/Codubee/StockPredictionMW11-1">GitHub</NavLink>
                    </NavItem>
                </Nav>

                <Nav navbar>
                    <NavItem>
                        <NavLink  className="nav-link" href = "#">User Input</NavLink>
                    </NavItem>
                </Nav>

                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" href = "#">Home Page</NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        </div>
    )
}

export default NavBar;