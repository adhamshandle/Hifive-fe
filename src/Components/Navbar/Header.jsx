import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Email from '../../Assets/Images/email.png';
import Lock from '../../Assets/Images/lock.png';
import { FormControl, Navbar, Form, Button, Nav, Container } from 'react-bootstrap';

const Logo = styled.img`
position: absolute;
src: url(${props => props.src});
left: 64px;
top : 9px;
height: 100px;
width: 100px;
`
const LogoParagraph = styled.p`
position: absolute;
left: 160px;
top: 48px;
bottom: 90.22%;

font-family: Raleway;
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 30px;
`


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ height: '150px' }} variant="light">
                <Navbar.Brand href="#home"><Logo src={logo}></Logo> <LogoParagraph>hifive</LogoParagraph></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ position: 'absolute', top: '61px', right: '104px', fontFamily: 'Poppins', fontWeight: '300', fontSize: '18px', fontStyle: 'normal', lineHeight: '30px', color:'black' }} className="ml-auto">
                        <Nav.Link href="#home">Faq</Nav.Link>
                        <Nav.Link href="#home">Prices</Nav.Link>
                        <Nav.Link href="#features">Create my web</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Header