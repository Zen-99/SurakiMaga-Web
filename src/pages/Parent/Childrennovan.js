import React from 'react';
import './children.css';
import ParentNavbar from '../../components/ParentNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './children.css';





const profileImage = require('../../assests/avatar7.png');

function NewChildren() {
   
    return (
        <>
        <div>
        <ParentNavbar/>
        <Container className='mb-5'>
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
                                                <div> 13 years</div>
                                            </div>
                                            <div className='attribute-group'>
                                                <div className='attribute'> Pickup Location</div>
                                                <div> Piliyandala Bus Stand</div>
                                                {/* <div> Longitude : -110.24918</div> */}
                                            </div>
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                    </Container>
                </Col>

                <Col xs={12} md={9} className="border children_profile" >
                    <Container className="p-2 my-2 bg-white w-100 h-100 align-items-center d-flex justify-content-center ">
                            
                    <div><h1 className='text-center'>No School Vans</h1></div>
                    </Container>
                </Col>
            </Row>
        </Container>
        
      </div>

      </>
    );
  
}

export default NewChildren;