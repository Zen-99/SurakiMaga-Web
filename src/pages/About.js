import React from "react";
import './About.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const aboutImage = require('../assests/Livemap.png')
const aboutImage1 = require('../assests/About1.png')
const aboutImage2 = require('../assests/Livemap.png')
const aboutImage3 = require('../assests/About5.png')
const aboutImage4 = require('../assests/About3.png')
const aboutImage5 = require('../assests/About4.png')
const aboutImage6 = require('../assests/About2.png')


function About() {
    return(
        <div className="home">
            <Navbar/>
            <div className="home-home">
                <Container>
                <div className="d-flex bg-white rounded p-5">
                    <div className=" d-flex gap-5">
                       <img src={aboutImage1} style={{
                            height:'300px',
                            width:'500px',
                            }} /> 
                       <div>
                        <h2 className="">Real Time Updates</h2>
                        <div>
                            <ul className="sample">
                                <li className="my-4">Get real time updates for all vehicles on one platform. Traffic alerts, route deviations, over-speeding – SurakiMaga help you monitor and control.</li>
                                <li className="my-4"> Operations in real time.</li>
                            </ul>
                        </div>
                       </div>
                    </div>   
                </div>

                <div className="d-flex bg-white rounded p-5 mt-5">
                    <div className=" d-flex gap-5">
                       <div>
                        <h2 className="">Information in real-time</h2>
                        <div>
                            <ul className="sample">
                                <li className="my-4">Information is wealth. With the help of SurakiMaga App, Parents will get all the updates of their children on their SMARTPHONES.</li>
                                <li className="my-4">  Installing the school bus tracking apps provided by SurakiMaga will be an intelligent step towards enjoying peace of mind</li>
                            </ul>
                        </div>
                       </div>
                       <img src={aboutImage5} style={{
                            height:'300px',
                            width:'500px',
                            }} /> 
                    </div>   
                </div>

                <div className="d-flex bg-white rounded p-5 mt-5">
                    <div className=" d-flex gap-5">
                       <img src={aboutImage1} style={{
                            height:'300px',
                            width:'500px',
                            }} /> 
                       <div>
                        <h2 className="">Child Safety</h2>
                        <div>
                            <ul className="sample">
                                <li className="my-5">Student safety is of the utmost importance to both parents and school. SurakiMaga help to ensures complete automation and control for transport operation. Real-time visibility means happy parents.</li>
                            </ul>
                        </div>
                       </div>
                    </div>   
                </div>

                <div className="d-flex bg-white rounded p-5 mt-5">
                    <div className=" d-flex gap-5">
                       <div>
                        <h2 className="">Peace of Mind</h2>
                        <div>
                            <ul className="sample">
                                <li className="my-4">SurakiMaga is designed to simplify the school transport operations for admins, keep parents informed about their children and to help drivers fulfill their duties hassle free. Simple easy to use tool helps schools have complete control with zero hassle.</li>
                                {/* <li className="my-4">  Installing the school bus tracking apps provided by SurakiMaga will be an intelligent step towards enjoying peace of mind</li> */}
                            </ul>
                        </div>
                       </div>
                       <img src={aboutImage4} style={{
                            height:'300px',
                            width:'500px',
                            }} /> 
                    </div>   
                </div>

                <div className="d-flex bg-white rounded p-5 mt-5">
                    <div className=" d-flex gap-5">
                       <img src={aboutImage3} style={{
                            height:'300px',
                            width:'500px',
                            }} /> 
                       <div>
                        <h2 className="">Easy to Use</h2>
                        <div>
                            <ul className="sample">
                                <li className="my-5">SurakiMaga is easy to set up and use. Access your account from any desktop, laptop or mobile. Different login access for each user with easy to use navigation and setup.</li>
                            </ul>
                        </div>
                       </div>
                    </div>   
                </div>

                <div className="d-flex shadow bg-white rounded p-5 mt-5">
                    <div className=" d-flex gap-5">
                       <div>
                        <h2 className="">Easy to use – Even a novice driver can use</h2>
                        <div>
                            <ul className="sample">
                                <li className="my-4">SurakiMaga simplifies the daily task for all the drivers.</li>
                                <li className="my-4">Drivers will see the daily routes on the device which student needs to be picked from and to drop where</li>
                                <li className="my-4"> Drivers can mark any student boarded or alighted from their App.</li>
                            </ul>
                        </div>
                       </div>
                       <img src={aboutImage6} style={{
                            height:'300px',
                            width:'500px',
                            }} /> 
                    </div>   
                </div>
                
                </Container>
            </div>
            <Footer/>
        </div>
    )
}
export default About;