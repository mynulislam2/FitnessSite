import React from 'react';
import { Container } from 'react-bootstrap';
import image2 from '../../images/blogs/authorization1.png'
const FireBlog = () => {
    return (
        <Container>
            <img className='mt-5' style={{borderRadius:"20px"}} width="100%" src={image2} alt="" />
            <div className='d-flex justify-content-center mt-5'>
                <div>
                    <h2>
                        Why are you using firebase?  What other options do <br /> you have to implement authentication?
                    </h2>
                    <p className='text-justify'>
                        Firebase is very cool tools for the developers.it make life easier.it provides many services like real time data base, data host and ready-made <br /> UI libraries to authenticate users to your app .That's why i love ❤ it. <br />
                        There so many alternative like
                    Auth0
                    Passport
                    Okta
                    JSON Web Token
                    Amazon Cognito

                    </p>
                </div>
            </div>


        </Container>
    );
};

export default FireBlog;