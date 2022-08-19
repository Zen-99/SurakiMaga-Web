import React from 'react';
import ParentNavbar from '../../components/ParentNavbar';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddChild() {
  return (
    <>
    <ParentNavbar />
    <Container className='p-3'>
        {/* <h3 className='text-center'> Add A Child</h3> */}
            <Container className='d-flex flex-row border shadow bg-white rounded'>
                <div className='d-flex flex-column'>
                    <div className='px-5 py-3'> 
                    <h4 className='mb-4 text-center'>Add an image of your child </h4>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                    <div className="border border-warning rounded-circle" style={{ width: 300, height: 300, margin: 50 }}>
                        <div className="h-100 d-flex justify-content-center align-items-center">
                        
                        <Form.Group controlId="formFile" className="mb-3 text-center p-4">
                            <Form.Label>Upload Image of your child</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                <Form className="px-5 py-3">
                    <h4 className='mb-4'>Add the Details of your Child</h4>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name of the Child</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name of the Child" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSchool">
                        <Form.Label>School</Form.Label>
                        <Form.Control type="text" placeholder="Enter School" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="integer" placeholder="Enter Age" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicLocation">
                        <Form.Label>Pickup Location</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                  
                    <div class="d-flex justify-content-center">
                    <Button className='btn-primary w-50 centering' type="submit">
                        Submit
                    </Button>
                    </div>
                    </Form>
                </div>
            </Container>
    </Container>
    
    </>
  );
}

export default AddChild;
