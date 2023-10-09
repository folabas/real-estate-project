import React from 'react';
import "./Rentals.css";
import styled, {css} from 'styled-components/macro'
import { Link } from "react-router-dom";
import { menuData } from '../Data/MenuData';
import { Button } from '../components/Button';
import {FaBars} from 'react-icons/fa';
import House from '../House';
import rental1 from "../images/rental4.jpg"
import rental2 from "../images/rental5.jpg"
import rental3 from "../images/rental7.jpg"



const Nav = styled.nav`
  height: 60px;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  display: flex;
  max-width: 1500px;
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
    margin-right: -300px;
    // padding: 0 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const NavBtn2 = styled.div`
    display: flex;
    align-items: center;
    margin-right: -300px;
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


const Rentals = ({ toggle }) => {
    return (
        <div className="rentals">
            <Nav>
            <Logo to='/'>
            <img className="login__logo" 
                src='https://i.pinimg.com/564x/9d/b2/e0/9db2e0a32b4497ec395aae75471267f6.jpg' 
                alt='Login'
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

        <div className="rental__row">
                    <House src={rental1} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Rent" 
                    />
                    <House src={rental2} 
                    title="House in London" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....." 
                    price="$4,000,000"
                    Rent="Rent"
                    />
                    <House src={rental3} 
                    title="House in Nigeria" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....." 
                    price="$35,000,000"
                    Rent="Rent"
                    />

                    {/* house */}
                    {/* house */}
                    {/* house */}
                </div>
                
                <div className="rental__row">
                    <House src={rental1} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Rent"
                    />
                    <House src={rental2} 
                    title="House in London" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....." 
                    price="$4,000,000"
                    Rent="Rent"
                    />
                    <House src={rental3} 
                    title="House in Nigeria" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....." 
                    price="$35,000,000"
                    Rent="Rent"
                    />
                    <House src={rental1} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Rent"
                    />
                      
                </div>
                <div className="rental__row">
                    <House src={rental3} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Rent"
                    />
                    <House src={rental1} 
                    title="House in London" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....." 
                    price="$4,000,000"
                    Rent="Rent"
                    />
                    <House src={rental2} 
                    title="House in Nigeria" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....." 
                    price="$35,000,000"
                    Rent="Rent"
                    />
                    <House src={rental3} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Rent"
                    />
                </div> 
                <div className="rental__row">
                    <House src={rental1} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Rent"
                    />
                    <House src={rental2} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Rent"
                    />
                    <House src={rental3} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Rent"
                    />
                    <House src={rental2} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Rent"
                    />
                    <House src={rental1} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Rent"
                    />
                </div>
        </div>
    )
}

export default Rentals
