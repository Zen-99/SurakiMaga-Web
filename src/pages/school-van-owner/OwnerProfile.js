import React, { useState,useEffect} from "react";
import './OwnerProfile.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import {Link} from 'react-router-dom';
import apiClient from '../../Services/ApiClient'
// import Popup from 'reactjs-popup';

function OwnerProfile (){
    const [Editdetails, setEditdetails] = useState(false);
    const [fetchData,setFetchData]=useState({
      name:"",
      contact:"",
      email:"",
      nic:"",
      bank_acc: "",
      scl_service_regno:"",
      experience:""

  })
  useEffect(() => {
    async function getownerdetails() { 
        const{dataresponse,error} = await apiClient.loadownerDetails()
        console.log(dataresponse)
        // console.log("dilshi")
        setFetchData({ name:dataresponse.result.name,contact:dataresponse.result.contact,email:dataresponse.result.email,nic:dataresponse.result.nic,bank_acc:dataresponse.result.bank_acc,scl_service_regno:dataresponse.result.scl_service_regno,experience:dataresponse.result.experience })
    }
    getownerdetails();
}, []);

    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerProfile-home">
                <div className="card p-3 m-2 flex-row OwnerProfilecontainer">
                    <div className="OwnerProfile-container  d-flex flex-column align-items-center">
                    <div className="OwnerProfile-photo p-3 d-flex flex-column align-items-center text-center">
                        <div className="OwnerProfile-image">
                        <img src={require('../../assests/avatar7.png')} alt="" class="rounded-circle"/>
                        </div>
                        
                        <div class="mt-3 d-flex flex-column align-items-center">
                            <h4>{fetchData.name}</h4>
                            <p class="text-secondary mb-1">{fetchData.email}</p>
                            <p class="text-secondary font-size-sm">{fetchData.contact}</p>
                        </div>
                    </div>
                    <div className="OwnerProfile-details p-3">
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5"><h6 class="mb-0">ID No.</h6></div>
                    <div class="col-sm-5 text-secondary">{fetchData.nic}</div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5"><h6 class="mb-0">School service reg no.</h6></div>
                    <div class="col-sm-5 text-secondary">{fetchData.scl_service_regno}</div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5"><h6 class="mb-0">Bank Acc</h6></div>
                    <div class="col-sm-5 text-secondary">{fetchData.bank_acc}</div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5"><h6 class="mb-0">Years of experience</h6></div>
                    <div class="col-sm-5 text-secondary">{fetchData.experience}</div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-12">
                    <Link to='/OwnerEditProfile' type="Button" class="btn btn-primary" onClick={() => setEditdetails(true)}>
                        <i class="fas fa-pen me-2"></i>Edit Profile</Link>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default OwnerProfile;