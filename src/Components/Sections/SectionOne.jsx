import React from 'react';
import styled from 'styled-components'
import businessWomen from '../../Assets/Images/businesswoman1.png'
import { Col, Row, Container } from 'react-bootstrap';
import plus from '../../Assets/Images/+.png'
import Header from '../Navbar/Header';
import px2vw from "../../utils/px2vw";
const SectionOneContainer = styled.div`
background-image: url(${businessWomen});
`
const BackgroundImage = styled.img`
src: url(${props => props.src});
height: auto;
width: -webkit-fill-available;
`
const Ad = styled.div`
@media (max-width: 768px)  {
  left: 7.75%;
  width: 84%;
  
    }
position: absolute;
left: 5.75%;
right: 7.75%;
top: 22.33%;
bottom: 23.33%;
height: 478px;
background: #FFFFFF;
opacity: 0.9;
border-radius: 50px;
`
const SectionParagraph = styled.p`
@media (max-width: 768px)  {
  font-size:44px;
  width:196px;
  display:block;
  left:36%;

  }
position: absolute;
width: 656px;
height: 79px;
left: 177px;
top: 47px;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 48px;
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
color: #000000;
`
const Specified = styled.span`
@media (max-width: 768px)  {
    -webkit-text-stroke: 3px rgba(0, 0, 0, 0.7);
    font-size: 40px;
    margin-top: 6%;
    display: block;
    color: rgba(0, 0, 0, 0.7);
    }
height: 79px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 900;
-webkit-text-stroke: 3px black;
font-size: 48px;
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
color: #000000;
`
const Ellipse = styled.div`
  @media (min-width: 769px) and (max-width: 1025px) {
    height: 130px;
    width: 130px;

  }
  @media (max-width: 768px){
    height: 130px;
    width: 130px;
    left: 81%;
  }
position: absolute;
width: 160px;
height: 160px;
left: 86%;
border-radius: 78px;
top: 12%;
z-index: 2;
background: linear-gradient(226.31deg,#4092F1 -9.28%,#A77DFF 127.04%);
box-shadow: 0px 0px 4px rgba(0,0,0,0.25);
`
const AdHeader = styled.h1`

@media (max-width: 768px){
    position: absolute;
    font-size: 29px;
    bottom: 76.56%;
    width:100%;
    font-size: 29px !important;
}
font-family: Quicksand;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: flex-end;
text-align: center;

color: #303030;
`
const HeaderParagraph = styled.p`
    @media (max-width:768px){
        position: absolute;
    left: 10.5%;
    right: 52.5%;
    width: 36%;
    font-size: 25px;
    top: 34.44% !important;
    bottom: 47.22% !important;
    }
    height: 147px;
    width: 466px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 42px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
    text-align: center;
    color: #414141;
`
const HeaderImage = styled.img`
@media (max-width:768px){
    position: absolute;
    left: 47.31%;
    right: 25.62%;
    top: 61.11%;
    bottom: 54.89%;
}
position: absolute;
left: 43.31%;
right: 43.62%;
top: 39.11%;
bottom: 54.89%;
src: url(${props => props.src});
font-family: Quicksand;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: flex-end;
text-align: center;

color: #303030;
`
const AdButton = styled.button`
@media (max-width:768px){
    position: absolute;
    left: 35.25%;
    right: 36.75%;
    width: 182px;
    height: 58px;
    top: 79.78%;
    bottom: 32.89%;
}
position: absolute;
    left: 33.25%;
    right: 36.75%;
    width: 400px;
    height: 75px;
    top: 71.78%;
    bottom: 32.89%;
    background: linear-gradient(212.22deg,#FFE6A3 38.6%,#FFA16F 109.37%);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 20px;
`
const ButtonParagraph = styled.p`
text-align: center;
/* position: absolute; */
/* left: 38.25%; */
/* right: 36.75%; */
/* top: 58.78%; */
padding: 0px;
margin: 0px;
/* bottom: 32.89%; */
font-family: Quicksand;
font-style: normal;
font-weight: bold;
font-size: 22px;
width: 100%;
line-height: 27px;
/* display: -webkit-box; */
/* display: -webkit-flex; */
display: -ms-flexbox;
/* display: flex; */
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
/* align-items: center; */
text-align: center;
color: #303030;
`
const EllipseParagraph = styled.p`
@media (min-width: 768px) and (max-width: 1025px) {
    font-size: 25px;
    top: 17%;
    left: 18%;

  }
position: absolute;
    width: 101px;
    height: 89px;
    left: 22px;
    top: 38px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
    text-align: center;
    color: #FFFFFF;
`

const SectionOne = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', maxWidth: 'none' }}>
            <Row>
                <Col style={{ padding: '0px' }} md={12} >
                    <BackgroundImage src={businessWomen} />
                    <Ellipse><EllipseParagraph>29,99€<br></br><span style={{ fontSize: '24px', display: 'contents' }}>/month</span></EllipseParagraph></Ellipse>

                    <SectionParagraph>For you&nbsp;<Specified>lawyers</Specified> </SectionParagraph>
                    <Ad>
                        <AdHeader style={{ position: 'absolute', left: '15.5%', right: '52.69%', top: '29.44%', bottom: '64.56%' }}>Your Web</AdHeader>
                        <AdHeader style={{ position: 'absolute', left: '55.12%', right: '16.44%', top: '29.44%', bottom: '64.56%' }}>Digital Marketing</AdHeader>
                        <HeaderParagraph style={{ position: 'absolute', left: '8.5%', right: '52.5%', top: '30.44%', bottom: '47.22%' }}>Your website optimized especially for viewing on smartphones </HeaderParagraph>
                        <HeaderParagraph style={{ position: 'absolute', left: '51.12%', right: '17.31%', top: '21.44%', bottom: '47.22%', wordSpacing: '5px' }}>We manage your Google Advertising Campaign</HeaderParagraph>
                        <HeaderImage src={plus} draggable={false} />
                        <AdButton><ButtonParagraph>See sample web</ButtonParagraph></AdButton>
                    </Ad>
                </Col>
            </Row>
        </Container>
    )
}
export default SectionOne