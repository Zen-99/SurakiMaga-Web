import React, { useState } from 'react';
import './FAQ.css';
import Data from '../data/FAQData';
import './Home.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

const dataCollection = [
    {
      question: 'What makes blockchain trustworthy?',
      answer: 'There are three sides to this answer. Firstly, nobody but the owner of the data can access it without permission. Thus, it is a safe way to protect data from third parties who should not see the information. Secondly, the data can be tracked at any time. It comes with a timestamp which indicates when the information was written on the blockchain and it is always available for fetching. '
    }, {
      question: 'Why Do You Want to Work at This Company?',
      answer: 'Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
    }, {
      question: 'What Are Your Greatest Strengths?',
      answer: 'Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
    }, {
      question: 'Can You Explain Why You Changed Career Paths?',
      answer: 'Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. '
    }
  ];

function FAQ() {
    return(
        <div className="home">
            <Navbar/>
            <div className="home-home">
                <Container className="bg-white p-5 shadow bg-white rounded">
                  <div><h3 className='text-center mb-3'>Frequently Asked Questions</h3></div>
                <Accordion className='p-5 ' defaultActiveKey="0" flush>
                    <Accordion.Item className='' eventKey="0">
                <Accordion.Header bsPrefix='accordion-header'>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </Container>
            </div>
            <Footer/>
           
        </div>
    )
}
export default FAQ;