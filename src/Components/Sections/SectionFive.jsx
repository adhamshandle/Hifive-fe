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
import google from '../../Assets/Images/google.png';
const Specified = styled.span`
height: 79px;
font-family: Poppins;
font-weight: 100;
font-style: normal;
-webkit-text-stroke: 0px;

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
const Google = styled.img `
src: url(${props => props.src});
height:20px;
width:46px;
opacity:0.5;
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
width: 908.64px;
height: 54px;
left: 374px;
-webkit-text-stroke: 3px rgba(0, 0, 0, 0.7);
margin-top:5%;
margin-left:7%;
font-family: Poppins;
font-style: normal;
font-weight: 900;
font-size: 48px;
line-height: 60px;
/* or 125% */

display: flex;
align-items: center;
justify-content:center;

color: rgba(0, 0, 0, 0.7);
`
const  TheIncluded = styled.li`
margin-left: 374px;
width: 908.64px;
position: relative;
margin-top:2%;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;

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


const SectionFive = () => {
    return (
        <Container style={{ margin: '0px', padding: '0px', maxWidth: 'none' }}>

            <Row>
                <Col style={{ padding: '0px' }} md={12} lg={12} sm={12} xs={12}>
                    
                        
                        {/* <Includes>  <AllPlans>All plans&nbsp;</AllPlans>includes</Includes> */}
                        
                        <Includes>All plans&nbsp;<Specified>Includes</Specified></Includes>
                            <ol>
                    <TheIncluded>Design and programming team dedicated to improving your <b>website</b> continuously!</TheIncluded>
                    <TheIncluded>Digital marketing team dedicated to the <b>creation of your Advertising Campaigns on Google</b></TheIncluded>
                    <TheIncluded>of course ... the creation and maintenance of your website, domain, hosting, SSL security certificate ... And all the improvements and features that we add periodically to your website at no additional cost</TheIncluded>
                    </ol>

                    <TheIncluded style={{listStyleType:'none',textAlign:'left',width:'78%',marginTop:'3%'}}>You will only have to pay additionally for the advertising you do on <Google src={google}></Google>.</TheIncluded>
                    <SeeFreqLink style={{marginTop:'5%'}}><Link>See frequently asked questions</Link></SeeFreqLink>


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