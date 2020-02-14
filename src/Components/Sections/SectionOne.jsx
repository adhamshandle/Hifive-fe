import React from 'react';
import styled from 'styled-components'
import businessWomen from '../../Assets/Images/businesswoman1.png'
import { Col, Row, Container } from 'react-bootstrap';
import plus from '../../Assets/Images/+.png'
import Header from '../Navbar/Header';

const SectionOneContainer = styled.div`
background-image: url(${businessWomen});
`
const BackgroundImage = styled.img`
src: url(${props => props.src});
height: auto;
width: -webkit-fill-available;
`
const Ad = styled.div`
position: absolute;
left: 5.75%;
right: 7.75%;
top: 22.33%;
bottom: 23.33%;

background: #FFFFFF;
opacity: 0.9;
border-radius: 50px;
`
const SectionParagraph = styled.p`
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
height: 79px;
font-family: Poppins;
font-style: normal;
font-weight: 900;
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
const Ellipse = styled.div`
position: absolute;
width: 160px;
height: 160px;
left: 1405px;
border-radius: 78px;
top: 77px;
z-index: 2;
background: linear-gradient(226.31deg,#4092F1 -9.28%,#A77DFF 127.04%);
box-shadow: 0px 0px 4px rgba(0,0,0,0.25);
`
const AdHeader = styled.h1`


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
position: absolute;
    left: 29.25%;
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
position: absolute;
width: 116px;
height: 89px;
left: 1388px;
top: 179px;

font-family: Quicksand;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: flex-end;
text-align: center;

color: #FFFFFF;
`

const SectionOne = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', maxWidth: 'none' }}>
            <Row>
                <Col style={{ padding: '0px' }} md={12} lg={12} sm={12} xs={12}>
                    <BackgroundImage src={businessWomen} />
                    <Ellipse><EllipseParagraph>29,99€/month</EllipseParagraph></Ellipse>

                    <SectionParagraph>For you&nbsp;<Specified>lawyers</Specified> </SectionParagraph>
                    <Ad>
                        <AdHeader style={{ position: 'absolute', left: '14.5%', right: '52.69%', top: '29.44%', bottom: '64.56%' }}>Your Web</AdHeader>
                        <AdHeader style={{ position: 'absolute', left: '54.12%', right: '16.44%', top: '29.44%', bottom: '64.56%' }}>Digital Marketing</AdHeader>
                        <HeaderParagraph style={{ position: 'absolute', left: '4.5%', right: '52.5%', top: '30.44%', bottom: '47.22%' }}>Your website optimized especially for viewing on smartphones </HeaderParagraph>
                        <HeaderParagraph style={{ position: 'absolute', left: '47.12%', right: '17.31%', top: '21.44%', bottom: '47.22%', wordSpacing: '5px' }}>We manage your Google Advertising Campaign</HeaderParagraph>
                        <HeaderImage src={plus} draggable={false} />
                        <AdButton><ButtonParagraph>See sample web</ButtonParagraph></AdButton>
                    </Ad>
                </Col>
            </Row>
        </Container>
    )
}
export default SectionOne