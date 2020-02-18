import React from 'react';
import styled from 'styled-components'
import Rectangle from '../../Assets/Images/Rectangle274.png'
import { Col, Row, Container } from 'react-bootstrap';
import plus from '../../Assets/Images/+.png'
import Header from '../Navbar/Header';
import px2vw from "../../utils/px2vw";

const BackgroundImage = styled.img`
src: url(${props => props.src});
height: auto;
width: -webkit-fill-available;
`
const FillTheForm = styled.p `
width: 386px;
height: 84px;
text-align : center;
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 64px;
line-height: 60px;
/* or 94% */
width: 386px;
height: 84px;
left: 595px;
top: 100px;

display: flex;
align-items: center;

color: #FFFFFF;
`

const SectionEight = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', maxWidth: 'none' }}>
            <Row>
                <Col style={{ padding: '0px' }} md={12} lg={12} sm={12} xs={12}>
                    <BackgroundImage src={Rectangle} />
                    <FillTheForm>FillTheForm</FillTheForm>
                   
                </Col>
            </Row>
        </Container>
    )
}
export default SectionEight