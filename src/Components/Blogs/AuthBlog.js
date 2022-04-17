import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../../images/blogs/authorization.png';
const AuthBlog = () => {
    return (
        <Container>
            <img className='mt-5' style={{borderRadius:"20px"}} width="100%"  src={image} alt="" />
            <div className='d-flex justify-content-center mt-5'>
                         <div>
                <h1>
                    Difference between authentication and authentication
                </h1>
                <p className='text-justify'>
                    Authentication verifies who the user is. it usually works with password,email,biometric info and other things .
                    on the other<br /> hand Authorization select  which things a user can access.it is selected by the organization.
                    in short authentication is system<br /> to verify any identity.
                    where Authorization is a process to identify that which resource have access to this user.mostly use <br /> Authentication system is password
                </p>
            </div>   
            </div>


        </Container>
    );
};

export default AuthBlog;