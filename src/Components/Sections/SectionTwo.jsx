import React from 'react';
import styled from 'styled-components'
import SecondCol from '../../Assets/Images/TWOORMORELAWYERS-blue.png'
import { Col, Row, Container } from 'react-bootstrap';
import plus from '../../Assets/Images/+.png'
import Header from '../Navbar/Header';

const TheWeb = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 30px;
/* identical to box height, or 62% */
margin-top: 4%;
margin-left: 18%;
display: flex;
align-items: center;

color: #000000;
`

const SecondColImage = styled.img`
src: url(${props => props.src});
height: 670px;
width: 267px;
`

const Specified = styled.span`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 900;
-webkit-text-stroke: 3px #4D4D4D;
font-size: 36px;
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
line-height: 30px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;

-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
text-align: center;
color: #4D4D4D;
`
const HowItWorks = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 36px;
margin-left: 18%;
margin-top: 7%;
line-height: 50px;
/* or 139% */

display: flex;
align-items: center;

color: #000000;
`
const ListItem = styled.li`
margin-left: 18%;
margin-top: 5%;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;

color: #000000;
`
const CreateMyWeb = styled.button`
margin-left: 18%;
margin-top: 5%;
width: 474px;
height: 75px;
background: linear-gradient(114.34deg, #2537D6 -18.15%, #4B62FF 18.06%, #4C66FE 52.54%, #627CFF 88.84%, #4285F4 142.48%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
color: #FFFFFF;
font-family: Quicksand;
font-style: normal;
font-weight: bold;
`

const SectionTwo = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', paddingTop: '14%', maxWidth: 'none' }}>
            <Row>
                <Col style={{ padding: '0px' }} md={6} lg={6} sm={6} xs={6}>
                    <TheWeb>The&nbsp;<Specified>Web</Specified></TheWeb>
                    <HowItWorks>How it</HowItWorks>
                    <Specified style={{marginLeft:'18%'}}>Works</Specified>
                    <ol>
                        <ListItem>One coffee per day</ListItem>
                        <ListItem>A internship</ListItem>
                        <ListItem>The annual maintenance of your old website </ListItem>
                    </ol>
                    <CreateMyWeb>Create my web</CreateMyWeb>
                </Col>
                <Col style={{ padding: '0px' }} md={6} lg={6} sm={6} xs={6}>
                    <SecondColImage src={SecondCol}></SecondColImage>
                </Col>
            </Row>
        </Container>
    )
}
export default SectionTwo