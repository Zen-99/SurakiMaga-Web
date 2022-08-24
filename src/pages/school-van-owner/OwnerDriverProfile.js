import React, { useState} from "react";
import './OwnerProfile.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function OwnerDriverProfile (props){
const location = useLocation();
const data = location.state;
console.log(data);

    const [Editdetails, setEditdetails] = useState(false);

    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerProfile-home">
                <div className="card p-3 m-2 flex-row OwnerProfilecontainer">
                    <div className="OwnerProfile-container  d-flex flex-column align-items-center">
                    <div className="OwnerProfile-photo p-3 d-flex flex-column align-items-center text-center">
                        <div className="OwnerProfile-image">
                        <img src={data.image} alt="" class="rounded-circle"/>
                        </div>
                        
                        <div class="mt-3 d-flex flex-column align-items-center">
                            <h4>{data.fullname}</h4>
                        </div>
                    </div>
                    <div className="OwnerProfile-details p-3">
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">ID No.</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">{data.nic}</div>
                    </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">License number</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">{data.licenceno}</div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">Contact number</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">{data.contact}</div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    <Link to='/OwnerDriverEditProfile' state={data} type="Button" class="btn btn-primary">
                        <i class="fas fa-pen me-2"></i>Edit Profile</Link>
                      <Link to='/OwnerSchoolVans' class="btn btn-primary">Back</Link>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default OwnerDriverProfile;