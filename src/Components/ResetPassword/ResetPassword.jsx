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
// const ResetPassowrd = () => {
class ResetPassowrd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
        };
        toast.configure({
            autoClose: 2000,
            draggable: false,
        });
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }
    resetPassword(event) {
        event.preventDefault();
        const password = ''.concat(this.state.password);
        const token = ''.concat(localStorage.token)
        axios.post('http://localhost:5001/user/reset-password', null,
            { headers: { password: password, token: token } })
            .then(res => {
                   
                if (res.data.ResetPasswordMessage == "Password Changed") {
                    console.log("ana fel if");
                    toast.success(res.data.ResetPasswordMessage, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    history.push('/login')
                }
                else {
                    console.log("ana fel else");
                    toast.info(res.data.ResetPasswordMessage, {
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
                    <Form style={{ width: '29%' }} onSubmit={this.resetPassword}>
                        <Form.Group controlId="formGroupPassword">
                            <InputGroup>
                                <Form.Control 
                                    value={this.state.password}
                                    onChange={(e) => this.handleChangePassword(e)}
                                    type="password"
                                    placeholder="New Password"
                                    required />
                                <InputGroup.Prepend>
                                    <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }} id="inputGroupPrepend"><img style={{ height: '20px' }} src={Lock} /></InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form.Group>


                        <Col sm={{ span: 12 }}>
                            <Button variant="outline-primary" style={{ width: '442.86px', height: '71.43px', marginTop: '12%' }} type="submit">Save</Button>
                        </Col>
                    </Form>
                </StyledContainer>


                {/* </ButtonContainer> */}

            </React.Fragment>
        )
    }
}
export default ResetPassowrd