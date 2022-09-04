import React, { useState,useEffect} from "react";
import './OwnerProfile.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import {Link} from 'react-router-dom';
import apiClient from '../../Services/ApiClient'
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom'

function OwnerDriverEditProfile(){
    const location = useLocation();
const data = location.state;
// console.log(data);

    const [formData, setFormData]=useState({
        id:data.id,
        fullname:data.fullname,
        contact:data.contact,
        licenceno:data.licenceno,
        nic:data.nic,
        image:data.image
    
      })

      function onChange (e) {
        let name = e.target.name;
        let value = e.target.value;
        setFormData((currentFormData) => {
          const nextFormData = {...currentFormData, [name]: value,}
          console.log(nextFormData)
          return nextFormData;
      });
      }
      const submitDetails = async (e) => {
        e.preventDefault();
        // console.log(form)
    
        const { dataresponse, error } = await apiClient.EditOwnerDriverProfile({
            id:formData.id,
            fullname:formData.fullname,
            contact: formData.contact,
            licenceno: formData.licenceno,
            nic : formData.nic,
            image:formData.image
       })
       
    
    }
    //   const { register, handleSubmit } = useForm();

    //   const CheckValidation = e => setInputs({ ...inputs, [e.target.name] : e.target.value });

    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerProfile-home">
                <div className="card p-3 m-2 flex-row OwnerProfilecontainer">
                    <div className={"OwnerProfile-edit-container d-flex flex-column align-items-center"}>
                        {/* <form> */}
                        <div className="OwnerProfile-photo-edit p-3 d-flex flex-column align-items-center text-center">
                            <div className="OwnerProfile-image">
                            <img src={data.image} alt="Admin" class="rounded-circle"/>
                            <button class="add-image-btn p-2  rounded-circle">
                            <i class="fas fa-plus"></i>
                            </button>
                            </div>
                        </div>
                        <div className="OwnerProfile-details-edit p-3">
                        <div class="OwnerProfile-details-row justify-content-evenly">
                        <div class="col-sm-5">
                        <h6 class="mb-0">Name</h6>
                        </div>
                        <div class="col-sm-5 text-secondary">
                        <input type="text" class="form-control border-0 p-0" id="inputName" name="name" value={formData.fullname}
                        onChange={(e) => setFormData({ ...formData, fullname: e.target.value})}/>
                        </div>
                    </div>
                    <hr/>
                    <div class="OwnerProfile-details-row justify-content-evenly">
                        <div class="col-sm-5">
                        <h6 class="mb-0">ID No.</h6>
                        </div>
                        <div class="col-sm-5 text-secondary">
                            <input type="text" class="form-control border-0 p-0" id="inputID" name="nic" value={formData.nic}
                            onChange={(e) => setFormData({ ...formData, nic: e.target.value})}/>
                        </div>
                    </div>
                    <hr/>
                    <div class="OwnerProfile-details-row justify-content-evenly">
                        <div class="col-sm-5">
                        <h6 class="mb-0">License No</h6>
                        </div>
                        <div class="col-sm-5 text-secondary">
                        <input type="text" class="form-control border-0 p-0" id="inputEm" name="email" value={formData.licenceno}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value})}/>
                        </div>
                    </div>
                    <hr/>
                    <div class="OwnerProfile-details-row justify-content-evenly">
                        <div class="col-sm-5">
                        <h6 class="mb-0">contact No</h6>
                        </div>
                        <div class="col-sm-5 text-secondary">
                        <input type="text" class="form-control border-0 p-0" id="inputMb" name="contact" value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value})}/>
                        </div>
                    </div>
                    <hr/>
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                            <button type="submit" value="Submit" class="btn btn-success" onClick={submitDetails}>Save</button>
                        <Link to='/OwnerDriverProfile' state={formData} type="Button" class="btn btn-danger">Cancel</Link>
                    </div>
                    </div>
                    {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerDriverEditProfile