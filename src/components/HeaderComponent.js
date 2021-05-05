import React from 'react';

import { Nav, Navbar, NavbarBrand, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(){

    return(
        <Navbar>
        <Nav>
            <NavItem className='m-2'>
                <NavLink className='nav_link' to='/home'>Home</NavLink>
            </NavItem>
            <NavItem className='m-2'>
                <NavLink className='nav_link' to='/shopping'>Shopping</NavLink>
            </NavItem>
            <NavItem className='m-2'>
                <NavLink className='nav_link' to='/todo'>To-Do</NavLink>
            </NavItem>
            <NavItem className='m-2'>
                <NavLink className='nav_link' to='/animals'>Animals</NavLink>
            </NavItem>
            <NavItem className='m-2'>
                <NavLink className='nav_link' to='/schedule'>Schedule</NavLink>
            </NavItem>
            <NavItem className='m-2'>
                <NavLink className='nav_link' to='/notes'>Notes</NavLink>
            </NavItem>
            <NavItem className='m-2 login_button'>
                <Button className='login_button'><p className='login_button_text'>Log In</p></Button>
            </NavItem>
        </Nav>
        </Navbar>
    )

}

export default Header;