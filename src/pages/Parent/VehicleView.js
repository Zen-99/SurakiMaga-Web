import React from 'react';
import ParentNavbar from '../../components/ParentNavbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const homeImage = require('../../assests/schoolbus.png');
const profileImage = require('../../assests/three-wheeler.png');
const mapImage = require('../../assests/map.jpg');

export default function VehicleView() {
  return (
    <div>
       <ParentNavbar/>
       <Container className='border'>
        <div className='d-flex'>
        <div className='my-auto fixed'><h3>Piliyandala Bus Service</h3></div>
        <Button className='w-25 m-2 p-2'>Request Vehicle</Button>
        </div>
            <Row>
                <Col xs={12} md={8} className="border">
                  <div className='p-3'>
                    <Carousel className='bg-secondary'>
                    <Carousel.Item className=''>
                        <img
                        className="d-block mx-auto"
                        src={profileImage} style={{
                            height:'400px',
                            width:'500px',
                            }}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='align-items-center center'>
                        <img
                        className="d-block mx-auto"
                        src={homeImage} style={{
                            height:'400px',
                            width:'500px',
                            }}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block mx-auto" 
                        src={profileImage} style={{
                            height:'400px',
                            width:'500px',
                            }}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                    <hr class="bg-danger border-2 border-top border-danger"/>
                    <div className='mt-3'>
                        <div className='d-flex justify-content-between'>
                        <h4 className='text-dark '>Vehicle Details</h4>
                        <h5 className='bg-success w-50 text-center p-2 inline-block rounded'>5 Seats Available</h5>
                        </div>
                        <div className='d-flex gap-1'>
                        <Row  >
                        <Col xs={6} md={4}>
                        <div className="d-flex flex-column">
                        <span className='mb-1'><b>Model</b></span> 
                        <span className='mb-1'><b>Vehicle No</b></span>
                        <span className='mb-1'><b>Total Seats</b></span>
                        <span className='mb-1'><b>FM Radio</b></span>
                        <span className='mb-1'><b>A/C</b></span>
                        </div>
                        </Col>
                        <Col xs={6} md={4} >
                        <div className="d-flex flex-column">
                        <span className='mb-1'>KDH</span> 
                        <span className='mb-1'>ND -6341</span>
                        <span className='mb-1'>34</span>
                        <span className='mb-1'>Yes</span>
                        <span className='mb-1'>Yes</span>
                        </div>
                        </Col>
                        </Row>
                        
                    </div>
                    </div>

                    <div className="mt-3">
                        <h4 className='text-dark '>Vehicle Details</h4>
                    </div>
                </div>
                </Col>
                <Col xs={6} md={4} className="border p-3">
                <Card>
                    <Card.Header className='text-center h4 '>Route</Card.Header>
                    <Card.Body>
                        <Card.Title className='h5'>Starting Position</Card.Title>
                        <Card.Text>
                        Piliyandala Bus Stop
                        </Card.Text>
                        <Card.Title>Destination Schools</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Visakha Vidyalaya</li>
                                <li>Royal College Colombo 07</li>
                            </ul>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    <Card.Img className="mx-auto pb-1" src={mapImage} style={{
                            height:'120px',
                            width:'150px',
                            }} />
                 </Card>
                    <div className=''>
                        {/* <h4 className='text-dark'> Route</h4>
                        <ul className='mb-3'>
                            <li> Vishaka Vidyalaya Colombo 07</li>
                            <li> Royal College Colombo 07</li>
                        </ul> */}

                            {/* <div className='d-flex flex-row'>
                                <div> Name</div>
                                <div> Faalil Bary</div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div > Contact</div>
                                <div> +94 77 1234567</div>
                            </div> */}
                        <hr class="bg-danger border-2 border-top border-dark"/>
                        <h5 className='text-dark'> Owner Details</h5>
                            <div className='d-flex flex-row'>
                                <div> Name</div>
                                <div> Faalil Bary</div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div > Contact</div>
                                <div> +94 77 1234567</div>
                            </div>
                        <hr class="bg-danger border-2 border-top border-dark"/>
                        <h5 className='text-dark mt-3'> Driver Details</h5>
                            <div className='d-flex flex-row'>
                                <div> Name</div>
                                <div> Faalil Bary</div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div > Contact</div>
                                <div> +94 77 1234567</div>
                            </div>
                            <hr class="bg-danger border-2 border-top border-dark"/>

                            
                    </div>
                </Col>
            </Row>

       </Container> 
    </div>
  )
}
