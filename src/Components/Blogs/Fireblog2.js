import React from 'react';
import { Container } from 'react-bootstrap';
import firebase from '../../images/blogs/firebase.png'
const Fireblog2 = () => {
    return (
        <Container>
            <img className='mt-5' style={{ borderRadius: "20px",border:"1px solid gray" }} width="100%" src={firebase} alt="" />
            <div className='d-flex justify-content-center mt-5'>
                <div>
                    <h1>
                        What other services does firebase provide other than authentication
                    </h1>
                    <p className='text-justify'>
                        Beside Authentication  Firebase Provides many services like:
                        Cloud Firestore,
                        Cloud Functions,
                        Hosting,
                        Cloud Storage,
                        Google Analytics,
                        Predictions,
                        Cloud Messaging,
                        Dynamic Links,
                        Remote Config
                        and many other things
                    </p>
                </div>
            </div>


        </Container>
    );
};

export default Fireblog2;