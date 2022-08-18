import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MarkAbsent from './MarkAbsent';


const profileImage = require('../assests/Faalil.jpeg');


export default function () {
    const [absentmodalShow, setabsentModalShow] = React.useState(false);

  return (
    <div>
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
                                            <div className='attribute-group mt-4 '>
                                            <Button onClick={() => setabsentModalShow(true)}>Mark Absent</Button>
                                            <MarkAbsent
                                                    show={absentmodalShow}
                                                    onHide={() => setabsentModalShow(false)}
                                                />
                                            </div>
                                        </Card.Text>
                                </Card.Body>
                        </Card>
                    </Container>
    </div>
  )
}
