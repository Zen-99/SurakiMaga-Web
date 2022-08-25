import React from 'react';
import './FAQ.css';
import FAQData from '../data/FAQData'
import './Home.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


function FAQ() {
    return(
        <div className="home">
            <Navbar/>
            <div className="home-home">
                <Container className="bg-white p-5 shadow bg-white rounded">
                  <div><h3 className='text-center mb-3'>Frequently Asked Questions</h3></div>
                  
                <Accordion className='p-5 ' defaultActiveKey="0" flush>
                {FAQData.map((item, index) => {
            return (
              <><Accordion.Item className='' eventKey={index}>
              <Accordion.Header bsPrefix='accordion-header'>{item.question}</Accordion.Header>
              <Accordion.Body>
              {item.answer}
              </Accordion.Body>
          </Accordion.Item>
            </>
              );
            })}
            </Accordion>

            <div className='d-flex p-5 justify-content-center'>
            <Form className='w-50 bg-white p-2 shadow bg-white rounded border border-warning '>
                <h3 className='text-center mt-4 mb-4'> Ask us Anything !</h3>
                <Form.Group className="mb-4 ms-5" controlId="username">
                <Form.Label >Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="username" 
                  placeholder="Name"
                  className='w-75'
                  />
             
                </Form.Group>

                <Form.Group className="mb-4 ms-5" controlId="username">
                <Form.Label>Contact No</Form.Label>
                <Form.Control 
                  type="text" 
                  name="username" 
                  placeholder="Contact Number"
                  className='w-75'
                  />
             
                </Form.Group>

                <Form.Group className="mb-5 ms-5" controlId="username">
                <Form.Label>What do you want to know about us ?</Form.Label>
                <Form.Control 
                  as="textarea" rows={3} 
                  name="username" 
                  placeholder="What do you want to know abouts us"
                  className='w-75'
                  />
             
                </Form.Group>

                <div className='d-flex justify-content-center'>
                <Button className='btn-primary mb-4 w-50 centering logbutton' type="submit">
                  Submit
                </Button>
                </div>
            </Form>
            </div>
        </Container>
            </div>
            <Footer/>
           
        </div>
    )
}
export default FAQ;