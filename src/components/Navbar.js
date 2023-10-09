import React from 'react'
import styled, {css} from 'styled-components/macro'
import { Link } from "react-router-dom";
import { menuData } from '../Data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';
import logo from "../images/Logo.jpg"




const Nav = styled.nav`
  height: 60px;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  display: flex;
`;

const NavLink = css`
    color: rgb(170, 252, 248);
    padding: 0 1rem;
    cursor: ponter;
    align-items: center;
    text-decoration: none;
    display: flex;
    height: 100%;

`

const Logo = styled(Link)`
    padding: 3rem 1rem;
    cursor: ponter;
    align-items: center;
    display: flex;
    height: 100%;
`;

const MenuBars  = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
        transform: translate(-50%, 25%);
    };
`;


const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    };

`;
const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: -200px;
    // padding: 0 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const NavBtn2 = styled.div`
    display: flex;
    align-items: center;
    margin-right: -200px;
    // padding: 0 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const NavBtn3 = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0px;
    // padding: 0 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Logo to='/'>
            <img className="login__logo" 
                src={logo}
                alt='Logo'
            />
            </Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                 ) )}
            </NavMenu>
            <NavBtn>
                <Button to="/sign up" primary='true'>
                    Sign Up
                </Button>
            </NavBtn>
            
            <NavBtn2>
                <Button to="/login" primary='true'>
                    Login
                </Button>
            </NavBtn2>
            
            <NavBtn3>
                <Button to="/contact" primary='true'>
                    Contact Us
                </Button>
            </NavBtn3>
            
        </Nav>
    )
}

export default Navbar
