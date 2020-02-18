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
padding: 11px;

font-family: Quicksand;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 25px;
display: flex;
align-items: center;

color: #000000;

`
// const Recover = () => {
    class Recover extends React.Component {
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
        }
        handleChangeEmail(event) {
            this.setState({ email: event.target.value });
        }
        sendEmail(event) {
            event.preventDefault();
            const email = ''.concat(this.state.email);
            // const token = ''.concat(localStorage.token)
            axios.post('http://localhost:5001/user/reset-email',null,
            { headers: { email: email }})
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
                <Form style={{ width: '31%' }} onSubmit={this.sendEmail}>
                    <Form.Group controlId="formGroupEmail">
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
                  
                    <Terms>We will send you an email with a link from which you can set a new password </Terms>

                    <Col sm={{ span: 12 }}>
                        <Button variant="outline-primary" style={{ width: '100%', height: '52px' }} type="submit">Send</Button>
                    </Col>
                </Form>
            </StyledContainer>


            {/* </ButtonContainer> */}

        </React.Fragment>
    )
}
}
export default Recover