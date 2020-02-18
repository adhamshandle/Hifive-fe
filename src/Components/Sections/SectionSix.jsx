import React from 'react';
import styled from 'styled-components'
import Estado from '../../Assets/Images/estado1.png'
import Programacion from '../../Assets/Images/programacion.png'
import Google from '../../Assets/Images/Google.png'
import MantenimientoWeb from '../../Assets/Images/mantenimiento-web.png'
import Time from '../../Assets/Images/Time.png'
import Atraer from '../../Assets/Images/atraer1.png'
import UI from '../../Assets/Images/ui1.png'
import { Col, Row, Container } from 'react-bootstrap';
import MobilePrecentage from '../../Assets/Images/MobilePrecentage.png'
import Header from '../Navbar/Header';
import { Link } from 'react-router-dom';

const Mobile = styled.img`
src: url(${props => props.src});
width: 154.11px;
height: 154.11px;
margin-top: 9%;
`
const MantenimientoWebImage = styled.img`
position: absolute;
src: url(${props => props.src});
width: 120px;
height: 120px;
left: 380px;
top: 340px;
`
const ProgramacionImage = styled.img`
src: url(${props => props.src});
width: 120px;
height: 120px;
left: 137.2px;
position: absolute;
top: 399px;

`
const Whatareyouwaiting = styled.p`
width: 100%;

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 44px;
line-height: 60px;
/* or 136% */
display: flex;
align-items: center;
justify-content:center;


color: rgba(0, 0, 0, 0.7);
`

const GoogleImage = styled.img`
src: url(${props => props.src});
margin-top: 15%;
margin-left:11%;

`

const UiImage = styled.img`
src: url(${props => props.src});
margin-top: 20%;
margin-left: 13%;

`
const EstadoImage = styled.img`
src: url(${props => props.src});
margin-right: 30%;
margin-left: 20%;

`
const TimeClock = styled.img`
src: url(${props => props.src});
margin-top:17%;
`
const AtraerPhoto = styled.img`
src: url(${props => props.src});
width: 154.11px;
height: 154.11px;
width: 154.11px;
    margin-left: 6%;
    margin-bottom: 12%;
    height: 154.11px;
`
const YouDecide = styled.p`
width: 458px;
    height: 258px;
    font-family: Poppins;
    font-style: normal;
    margin-left: 16%;
    font-weight: 900;
    font-size: 50px;
    line-height: 75px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #FFCB41;
`
const WeTake = styled.p`
width: 458px;
height: 108.62px;
margin-left: 16%;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 50px;
line-height: 75px;
display: flex;
align-items: center;

color: #000000;
`

const Specified = styled.p`
left: 374px;
width:100%;
-webkit-text-stroke: 3px rgba(0, 0, 0, 0.7);
font-family: Poppins;
font-style: normal;
font-weight: 900;
font-size: 48px;
line-height: 60px;
/* or 125% */

display: flex;
align-items: center;
justify-content:center;
padding-bottom:6%;
color: rgba(0, 0, 0, 0.7);
`
const KeepCalm = styled.p`
width: 393px;
height: 117px;
font-family: Poppins;
margin-top:23%;
font-style: normal;
font-weight: 300;
font-size: 50px;
line-height: 75px;
display: flex;
align-items: center;
color: #000000;
`
const YourDigital = styled.p`
width: 576px;
height: 277px;
font-family: Poppins;
font-style: normal;
font-weight: 900;
margin-top:5%;
font-size: 48px;
line-height: 72px;
display: flex;
align-items: center;

color: #307DFE;
`
const SectionSix = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', paddingTop: '7%', maxWidth: 'none' }}>
            <Row>
                <Col style={{ padding: '0px' }} md={6} lg={6} sm={6} xs={6}>
                    <YouDecide>You decide how much to invest in attract clients</YouDecide>
                    <WeTake>We take care of the rest</WeTake>
                </Col>
                <Col style={{ padding: '0px' }} md={6} lg={6} sm={6} xs={6}>
                    <Mobile src={MobilePrecentage}></Mobile>
                    <AtraerPhoto src={Atraer}></AtraerPhoto>
                    <TimeClock src={Time}></TimeClock>
                    <EstadoImage src={Estado}></EstadoImage>
                </Col>
            </Row>
            <Row>
                <Col style={{ padding: '0px' }} md={6} lg={6} sm={6} xs={6}>
                    <UiImage src={UI}></UiImage>
                    <GoogleImage src={Google}></GoogleImage>
                    <ProgramacionImage src={Programacion}></ProgramacionImage>
                    <MantenimientoWebImage src={MantenimientoWeb}></MantenimientoWebImage>

                </Col>
                <Col style={{ padding: '0px' }} md={6} lg={6} sm={6} xs={6}>
                    <KeepCalm>Keep calm and subscribe</KeepCalm>
                    <YourDigital>Your digital marketing team takes care of everything </YourDigital>
                </Col>
            </Row>
            <Row>
                <Col style={{ padding: '0px' }} md={12} lg={12} sm={12} xs={12}>
                    <Whatareyouwaiting>What are you waiting for? </Whatareyouwaiting>
                    <Specified>Start attracting clients now!</Specified>
                </Col>
            </Row>
        </Container>
    )
}
export default SectionSix