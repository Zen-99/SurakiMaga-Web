<<<<<<< HEAD
import React from "react";
//import '../App.css';
import './Home.css';
import {Link} from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function Login() {
    return(
        <div className="home">
            <Navbar/>
            <div className="home-home">
            <Link to='/OwnerAdvertiestments' >Log in</Link>
            </div>
            <Footer/>
        </div>
    )
}
=======
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Home.css';
import './Login.css'

const homeImage = require('../assests/schoolbus.png');

function Login() {
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
      <h2 className='mb-4 text-center'>Welcome Back !</h2>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      
      <div class="d-flex justify-content-center">
      <Button className='btn-primary w-50 centering' type="submit">
        Log in
      </Button>
      </div>
      <p className="forgot-password text-center mt-2">
          Forgot password?
        </p>
      </form>
      </div>
      </div>
      </div>
      </div>

      </>
    );
  
}

>>>>>>> 91d6428fd802a007f0ebc679bdd620028b409c1a
export default Login;