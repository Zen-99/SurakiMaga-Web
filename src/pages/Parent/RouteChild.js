import React from 'react';
import './children.css';
import ParentNavbar from '../../components/ParentNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChildProfile from '../../components/ChildProfile';



const mapImage = require('../../assests/maps.png');

function RouteChild() {
   
    return (
        <>
        <div>
        <ParentNavbar/>
        <Container className='mb-5'>
            <Row>
                <Col xs={6} md={3} className="border children_profile" >
                    <ChildProfile/>
                </Col>

                <Col xs={12} md={9} className="border children_profile" >
                    <Container className="p-2 my-2 d-flex flex-column">
                    
                    <img src={mapImage} alt="school bus" />            
        
                    </Container>
                </Col>
            </Row>
        </Container>
        
      </div>

      </>
    );
  
}

export default RouteChild;