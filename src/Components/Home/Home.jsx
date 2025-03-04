import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Email from '../../Assets/Images/email.png'
import { Col, Row,Container } from 'react-bootstrap'

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
display: flex;
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
position: absolute;
width: 493px;
height: 59px;
left: calc(50% - 493px/2 + 18.5px);
top: 390px;

font-family: Quicksand;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 19px;
display: flex;
align-items: center;

color: #000000;
`
const Home = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="8" md="8" sm="8" lg="8">  <Logo draggable="false" src={logo} /></Col>
                    <Col xs="4" md="4" sm="4" lg="4">
            <LoginParagraph>
                Do you have an account?&nbsp;<Link to="/login"> Log in?</Link>
            </LoginParagraph>
            </Col>
            </Row>

            </Container>

            <StyledContainer>
                {/* <ButtonStyledContainer> */}
                <GoogleLogin
                    clientId="889751826819-t7g5sgp8rdj4no3si8oisa5or8bh72mh.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />

                {/* </ButtonStyledContainer> */}

            </StyledContainer>
            <StyledContainer>
                {/* <ButtonContainer> */}
                <Link to="/signup">
                    <ButtonContainer>
                        <ButtonLogo><img src={Email} /></ButtonLogo>
                        Continue with Email
                </ButtonContainer>
                </Link>
                {/* </ButtonContainer> */}
                <Terms>I accept the&nbsp; <b>terms and conditions</b>&nbsp; and the&nbsp; <b>privacy policy</b> </Terms>
            </StyledContainer>
        </React.Fragment>
    )
}
export default Home