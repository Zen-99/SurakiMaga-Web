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
export default Login;