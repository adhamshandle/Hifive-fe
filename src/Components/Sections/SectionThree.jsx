import React from 'react';
import styled from 'styled-components'
import FirstCol from '../../Assets/Images/SectionThreeFirst.png'
import DigitalMarketingImg from '../../Assets/Images/DigitalMarketing.png'
import SectionThreeCrew from '../../Assets/Images/SectionThreeCrew.png'
import { Col, Row, Container } from 'react-bootstrap';
import plus from '../../Assets/Images/+.png'
import Header from '../Navbar/Header';
import SectionTwo from './SectionTwo'
const FirstColImage = styled.img`
src: url(${props => props.src});
height: 730px;
width: 367px;
margin-left: 199px;
`

const Crew = styled.img `
position: absolute;
width: 510px;
height: 352px;
top: 810px;

src: url(${props => props.src});
opacity: 0.8;
border-radius: 35px;
`

const YourTeam = styled.p `
position: absolute;
width: 541.02px;
height: 51px;
top: 15px;
left: 35px;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 40px;
line-height: 30px;
/* or 75% */

display: flex;
align-items: center;

color: #000000;
`
const DigitalMarketing = styled.img `
position: absolute;
width: 341.02px;
height: 51px;
src: url(${props => props.src});
top: 65px;
left: 39px;
font-family: Poppins;
font-style: normal;
font-weight: 900;
font-size: 40px;
line-height: 50px;
/* or 125% */

display: flex;
align-items: center;
`
const CrewDiv = styled.div `
position: absolute;
width: 664px;
height: 151.58px;
top: 1045px;

background: #FFFFFF;
opacity: 0.85;
`
const Digital = styled.span`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 900;
-webkit-text-stroke: 2px #4D4D4D;
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
const Marketing = styled.p`

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 36px;
margin-top: 7%;
width:80%;
line-height: 50px;
/* or 139% */

display: flex;
align-items: center;

color: #000000;`

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
margin-top: 7%;
line-height: 50px;
/* or 139% */

display: flex;
align-items: center;

color: #000000;
`
const ListItem = styled.li`
margin-top: 5%;
font-family: Poppins;
font-style: normal;
width: 80%;
margin-right:9%;
font-weight: 500;
font-size: 24px;
line-height: 36px;

color: #000000;
`

const SectionThree = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', paddingTop: '14%', maxWidth: 'none' }}>
            <Row>
                <Col style={{ padding: '0px' }} md={6} lg={6} sm={6} xs={6}>
                    <FirstColImage src={FirstCol}></FirstColImage>
                    <Marketing  style={{marginLeft:'28%'}}> <Digital>How&nbsp;</Digital>Much?</Marketing>
                    <Marketing style={{marginLeft:'28%'}}>For Less</Marketing>
                    <Digital style={{marginLeft:'28%'}}>than it cost</Digital>
                    <ol   style={{marginLeft:'27%'}}>
                    <ListItem>One coffee per day </ListItem>
                        <ListItem> A internship  </ListItem>
                        <ListItem> The annual maintenance of your old website  </ListItem>
                    </ol>
                </Col>
                <Col style={{ padding: '0px' }} md={6} lg={6} sm={6} xs={6}>
                   
                    <Marketing> <Digital>Digital&nbsp;</Digital>Marketing</Marketing>
                    <HowItWorks>How it</HowItWorks>
                    <Specified >Works</Specified>
                    <ol>
                        <ListItem>Indicate the areas (divorce, inheritance, etc.) and the geographical area in which you are looking for clients You decide how much to invest! </ListItem>
                        <ListItem>Periodically we send you a report of campaign results with the main metrics: number of impressions, clicks and cost per click </ListItem>
                    </ol>
                    <Crew src={SectionThreeCrew}></Crew>
                    <CrewDiv><YourTeam>Your team of</YourTeam><DigitalMarketing src={DigitalMarketingImg}></DigitalMarketing></CrewDiv>
                </Col>
            </Row>
        </Container>
    )
}
export default SectionThree