import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Email from '../../Assets/Images/email.png';
import Header from '../Navbar/Header'
import Lock from '../../Assets/Images/lock.png';
import { FormControl, Navbar, Form, Button, Nav, Container } from 'react-bootstrap';
import SectionOne from '../Sections/SectionOne';

const Contained = styled.div`
position: relative;
width: auto;
height: auto;
margin: 0px;
padding: 0px;
overflow-x: hidden;
`

const Home = () => {
    return (
        <Contained>
            <Header />
            <SectionOne/>
        </Contained>
    )
}
export default Home