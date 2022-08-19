import React from "react";
//import '../App.css';
import './Home.css';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';


const homeImage = require('../assests/schoolbus.png')

function Home() {
    return(
    <>
        <div className="home">
        <Navbar/>
        <div className="home-home p-5">
            <div className="home-content">
                <div className="home-title">
                    <h2 className="home-title-title">Get Started With Suraki Maga</h2>
                </div>
                <div className="home-description">
                    <p>Are you woried about your child's safety while they traveling from home to school? Want to manage your growing school van service without the hassles of multiple phone calls and complex excel sheets?  Now you can.</p>
                    <p>Suraki Maga is a Multipurpose school van management system which developed for ensure child safty. 
                        If you are a parent, this System helps you to keep track on your child while they 
                        on the way to school and if you are a school van service owner helps you to manage your business more profitable way.
                    </p>
                </div>
                <div className="home-signup-button">
                <Link to='/sign-up'className='home-signupbutton'>Get Started</Link>
                </div>
            </div>
            <div className="home-image">
                <img src={homeImage} alt="school bus" width="500px" height="370px"/>
            </div>
         </div> 
         <Footer/>   
        </div>
        
    </>
    );
}

export default Home;