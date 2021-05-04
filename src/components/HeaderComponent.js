import React from 'react';

import { Nav, Navbar, NavbarBrand, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(){

    return(
        <Navbar>
        <Nav>
            <NavItem>
                <NavLink className='nav_link' to='/home'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='nav_link' to='/shopping'>Shopping</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='nav_link' to='/todo'>To-Do</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='nav_link' to='/animals'>Animals</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='nav_link' to='/notes'>Notes</NavLink>
            </NavItem>
            <Button>Log In</Button>
        </Nav>
        </Navbar>
    )

}

export default Header;