import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/Images/logo.png'
import { Link,useParams } from 'react-router-dom';
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
// const Reset = () => {
    class Reset extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                email: '',
            };
            toast.configure({
                autoClose: 2000,
                draggable: false,
            });
            this.handleChangeEmail = this.handleChangeEmail.bind(this);
            this.sendEmail = this.sendEmail.bind(this);
            var param = this.props.location.search.split('=');
            var token = param[1]
            // console.log(token)
            //CHECK WITH DOUMA DIMO DOM
            console.log("local store befor : " , localStorage)
            localStorage.clear();
            localStorage.setItem('token', token);
            console.log("local store after : " , localStorage)

        }
        handleChangeEmail(event) {
            this.setState({ email: event.target.value });
        }
        sendEmail(event) {
            event.preventDefault();
            const email = ''.concat(this.state.email);
            // const token = ''.concat(localStorage.token)
            axios.post('http://localhost:5001/user/reset-email', null,
                { headers: { email: email } })
                .then(res => {
                    //    console.log(res);
                    if (res.data.resetEmailMessage == "Email sent") {
                        toast.success(res.data.resetEmailMessage, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        history.push('/login')
                    }
                    else {
                        toast.info(res.data.resetEmailMessage, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }

                    //  console.log(res.data);  
                })

        }
        render() {
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
                                    <p><b>Have you forgotten your password?</b></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} lg={12} xs={12}>
                                    <Terms>Please click on the button below to set a new password</Terms>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} lg={12} xs={12}>
                                    <StyledContainer>
                                        <Link to="/reset-password"> <Button variant="outline-primary" style={{ width: '442.86px', height: '71px' }} >Set new password</Button></Link>
                                    </StyledContainer>
                                </Col>
                            </Row>
                        </Container>
                    </StyledContainer>


                    {/* </ButtonContainer> */}

                </React.Fragment>
            )
        }
    }
    export default Reset