import React from "react";
import './OwnerProfile.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import Popup from 'reactjs-popup';

function OwnerProfile (){

    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerProfile-home">
                <div className="profile-container">
                <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
                    
                </div>
            </div>
        </div>
    )
}

export default OwnerProfile;