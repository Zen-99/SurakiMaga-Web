import React from 'react';
import './FAQ.css';
import FAQData from '../data/FAQData'
import './Home.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';


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
        </Container>
            </div>
            <Footer/>
           
        </div>
    )
}
export default FAQ;