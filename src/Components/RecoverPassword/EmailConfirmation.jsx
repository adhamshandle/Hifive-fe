import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Email from '../../Assets/Images/email.png';
import Lock from '../../Assets/Images/lock.png';
import { Col, Row, Form, Button, InputGroup, Container } from 'react-bootstrap';

const responseGoogle = (response) => {
    console.log(response);
}

const Logo = styled.img`
max-width: 60%;
float: right;
margin-right: 8%;
height: auto%;
src: url(${props => props.src});
`

const StyledContainer = styled.div`
text-align: center;
display:flex;
justify-content: center;
margin-top: 2%;

`
const LoginParagraph = styled.p`
float: right;
margin-top: 13%;
width: 300px;
height: 59px;
left: calc(50% - 300px/2 + 536px);
top: 69px;
font-family: Quicksand;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
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
const ButtonContainer = styled.button`
position: relative;
width: 476.23px;
height: 66.85px;
left: calc(50% - 447.23px/2 - 15px);

background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 5px;
`

const ButtonLogo = styled.span`
position: absolute;
left: 20%;
top : 15px;
`


const Terms = styled.p`
padding: 11px;

font-family: Quicksand;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 25px;

color: #000000;

`
const EmailConfirmation = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="8" md="8" sm="8" lg="8">  <Logo draggable="false" src={logo} /></Col>
                </Row>

            </Container>
            <StyledContainer>
                <Container>
                <Row>
                <Col sm={12} md={12} lg={12} xs={12}>
                <p><b>Create your web today with us!</b></p>
                </Col>
                </Row>
                <Row>
                <Col sm={12} md={12} lg={12} xs={12}>
                <Terms>Please click on the button below to confirm your email</Terms>
                </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12} xs={12}>
                        <StyledContainer>
                        <Link to="/recover"> <Button variant="outline-primary" style={{ width: '442.86px', height: '71px' }} >Confirm email</Button></Link>
                        </StyledContainer>
                    </Col>
                </Row>
                </Container>
            </StyledContainer>


            {/* </ButtonContainer> */}

        </React.Fragment>
    )
}
export default EmailConfirmation