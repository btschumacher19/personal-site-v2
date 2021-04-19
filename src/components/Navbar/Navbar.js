import React from 'react';

import styled, { css } from 'styled-components/macro';
import { Link  } from 'react-router-dom';
import { menuItems } from '../../data/NavItems';
import { SecondaryButton } from '../Buttons/PrimaryButton';
import { CgMenuRight } from 'react-icons/cg';


//background div for navbar
const StyledNavbar = styled.nav`
    height: 55px;

    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    position: fixed;
    width: 100%;

    /* background: linear-gradient(0deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2) 100%); */

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
    font-size: 23px;
    letter-spacing: 0.05rem;
    font-family: 'Abril Fatface', cursive;
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
    transition: 0.1s ease-in-out;
    &:hover {
        /* border-bottom: solid 2px #92d1a2; */
        color: #92d1a2;
        transform: scale(1.1)
    }
`;

const NavButtonWrap = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavUnder = styled.div`
z-index: 1 !important;
height: 55px;
background: black;
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

const Navbar =( props )=> {
    return (
        <span>
        <StyledNavbar>
            <Logo to="/" onClick={() => window.location.replace(`/personal-site-v2/#top`)}>Brenden Schumacher</Logo>
            <Hamburger onClick={ props.toggle }/>
            <NavMenu>
            {
                menuItems.map((item, idx) => (
                    <NavMenuLink to={""} key={idx} onClick={() => window.location.replace(`/personal-site-v2/#${item.link}`)}>
                        {item.title}
                    </NavMenuLink>
                ))
            }
            <NavButtonWrap>
                <SecondaryButton to="/" round="true" >Contact</SecondaryButton>
            </NavButtonWrap>
            </NavMenu>
        </StyledNavbar>
        
        </span>
    )
}

export default Navbar
