import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import{Card,Col} from 'react-bootstrap'

const Dashboard = () => {
  return (
    <>
    <Container>
            <Row className='my-3' >
                <h3>User Enrollments</h3>
            </Row>
    
    <Row>
          <Col className="md-4 stretch-card grid-margin">
            <Card className="card bg-gradient-danger text-center text-black">
              <div className="card-body">
                
                <h4 className="font-weight-normal mb-3">Number of School van registered <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">$ 15,0000</h2>
              </div>
            </Card>
          </Col>
          <Col className="md-4 stretch-card grid-margin">
            <Card className="bg-gradient-info text-center text-black">
              <div className="card-body">
                
                <h4 className="font-weight-normal mb-3">Number of Owners registered <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">45,6334</h2>
                
              </div>
            </Card>
          </Col>
          <Col className="md-4 stretch-card grid-margin">
            <Card className="bg-gradient-info text-center text-black">
              <div className="card-body">
                
                <h4 className="font-weight-normal mb-3">Number of Perents registered <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">45,6334</h2>
                
              </div>
            </Card>
          </Col>
          <Row className='my-3' >
            <Col>
                <h3>Income</h3>
            </Col>
            <Col>
                <h3>Registrations</h3>
            </Col>

            </Row>
          <Row>
            <Col className="md-4 stretch-card grid-margin">
                <Card style={{ height: '20rem' }} >
                    hi
                </Card>
            </Col>
            <Col className="md-4 stretch-card grid-margin">
                <Card style={{ height: '20rem' }}>
                    hi
                </Card>
            </Col>
            
            </Row>
          </Row>
          </Container>
          </>
  );
}

export default Dashboard