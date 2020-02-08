import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
 import Email from '../../Assets/Images/email.png'
 
const responseGoogle = (response) => {
  console.log(response);
}

const Logo = styled.img`
max-width: 60%;
height: auto%;
src: url(${props => props.src});
`

const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 2%;
`
const LoginParagraph = styled.p`
position: absolute;
width: 300px;
height: 59px;
left: calc(50% - 300px/2 + 536px);
top: 69px;
font-family: Quicksand;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
display: flex;
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
top: 512px;

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
                <Logo draggable="false" src={logo} />
            </Container>
            <LoginParagraph>
                Do you have an account?&nbsp;<Link to="#"> Log in?</Link>
            </LoginParagraph>
            <Container>
                {/* <ButtonContainer> */}
                <GoogleLogin
        clientId="889751826819-t7g5sgp8rdj4no3si8oisa5or8bh72mh.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
     
                {/* </ButtonContainer> */}

            </Container>
            <Container>
            {/* <ButtonContainer> */}
            <Link to="/login">
                <ButtonContainer>
                  <ButtonLogo><img src={Email}/></ButtonLogo>
                Continue with Email
                </ButtonContainer>
                </Link>
                {/* </ButtonContainer> */}
                <Terms>I accept the&nbsp; <b>terms and conditions</b>&nbsp; and the&nbsp; <b>privacy policy</b> </Terms>
            </Container>
        </React.Fragment>
    )
}
export default Home