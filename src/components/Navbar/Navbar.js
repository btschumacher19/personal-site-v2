import React from 'react';

import styled, { css } from 'styled-components/macro';
import { Link  } from 'react-router-dom';
import { menuItems } from '../../data/NavItems';
import { Button } from '../Buttons/PrimaryButton'

//background div for navbar
const StyledNavbar = styled.nav`
    height: 60px;
    background: grey;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    z-index: 99;
    position: fixed;
    width: 100%;
`;

// a set of css values you can share between components, for this case, each nav link
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

//left-most item
const Logo = styled(Link)`
${NavLink}
    color: #fff;
    font-style: italic;
`;

const Hamburger = styled.i`
    display: none;
`;

//wrapper for nav menu links
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
`;

const NavMenuLink = styled(Link)`
    ${NavLink}
`;

const NavButtonWrap = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

const Navbar =()=> {
    return (
        <StyledNavbar>
            <Logo to="/">Nice</Logo>
            <Hamburger />
            <NavMenu>
            {
                menuItems.map((item, idx) => (
                    <NavMenuLink to={item.link} key={idx}>
                        {item.title}
                    </NavMenuLink>
                ))
            }
            <NavButtonWrap>
                <Button to="/contact">Contact Us</Button>
            </NavButtonWrap>
            </NavMenu>
        </StyledNavbar>
    )
}

export default Navbar
