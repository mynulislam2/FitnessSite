import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { StrongerData } from './BecomeStrongerData';
import './BecomceStronger.css'
const BecomeStroger = () => {
    return (
        <Container className='mt-5'>
                <h2 className='text-center main_title'>How you can</h2>
                <h1 className='text-center main_title2 mb-5'>#BECOMESTRONGER</h1>
            <Row>
                {StrongerData.map((card) =>
                    <Col xs={12} lg={4}>
                        <div>

                        </div>
                        <div>
                            <h2 className="main_title3">{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default BecomeStroger;