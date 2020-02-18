import React from 'react';
import styled from 'styled-components'
import Rectangle from '../../Assets/Images/Rectangle274.png'
import { Col, Row, Container, Form } from 'react-bootstrap';
import plus from '../../Assets/Images/+.png'
import Header from '../Navbar/Header';
import px2vw from "../../utils/px2vw";
import { Link } from 'react-router-dom';

const BackgroundImage = styled.img`
src: url(${props => props.src});
height: auto;
width: -webkit-fill-available;
`
const FillTheForm = styled.p`
width: 386px;
height: 84px;
text-align : center;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 64px;
line-height: 60px;
/* or 94% */
position:absolute;
width: 386px;
height: 84px;
left: 595px;
top: 100px;

display: flex;
align-items: center;

color: #FFFFFF;
`
const Youareonestep = styled.p`
position: absolute;
width: 470px;
height: 108px;
left: 557px;
top: 290px;

font-family: Quicksand;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 31px;
display: flex;
align-items: flex-end;
text-align: center;

color: #FFFFFF;
`
const Specified = styled.p`
-webkit-text-stroke: 3px white;
font-family: Poppins;
font-style: normal;
font-weight: 900;
position:absolute;
width: 386px;
height: 84px;
left: 455px;
top: 150px;
font-size: 48px;
line-height: 60px;
/* or 125% */

display: flex;
align-items: center;
justify-content:center;

color: white;
`
const Label = styled.p`
position: absolute;
width: 529px;
height: 100px;
left: 623px;
top: 450px;


font-family: Quicksand;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 30px;
display: flex;
align-items: flex-end;

color: #FFFFFF;
`
const WhiteRectangle = styled.div `
position: absolute;
width: 488px;
height: 54px;
left: 533px;
top: 580px;


background: #FFFFFF;
opacity: 1.8;
filter: blur(4px);
backdrop-filter: blur(50px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 20px;
`
const GoToForm = styled.button `
position: absolute;
width: 369px;
height: 66px;
left: 583px;
top: 614px;

background: linear-gradient(102.76deg, #307DFE 4.95%, #3881FC 28.77%, #5591F5 71.76%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
`

const SeeSample = styled.p `
position: absolute;
width: 281px;
height: 50px;
left: 687px;
top: 714px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
`
const GoToFormParagraph = styled.p `

font-family: Poppins;
font-style: normal;

position: absolute;
width: 141px;
height: 27px;
left: 114px;
top: 20px;
font-weight: 500;
font-size: 18px;
line-height: 27px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
`
const EasyPeasy = styled.p`
display:flex;
justify-content: center;
text-align; center;
position: absolute;
width: 535px;
height: 92px;
left: 451px;
top: 200px;


font-family: Quicksand;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 40px;
display: flex;
align-items: flex-end;
text-align: center;

color: #FFFFFF;
`
const EasyPesasySpecified = styled.p`
color: #FFCE37;
margin-left: 2%;
width: 100%;
position: absolute;
left: 196px;
`
const SectionEight = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', maxWidth: 'none' }}>
            <Row>
                <Col style={{ padding: '0px' }} md={12} lg={12} sm={12} xs={12}>
                    <BackgroundImage src={Rectangle} />
                    <FillTheForm>Fill the</FillTheForm>
                    <Specified>form</Specified>
                    <EasyPeasy>Create your web is <EasyPesasySpecified>easy peasy</EasyPesasySpecified></EasyPeasy>
                    <Youareonestep>You are one step away from creating your website You only need to upload your data And wala!</Youareonestep>
                    <Label> Name of the firm or lawyer</Label>
                    <WhiteRectangle></WhiteRectangle>
                    <GoToForm><GoToFormParagraph>Go to the form!</GoToFormParagraph></GoToForm>
                    <Link><SeeSample>See sample web</SeeSample></Link>
                </Col>
            </Row>
        </Container>
    )
}
export default SectionEight