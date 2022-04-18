import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FooterImage from '../../images/Footer/blue_bottom_wave_01.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className='Fotter-Wrap mt-5'>
        
            <div className='footerImage'>
                <img src={FooterImage} alt="" /></div>
            <div className="Footers text-white">
                <Container>
                    <Row style={{height:"300px"}} className="justify-content-center align-items-center">
                        <Col xs={4} lg={4}>
                            <h6>Ⓒ copyright {new Date().getFullYear()}</h6> <br />
                            <p>Disclaimer | Privacy policy</p>
                        </Col>
                        <Col xs={4} lg={4} className="list-style-none" >        <div><h5>PROGRAMS</h5>
                        <li>About</li>
                        <li>Tours</li>
                        <li>Membership</li>
                        <li>Schedules</li>
                        <li>Gallery</li></div>                
                        
                        </Col>


                        <Col xs={4} lg={4} className="list-style-none"> 
                        
                            <h5>LOCATION & HOURS</h5>
                            <li>Mon – Sat: 6:00 – 12:00
                            </li>
                            <li>Sunday – Closed</li>

                            <li>234-244 Stockwell Rd
                                Brixton, SW9 9SP</li>

                        </Col>

                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Footer;