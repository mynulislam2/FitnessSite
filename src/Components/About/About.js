import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../../images/about/about.png';
import Footer from '../Footer/Footer';
import Navigate from '../navigate/Navigate';

import './About.css';
const About = () => {
   
    return (
        <div>
            <Navigate color="dark"></Navigate>
            <Container>
                <div className='mt-5' >
                    <img style={{ borderRadius: "20px", border: "1px solid gray" }} className='w-100' src={about} alt="" srcset="" />
                </div>
                <div className='d-flex justify-content-center'>

                    <div className='w-50 mt-5'>
                        <h2>Hi <span className='icon_border'>👋</span> Mynul islam</h2>
                        <p>
                            I am passionate web developer. I want be a professional within next few month. i am super hard worker. i have done so many mini and big project. to do this projects i have learn so many tools and things.
                        </p>
                    </div>
                </div>
                <div className=' mt-4 d-flex justify-content-center '>
        </div>
               

            </Container>

<Footer></Footer>

        </div>
    );
};

export default About;