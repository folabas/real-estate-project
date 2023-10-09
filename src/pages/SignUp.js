import React, {useState} from 'react'
import "../pages/SignUp.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import { Button } from '../components/Button';
import { auth } from '../fib';

 


const Nav = styled.nav`
    height: 130px;
    justify-content: space-between;
    z-index: 100;
    position: fixed;
    width: 100%;
    display: flex;
`
const Logo = styled(Link)`
    padding: 0.8rem 1rem;
    cursor: ponter;
    align-items: center;
    display: flex;
    height: 100%;
`
const MenuBars  = styled(FaBars)`
    display: none;
    margin-top: 40px;
    margin-right: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        cursor: pointer;
        transform: translate(-50%, 25%);
    };
`;
const NavBtn = styled.div`
    color: #000;
    display: flex;
    align-items: center;
    margin-right: -940px;
    // padding: 0 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const NavBtn2 = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40px;
    // padding: 0 1rem;
    color: #000;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


function SignUp( {toggle} ) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const register = e => {
        e.preventDefault()
        
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
            })
            .catch(error => alert(error.message))
        
    }

    return (
        <div className='SignUp'>

        <Nav>
                
                <Logo to="/">
                <img className="login__logo" 
                src='https://i.pinimg.com/564x/9d/b2/e0/9db2e0a32b4497ec395aae75471267f6.jpg' 
                alt='Login'
            />
                </Logo>
                <MenuBars onClick={toggle} />
                
                <NavBtn>
                <Button to="/sign-up" primary='true'>
                    Sign Up
                </Button>
            </NavBtn>
            
            <NavBtn2>
                <Button to="/login" primary='true'>
                    Login
                </Button>
            </NavBtn2>
            

            </Nav>


            <div className='sign__container'>
                <h1>Sign Up</h1>

                <form>
                    <h5>UserName</h5>   
                    <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value);
                    }} /> 

                    <h5>E-mail</h5>   
                    <input type="text" value={email} onChange={(e) => {setEmail(e.target.value);
                    }}/>

                    <h5>Password</h5>   
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value);
                    }}/>
                    <button className='sign__sign-upButton' onClick={register} >Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
