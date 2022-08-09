import React from 'react';
import ParentNavbar from '../../components/ParentNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

const homeImage = require('../../assests/schoolbus.png');
const profileImage = require('../../assests/three-wheeler.png');


export default function VehicleView() {
  return (
    <div>
       <ParentNavbar/>
       <Container className='border'>
        <div className='mt-2 mb-3 fixed'><h3>Piliyandala Bus Service</h3></div>
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
                        <h5 className='text-dark '>Vehicle Details</h5>
                        <h5 className='bg-success p-1 text-center rounded'>5 Seats Available</h5>
                        </div>
                        <div className="d-flex flex-column">
                        <span>Model</span> 
                        <span>Vehicle No</span>
                        </div>
                    </div>
                    
                </div>
                </Col>
                <Col xs={6} md={4} className="border p-3">
                    <div className=''>
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
