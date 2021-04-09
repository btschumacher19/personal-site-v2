import React from 'react';

import styled, { css } from 'styled-components/macro';
import { Link  } from 'react-router-dom';
import { menuItems } from '../../data/NavItems';
import { Button } from '../Buttons/PrimaryButton';
import { CgMenuRight } from 'react-icons/cg';

//COLORS:
//100% #94006A - 50% #ca80b5 - 10-3% ca80b5	eacce1	f4e6f0
//near black #0f000b

//background div for navbar
const StyledNavbar = styled.nav`
    height: 55px;
    background: black;
    /* background: rgb(207,78,170);
background: linear-gradient(122deg, rgba(207,78,170,1) 0%, rgba(148,0,106,1) 100%); */
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    position: fixed;
    width: 100%;
    @media screen and (max-width: 768px) {
        padding: 0.8rem 1.2rem;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
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
    font-family: 'Roboto', sans-serif;
    font-style: italic;
`;

const Hamburger = styled(CgMenuRight)`
    font-size: 25px;
    color: #fff;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

//wrapper for nav menu links
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLink = styled(Link)`
    ${NavLink}
`;

const NavButtonWrap = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
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
                <Button to="/contact" >Contact Us</Button>
            </NavButtonWrap>
            </NavMenu>
        </StyledNavbar>
    )
}

export default Navbar
