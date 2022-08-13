import React from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/loginform';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Home.css';
import './Login.css'

const homeImage = require('../assests/schoolbus.png');

function Signup() {

  
    return (
        <>
        <div className="home pt-1 pb-5">
        <Navbar/>
        <div className ="container p-5 d-flex flex-row justify-content-center">  
        
        <div className='container d-flex flex-row total_login shadow bg-white rounded mt-1'>
        <div className='d-flex justify-content-center flex-column' >
        <h3 className='mt-3 mb-3 text-center'>Create an Account!</h3>
        <img src={homeImage} alt="school bus" width="500px" height="370px"/>
        </div>
        <div>
          {/* <h3 className='mt-3 mb-3 text-center'>Create an Account!</h3> */}
            <Tabs
                defaultActiveKey="parent"
                id="uncontrolled-tab-example"
                className="mt-4 px-5 border-bottom-0"
                justify fill
              >
              <Tab eventKey="parent" title="Parent">
                <LoginForm type="Parent" />
              </Tab>
              <Tab eventKey="owner" title="Owner">
                <LoginForm type="Owner" />
              </Tab>

            </Tabs>
      </div>
      </div>
      </div>
      </div>

      </>
    );
  
}

export default Signup;