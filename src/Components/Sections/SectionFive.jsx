import React from 'react';
import styled from 'styled-components'
import businessWomen from '../../Assets/Images/businesswoman1.png'
import { Col, Row, Container } from 'react-bootstrap';
import plus from '../../Assets/Images/+.png'
import Header from '../Navbar/Header';
import sectionFiveBackground from '../../Assets/Images/section5background.png'
import boy from '../../Assets/Images/boy.png'
import boyGirl from '../../Assets/Images/boyGirl.png'
import family from '../../Assets/Images/family.png'
import { Link } from 'react-router-dom';

const Specified = styled.span`
height: 79px;
font-family: Poppins;
font-style: normal;
font-weight: 900;
line-height: 30px;
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

const AllPlans = styled.p`
height: 54px;
left : 100px
right:500px
width:908.64px;

font-family: Poppins;
font-style: normal;
font-weight: 900;
font-size: 48px;
line-height: 60px;
/* or 125% */

display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.7);
`
const Includes = styled.p`
position: absolute;
height: 54px;
left: 374px;
top: 10px;
width:908.64px;

font-family: Poppins;
font-style: normal;
font-size: 48px;
line-height: 60px;
/* or 125% */

display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.7);
`
const  TheIncluded = styled.p`
margin-left: 374px;
margin-top: 98px;
width: 908.64px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;

color: #000000;
`
const SeeFreqLink = styled.p`
width: 377px;
height: 46px;
margin-left: 375px;

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;

color: #3881FC;

`

const BackgroundImage = styled.img`
src: url(${props => props.src});
height: 1586;
width: -webkit-fill-available;
`
const BoxBackgroundImage = styled.img`
src: url(${props => props.src});
height: 50;
width: 50;
margin-left: 24px;
margin-top: 24px;
`
const Box = styled.div`
width: 407.25px;
height: 686.08px;
position: absolute;
left: 5.75%;
right: 7.75%;
top: 22.33%;
bottom: 23.33%;
margin-left: 25px;

background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`
const BoxHeader = styled.p`
position: absolute;
width: 178.11px;
height: 81.63px;
left: 114.57px;
top: 52px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;

color: rgba(0, 0, 0, 0.8);
margin-left: 24px;
margin-top: 7px;
`
const BoxPrice = styled.p`
position: absolute;
width: 170.69px;
height: 85.75px;
left: 155px;
margin-top: 104px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 54px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
`
const BoxMonth = styled.p`
position: absolute;
width: 126.16px;
height: 51.95px;
left: 133.13px;
top: 226.86px;
margin-top: 40px;
margin-left: 50px;

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 27px;
display: flex;
align-items: center;
text-align: center;

color: #676767;
`
const BoxContent = styled.p`
position: absolute;
width: 274px;
height: 191px;
left: 68px;
top: 311px;

font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
`
const BoxBtn = styled.button`
position: absolute;
width: 406px;
height: 686px;
left: 45px;
top: 550px;

background: #FFFFFF;
border-radius: 10px;
position: absolute;
width: 317.25px;
height: 69.33px;
left: 45px;
top: 550px;

border: 1px solid #307DFE;
box-sizing: border-box;
border-radius: 5px;
`


const SectionFive = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', maxWidth: 'none' }}>

            <Row>
                <Col style={{ padding: '0px' }} md={4} lg={4} sm={4} xs={4}>
                    
                        
                        {/* <Includes>  <AllPlans>All plans&nbsp;</AllPlans>includes</Includes> */}
                        
                        <Includes><Specified>&nbsp;All plans&nbsp;</Specified>includes</Includes>
                    <TheIncluded>1.Design and programming team dedicated to improving your website continuously!</TheIncluded>
                    <TheIncluded>2.Digital marketing team dedicated to the creation of your Advertising Campaigns on Google</TheIncluded>
                    <TheIncluded>3. of course ... the creation and maintenance of your website, domain, hosting, SSL security certificate ... And all the improvements and features that we add periodically to your website at no additional cost</TheIncluded>
                    <TheIncluded>You will only have to pay additionally for the advertising you do on Google.</TheIncluded>
                    <SeeFreqLink><Link>See frequently asked questions</Link></SeeFreqLink>
                    


                    {/* <TheIncluded style={{marginTop: '80px'}}>2.Design and programming team dedicated to improving your<Specified>&nbsp;website&nbsp;</Specified>continuously!</TheIncluded> */}
                    {/* <TheIncluded style={{marginTop: '100px'}}>2.Design and programming team dedicated to improving your<Specified>&nbsp;website&nbsp;</Specified>continuously!</TheIncluded> */}
                </Col>
            </Row>

            <Row>
                <Col style={{ padding: '0px' }} md={4} lg={4} sm={4} xs={4}>


                </Col>
                <Col style={{ padding: '0px' }} md={4} lg={4} sm={4} xs={4}>

                </Col>
            </Row>
            <Row>
                <Col style={{ padding: '0px' }} md={4} lg={4} sm={4} xs={4}>

                </Col>
                <Col style={{ padding: '0px' }} md={4} lg={4} sm={4} xs={4}>

                </Col>
            </Row>

        </Container>
    )
}
export default SectionFive