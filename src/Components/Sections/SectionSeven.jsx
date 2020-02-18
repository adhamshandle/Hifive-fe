import React from 'react';
import styled from 'styled-components'
import FirstCol from '../../Assets/Images/SectionThreeFirst.png'
import DigitalMarketingImg from '../../Assets/Images/DigitalMarketing.png'
import SectionThreeCrew from '../../Assets/Images/SectionThreeCrew.png'
import { Col, Row, Container } from 'react-bootstrap';
import Person from '../../Assets/Images/Person.png'
import Header from '../Navbar/Header';
import { Link } from 'react-router-dom';

const Avatar = styled.img`
src: url(${props => props.src});
margin-bottom:20%;
margin-right:30%;
box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.14);
border-radius: 25px;
`
const Professional = styled.p`
margin-left:10%;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 60px;
/* or 125% */

display: flex;
align-items: center;

color: #000000;
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
margin-left:10%;

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
margin-top: 3%;
line-height: 50px;
/* or 139% */
margin-left:10%;

display: flex;
align-items: center;

color: #000000;
`
const PhotosAndVideos = styled.span`
font-weight: 900;
-webkit-text-stroke: 2px #4D4D4D;
font-size: 48px;

@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
line-height: 30px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
margin-left:10%;
font-family: Poppins;
font-style: normal;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
text-align: center;
color: #4D4D4D;
`
const ListItem = styled.li `
width: ${props => props.width};


font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
margin-top:2%;
color: #000000;
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

const SubscriptionRectange = styled.div `
width: 321px;
height: 276px;
margin-left: 6%;
background: #FFFFFF;
box-shadow: 2px 4px 14px rgba(0, 0, 0, 0.25);
border-radius: 25px;
`
const SubscriptionPrice = styled.p `


font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 72px;
display: flex;
align-items: center;
-webkit-text-stroke: 2px ${props => props.color};
color: ${props => props.color};
`
const EuroIcon = styled.p `
font-size:30px;
font-weight:100;
line-height:65px;
opacity: 0.3;
`
const JobTitle = styled.p `
line-height:65px;
font-size:20px;
`
const RectangleParagraph = styled.p `
width: 100%;
text-align:center;
height: 66px;
align-text: center;
display: inline-block;
font-family: Poppins;
font-style: normal;
font-size: 24px;
line-height: 36px;

color: #000000;
`
const Book = styled.button `
width: 465px;
height: 75px;
color:#FFFFFF;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 22px;
background: linear-gradient(104.1deg, #307DFE 4.95%, #3881FC 28.77%, #5591F5 71.76%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
`
const ContactUs = styled.div `
width: 544px;

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 36px;
margin-left: 9%;
color: #000000;
margin-top:8%;
margin-bottom:9%;
`

const SectionSeven = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', paddingTop: '7%', maxWidth: 'none' }}>
            <Row>
                <Col style={{ padding: '0px' }} md={12} lg={12} sm={12} xs={12}>
                    <div style={{ float: 'right', marginRight: '20%' }}>
                        <Avatar draggable={false} src={Person}></Avatar>
                    </div>

                    <Professional>Professionals</Professional>
                    <PhotosAndVideos>photos and videos </PhotosAndVideos>
                    <HowItWorks>How it</HowItWorks>
                    <Specified >Works</Specified>
                    <ol   style={{marginLeft:'9%', marginTop:'2%'}}>
                        <ListItem width={'350px'}>We move to your offices and assemble the set of lighting, background, microphone, and professional camera  </ListItem>
                        <ListItem>We make profile photos and video interviews with each of the lawyers </ListItem>
                        <ListItem>We edit the photos and videos and upload them to your website</ListItem>
                    </ol>
                    <Marketing  style={{marginLeft:'6%'}}> How&nbsp;<Digital>much?</Digital></Marketing>
                    <div style={{display:'inline-flex', width:'100%'}}>
                    <SubscriptionRectange><p style={{display:'inline-flex', width:'100%',justifyContent:'center',marginTop:'10%'}}><SubscriptionPrice color={'#5591F5'}>49</SubscriptionPrice>&nbsp;<EuroIcon>€</EuroIcon>&nbsp;<JobTitle>/lawyer</JobTitle></p><RectangleParagraph> Linkedin style professional photo</RectangleParagraph></SubscriptionRectange>
                    <SubscriptionRectange><p style={{display:'inline-flex', width:'100%',justifyContent:'center',marginTop:'10%'}}><SubscriptionPrice color={'#FFA16F'}>49</SubscriptionPrice>&nbsp;<EuroIcon>€</EuroIcon>&nbsp;<JobTitle>/lawyer</JobTitle></p><RectangleParagraph>Professional video interview style</RectangleParagraph></SubscriptionRectange>
                    <SubscriptionRectange  style={{width:'28%'}}><p style={{display:'inline-flex', width:'100%',justifyContent:'center',marginTop:'10%'}}><SubscriptionPrice color={'rgba(0, 0, 0, 0.7);'}>150</SubscriptionPrice>&nbsp;<EuroIcon>€</EuroIcon>&nbsp;<JobTitle>/travel fees</JobTitle></p><RectangleParagraph>Free if photos and videos are contracted for an amount greater than or equal to € 200</RectangleParagraph></SubscriptionRectange>
                    </div>
                    <div style={{display:'flex',justifyContent:'center', marginTop:'5%'}}>
                    <Book>Book</Book>
                    </div>
                    <ContactUs>
                        <p>Privacy Policy</p>
                        <p>Legal warning</p>
                        <p>Cookies policy</p>
                        <br/>
                        <p>Contact us: hfabogados@hotmail.es</p>
                        <Link to="/spanish">Spanish</Link>
                    </ContactUs>
                </Col>
            </Row>
        </Container>
    )
}
export default SectionSeven