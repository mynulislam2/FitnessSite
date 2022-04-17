import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [Cards, setCards] = useState([]);
 const navigate= useNavigate()
    useEffect(() => {
        fetch('serviceData.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

 const HandleCheckOut=()=>{
    navigate("/checkout")
 }





    return (
        <Container className="mt-5">
            <Row>
                <p>PRICING PLAN</p>
                <h1 className="mt-5 package-title">Comportable Pricing package and <br />
                    choose your best plan</h1>

                {
                    Cards.map((card) =>

                        <Col xs={12} lg={4}>
                            <Card style={{ width: '18rem', height: "600px" }}>
                                <Card.Img variant="top" src={card.Image} />
                                <Card.Body>
                                    <div style={{ width: "100px", height: "100px", border: "8px solid #ea1b29" }} className='rounded-circle  d-flex justify-content-center align-items-center mx-auto text-center'><Card.Title ><span className='price'>${card.price}</span> <br /><span className='monthly'>Monthly</span></Card.Title></div>
                                    <Card.Title className='text-center'>{card.title}</Card.Title>
                                    <div className="mt-3  text-justify mx-auto w-75 d-flex justify-content-center">
                                        <div>
                                            {card.service1} <br />
                                            {card.service2} <br />
                                            {card.service3} <br />
                                            {card?.service4}
                                        </div>



                                    </div>
                                    <div className='d-flex justify-content-center mt-3'>                                    <button onClick={HandleCheckOut} className="rounded-pill buttons">Go somewhere</button></div>

                                </Card.Body>
                            </Card>
                        </Col>


                    )
                }
            </Row>
        </Container>);
};

export default Services;