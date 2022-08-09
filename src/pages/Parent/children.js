import React, { useState } from 'react';
import './children.css';
import ParentNavbar from '../../components/ParentNavbar';
import LeaveVan from '../../components/LeaveVan';
import StarRating from '../../components/StarRating';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';



const homeImage = require('../../assests/schoolbus.png');
const profileImage = require('../../assests/Faalil.jpeg');

function MyChildren() {
    const [modalShow, setModalShow] = React.useState(false);
    const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }
    return (
        <>
        <div>
        <ParentNavbar/>
        <Container>
            <Row>
                <Col xs={6} md={3} className="border children_profile" >
                    <Container className="p-2 my-2">
                        <Card className='border-0 '>
                           <Card.Img variant="img-fluid rounded-circle img-fluid rounded-circle  border-4 w-75 p-2 mt-1 mx-auto"  src={profileImage} />
                                <Card.Body>
                                    <Card.Title className='font-weight-bold mb-3 text-center'>Roshan Senevirathne</Card.Title>
                                        <Card.Text className='d-flex  flex-column'>
                                            <div className='attribute-group mb-2'>
                                                <div className='attribute'> Studies at</div>
                                                <div> Royal College Colombo 07</div>
                                            </div>
                                            <div className='attribute-group mb-2'>
                                                <div className='attribute'> Age</div>
                                                <div> 15 years</div>
                                            </div>
                                            <div className='attribute-group'>
                                                <div className='attribute'> Pickup Location</div>
                                                <div> 15 years</div>
                                            </div>
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                    </Container>
                </Col>

                <Col xs={12} md={9} className="border children_profile" >
                    <Container className="p-2 my-2 d-flex flex-column">
                    <div className="d-flex">
                    <Carousel className="bg-white">
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-auto"
                            src={homeImage}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-auto"
                            src={homeImage}
                            alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100 h-auto"
                            src={homeImage}
                            alt="Third slide"
                            />

                        </Carousel.Item>
                    </Carousel>
                            <Card className='border-0 p-3'>
                            <Card.Body>
                                <Card.Title className='font-weight-bold '>Van Details</Card.Title>
                                <Card.Text>
                                    <div className='d-flex flex-row'>
                                                <div className='attribute'> Vehicle No</div>
                                                <div> WP - 9087</div>
                                    </div>
                                    <div className='attribute'> Driver</div>
                                    <div className='d-flex flex-row'>
                                                <div>Name</div>
                                                <div> Roshan Senevirathne</div>
                                    </div>
                                    
                                    <div className='d-flex flex-row'>
                                                <div> Contact</div>
                                                <div> +94 77 1234567</div>
                                    </div>

                                    <div className='attribute'> Owner</div>
                                    <div className='d-flex flex-row'>
                                                <div> Name</div>
                                                <div> Faalil Bary</div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                                <div > Contact</div>
                                                <div> +94 77 1234567</div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </div>
                    <div>
                    <div className="d-flex">
                    <Card className="text-center border-0 ">
                    <Card.Body>
                        <Card.Title className='text-center'>Payments</Card.Title>
                        <Card.Text>
                            <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Amount Payable</Card.Title>
                                <Card.Text>
                                Rs .3500/=
                                </Card.Text>
                                <Button className='w-50'>Pay Now</Button>
                            </Card.Body>
                            </Card>
                        </Card.Text>
                            <Card.Link href="#" className='text-center'>Payment History</Card.Link>
                    </Card.Body>
                    </Card>
                        
                            <Card className='border-0 text-center '>
                                <Card.Body>
                                    <Card.Title className="text-center">Rate the School Van</Card.Title>
                                    <Card.Text>
                                    <StarRating/>
                                    
                                    </Card.Text>
                                    <div className='d-flex flex-column gap-4'>
                                        <Button className='w-50 mt-1 mx-auto bg-white text-dark'>Make a Complaint</Button>
                                        <Button className='w-50 mx-auto bg-white text-dark' onClick={() => setModalShow(true)}>Leave From this Van</Button>
                                        <LeaveVan
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                />
                                    </div>
                                </Card.Body>
                            </Card>
                    </div>
                    </div>
                    </Container>
                </Col>
            </Row>
        </Container>
        
      </div>

      </>
    );
  
}

export default MyChildren;