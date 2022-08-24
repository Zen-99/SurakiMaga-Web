import React, { useState,useEffect} from "react";
import './OwnerProfile.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import {Link} from 'react-router-dom';
import apiClient from '../../Services/ApiClient'
import { useForm } from "react-hook-form";

function OwnerEditProfile(){

    const [formData, setFormData]=useState({
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
            setFormData({ name:dataresponse.result.name,contact:dataresponse.result.contact,email:dataresponse.result.email,nic:dataresponse.result.nic,bank_acc:dataresponse.result.bank_acc,scl_service_regno:dataresponse.result.scl_service_regno,experience:dataresponse.result.experience })
        }
        getownerdetails();
    }, []);

      function onChange (e) {
        let name = e.target.name;
        let value = e.target.value;
        setFormData((currentFormData) => {
          const nextFormData = {...currentFormData, [name]: value,}
          console.log(nextFormData)
          return nextFormData;
      });
      }

    //   const { register, handleSubmit } = useForm();

    //   const CheckValidation = e => setInputs({ ...inputs, [e.target.name] : e.target.value });

    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerProfile-home">
                <div className="card p-3 m-2 flex-row OwnerProfilecontainer">
                    <div className={"OwnerProfile-edit-container d-flex flex-column align-items-center"}>
                        <form>
                        <div className="OwnerProfile-photo-edit p-3 d-flex flex-column align-items-center text-center">
                            <div className="OwnerProfile-image">
                            <img src={require('../../assests/avatar7.png')} alt="Admin" class="rounded-circle"/>
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
                        <input type="text" class="form-control border-0 p-0" id="inputName" name="name" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value})}/>
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
                        <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-5 text-secondary">
                        <input type="text" class="form-control border-0 p-0" id="inputEm" name="email" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value})}/>
                        </div>
                    </div>
                    <hr/>
                    <div class="OwnerProfile-details-row justify-content-evenly">
                        <div class="col-sm-5">
                        <h6 class="mb-0">Mobile</h6>
                        </div>
                        <div class="col-sm-5 text-secondary">
                        <input type="text" class="form-control border-0 p-0" id="inputMb" name="contact" value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value})}/>
                        </div>
                    </div>
                    <hr/>
                    <div class="OwnerProfile-details-row justify-content-evenly">
                        <div class="col-sm-5">
                        <h6 class="mb-0">School service reg no.</h6>
                        </div>
                        <div class="col-sm-5 text-secondary">
                        <input type="text" class="form-control border-0 p-0" id="inputReg" name="scl_service_regno" value={formData.scl_service_regno}
                        onChange={(e) => setFormData({ ...formData, scl_service_regno: e.target.value})}/>
                        </div>
                    </div>
                    <hr/>
                    <div class="OwnerProfile-details-row justify-content-evenly">
                        <div class="col-sm-5">
                        <h6 class="mb-0">Bank Acc</h6>
                        </div>
                        <div class="col-sm-5 text-secondary">
                        <input type="text" class="form-control border-0 p-0" id="inputAcc" name="bank_acc" value={formData.bank_acc}
                        onChange={(e) => setFormData({ ...formData, bank_acc: e.target.value})}/>
                        </div>
                    </div>
                    <hr/>
                    <div class="OwnerProfile-details-row justify-content-evenly">
                        <div class="col-sm-5">
                        <h6 class="mb-0">Years of experience</h6>
                        </div>
                        <div class="col-sm-5 text-secondary">
                        <input type="text" class="form-control border-0 p-0" id="inputYr" name="experience" value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value})}/>
                        </div>
                    </div>
                    <hr/>
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                            <button type="submit" value="Submit" class="btn btn-success">Save</button>
                        <Link to='/OwnerProfile' type="Button" class="btn btn-danger">Cancel</Link>
                    </div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerEditProfile