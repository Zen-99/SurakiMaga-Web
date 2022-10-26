import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MarkAbsent from './MarkAbsent';
import { useLocation } from 'react-router-dom';


const profileImage = require('../assests/Faalil.jpeg');


export default function () {
    const [absentmodalShow, setabsentModalShow] = React.useState(false);
    const location = useLocation();
    const data = location.state;
    console.log(data);

  return (
    <div>
    <Container className="p-2 my-2">
                        <Card className='border-0 '>
                           <Card.Img variant="img-fluid rounded-circle img-fluid rounded-circle  border-4 w-75 p-2 mt-1 mx-auto"  src={data.image} />
                                <Card.Body>
                                    <Card.Title className='font-weight-bold mb-3 text-center'>{data.fullname}</Card.Title>
                                        <Card.Text className='d-flex  flex-column'>
                                            <div className='attribute-group mb-2'>
                                                <div className='attribute'> Studies at</div>
                                                <div> {data.school}</div>
                                            </div>
                                            <div className='attribute-group mb-2'>
                                                <div className='attribute'> Age</div>
                                                <div> {data.age.years}</div>
                                            </div>
                                            <div className='attribute-group'>
                                                <div className='attribute'> Pickup Location</div>
                                                <div> Piliyandala Bus Stop</div>
                                                <div> </div>
                                            </div>
                                            <div className='attribute-group mt-4 '>
                                            <Button onClick={() => setabsentModalShow(true)}>Mark Absent</Button>
                                            <MarkAbsent
                                                    student={data.id}
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
