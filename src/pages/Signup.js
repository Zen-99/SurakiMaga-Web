import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Home.css';
import './Login.css'

const homeImage = require('../assests/schoolbus.png');

function Signup() {
    return (
        <>
        <div className="home pt-1 pb-5">
        <Navbar/>
        <div className ="container p-5 d-flex flex-row justify-content-center">  
        
        <div className='container d-flex flex-row total_login'>
        <div >
        <img src={homeImage} alt="school bus" width="500px" height="370px"/>
        </div>
        <div>
      <form className="px-5 py-4 login-form">
      <h2 className='mb-4 text-center'>Create an Account!</h2>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        {/* <Form.Label>Fullname</Form.Label> */}
        <Form.Control type="text" placeholder="Enter Full Name" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail">
        {/* <Form.Label>UserName</Form.Label> */}
        <Form.Control type="text" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail">
        {/* <Form.Label>UserName</Form.Label> */}
        <Form.Control type="text" placeholder="Enter Phone" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" placeholder="Enter Confirm Password" />
      </Form.Group>
      
      <div class="d-flex justify-content-around gap-3" >
      <Button className='btn-primary' type="submit">
        Sign up as a Parent
      </Button>
      <Button className='btn-primary ' type="submit">
        Sign up as an Owner
      </Button>
      </div>
      <p className="forgot-password text-center mt-2">
          Already have an account ? Login
        </p>
      </form>
      </div>
      </div>
      </div>
      </div>

      </>
    );
  
}

export default Signup;