import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Email from '../../Assets/Images/email.png';
import Lock from '../../Assets/Images/lock.png';
import { Col, Row, Form, Button, InputGroup, Container } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../history';



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
left: 35.06%;
right: 36.81%;
top: 67.78%;
bottom: 25.67%;

font-family: Quicksand;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 19px;
text-align: center;

color: #000000;
`
// const Login = () => {
class Login extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         email: '' ,
    //         password: ''
    //     };
    //   }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        toast.configure({
            autoClose: 2000,
            draggable: false,
        });
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.login = this.login.bind(this);
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }
    login(event) {
        event.preventDefault();
        const email = ''.concat(this.state.email);
        const password = ''.concat(this.state.password)
        axios.get('http://localhost:5001/user/login', { headers: { email: email, password: password } })
            .then(res => {
                //    console.log(res);
                if (res.data.loginMessage == "wrong email or password") {
                    toast.error(res.data.loginMessage, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
                else if (res.data.loginMessage == "successful login") {
                    toast.success(res.data.loginMessage, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    localStorage.setItem('token', res.data.token);
                    history.push('/home')
                }
                else {
                    toast.info("Something went wrong", {
                        position: toast.POSITION.BOTTOM_CENTER
                    });
                }
                //  console.log(res.data);
                // console.log("local stor. : " , localStorage.token)
            })

    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs="8" md="8" sm="8" lg="8">  <Logo draggable="false" src={logo} /></Col>
                        <Col xs="4" md="4" sm="4" lg="4">
                            <LoginParagraph>
                                no account?&nbsp;<Link to="/signup"> Sign up?</Link>
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
                </StyledContainer>
                <StyledContainer>
                    {/* <ButtonContainer> */}
                    Continue with Email
                {/* </ButtonContainer> */}
                </StyledContainer>
                <StyledContainer>
                    <Form style={{ width: '31%' }} onSubmit={this.login}>
                        <Form.Group controlId="formGroupEmail">
                            <label>Email </label>
                            <InputGroup>

                                <Form.Control
                                    value={this.state.email}
                                    onChange={(e) => this.handleChangeEmail(e)}
                                    aria-describedby="inputGroupPrepend"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                                <InputGroup.Prepend>
                                    <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }} id="inputGroupPrepend"><img style={{ height: '20px' }} src={Email} /></InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <InputGroup>
                                <Form.Control
                                    value={this.state.password}
                                    onChange={(e) => this.handleChangePassword(e)}
                                    type="password"
                                    placeholder="Password"
                                    required />
                                <InputGroup.Prepend>
                                    <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }} id="inputGroupPrepend"><img style={{ height: '20px' }} src={Lock} /></InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form.Group>
                        <Terms> Have you forgotten your password?&nbsp; <Link style={{ color: 'black' }} to="/email-confirmation"> Recover it </Link> </Terms>

                        <Col sm={{ span: 12 }}>
                            <Button style={{ width: '100%', height: '52px' }} type="submit">Sign In</Button>
                        </Col>
                    </Form>
                </StyledContainer>

                {/* </ButtonContainer> */}

            </React.Fragment>

        )
    }
}




export default Login