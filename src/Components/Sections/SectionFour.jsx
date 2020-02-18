import React from 'react';
import styled from 'styled-components'
import businessWomen from '../../Assets/Images/businesswoman1.png'
import { Col, Row, Container } from 'react-bootstrap';
import plus from '../../Assets/Images/+.png'
import Header from '../Navbar/Header';
import sectionFiveBackground from '../../Assets/Images/section5background.png'
import boy from '../../Assets/Images/boy.png'
import boyGirl from '../../Assets/Images/boyGirl.png'
import family from '../../Assets/Images/family.png'

const BackgroundImage = styled.img`
src: url(${props => props.src});
height: 1586;
width: -webkit-fill-available;
`
const BoxBackgroundImage = styled.img`
src: url(${props => props.src});
height: 50;
width: 50;
margin-left: 24px;
margin-top: 24px;
`
const Box = styled.div`
width: 407.25px;
height: 686.08px;
position: absolute;
left: 5.75%;
right: 7.75%;
top: 22.33%;
bottom: 23.33%;
margin-left: 25px;

background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`
const BoxHeader = styled.p`
position: absolute;
width: 178.11px;
height: 81.63px;
left: 114.57px;
top: 52px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;

color: rgba(0, 0, 0, 0.8);
margin-left: 24px;
margin-top: 7px;
`
const BoxPrice = styled.p`
position: absolute;
width: 170.69px;
height: 85.75px;
left: 155px;
margin-top: 104px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 54px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
`
const BoxMonth = styled.p`
position: absolute;
width: 126.16px;
height: 51.95px;
left: 133.13px;
top: 226.86px;
margin-top: 40px;
margin-left: 50px;

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 27px;
display: flex;
align-items: center;
text-align: center;

color: #676767;
`
const BoxContent = styled.p`
position: absolute;
width: 274px;
height: 191px;
left: 68px;
top: 311px;

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
`
const BoxBtn = styled.button`
position: absolute;
width: 406px;
height: 686px;
left: 45px;
top: 550px;

background: #FFFFFF;
border-radius: 10px;
position: absolute;
width: 317.25px;
height: 69.33px;
left: 45px;
top: 550px;

border: 1px solid #307DFE;
box-sizing: border-box;
border-radius: 5px;
`


const SectionFour = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', maxWidth: 'none' }}>
            <Row>
                <Col style={{ padding: '0px' }} md={4} lg={4} sm={4} xs={4}>
                    <BackgroundImage src={sectionFiveBackground} />

                    <Box>
                        <BoxBackgroundImage src={boy} />
                        <BoxHeader>FREELANCE</BoxHeader>
                        <BoxPrice >29.99 €</BoxPrice>
                        <BoxMonth>month</BoxMonth>
                        <BoxContent> Website <br/> + <br/> Google Advertising Campaigns Management Add 1 lawyer to the website </BoxContent>
                        <BoxBtn>Start free</BoxBtn>
                    </Box>

                </Col>
                <Col style={{ padding: '0px' }} md={4} lg={4} sm={4} xs={4}>
                    <Box>
                        <BoxBackgroundImage src={boyGirl} />
                        <BoxHeader>ASSOCIATES</BoxHeader>
                        <BoxPrice >49.99 €</BoxPrice>
                        <BoxMonth>month</BoxMonth>
                        <BoxContent>Website <br/> + <br/> Google Advertising Campaigns Management Add 2 lawyers to the website</BoxContent>
                        <BoxBtn>Start free</BoxBtn>
                    </Box>
                </Col>
                <Col style={{ padding: '0px' }} md={4} lg={4} sm={4} xs={4}>
                    <Box>
                        <BoxBackgroundImage src={family} />
                        <BoxHeader>LAW FIRM</BoxHeader>
                        <BoxPrice >99.99 €</BoxPrice>
                        <BoxMonth>month</BoxMonth>
                        <BoxContent>Website <br/> + <br/> Google Advertising Campaigns Management Add more than 2 lawyers to the website</BoxContent>
                        <BoxBtn>Start free</BoxBtn>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}
export default SectionFour