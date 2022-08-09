import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../pages/Home.css';
import '../pages/Login.css'


function loginform() {
    return (
        <>
        
      <Form className="px-5 py-3 login-form">
     
        <Form.Group className="mb-2" controlId="formBasicfullname">
          <FloatingLabel
            controlId="floatingInput"
            label="Full Name"
            className="mb-1"
          >
            <Form.Control type="text" placeholder="Full Name" />
          </FloatingLabel>
        </Form.Group> 

        <Form.Group className="mb-2" controlId="formBasicemail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-1"
          >
            <Form.Control type="email" placeholder="Email" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicpassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-1"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicconfirmpassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Confirm Password"
            className="mb-1"
          >
            <Form.Control type="password" placeholder="Confirm Password" />
          </FloatingLabel>
        </Form.Group>
      
       <div  >
       <Button className='btn-primary' type="submit">
         Sign up
       </Button>
       </div>
       <p className="forgot-password text-center mt-2">
           Already have an account ? Login
        </p>
      </Form> 
    
      

       </>
    );
  
}

export default loginform