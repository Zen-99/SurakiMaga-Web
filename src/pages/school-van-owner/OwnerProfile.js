import React, { useState,useEffect} from "react";
import './OwnerProfile.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import {Link} from 'react-router-dom';
import apiClient from '../../Services/ApiClient'
import Axios from "axios";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";
// import Popup from 'reactjs-popup';

function OwnerProfile (){
  const [file, setFile] = useState(" ");
  // const [errors, setErrors] = useState({})
  // const [formError, setFormError] = useState(null)
  const [formError, setFormError] = useState({
    name:null,
    contact: null,
    email: null,
    nic: null,
    bank_acc: null,
    scl_service_regno: null,
    experience: null,
  });
    const [Editdetails, setEditdetails] = useState({
      name:false,
      contact: false,
      email: false,
      nic: false,
      bank_acc: false,
      scl_service_regno: false,
      experience: false,
      image: false,
    });
    const [fetchData,setFetchData]=useState({
      id:"",
      name:"",
      contact:"",
      email:"",
      nic:"",
      bank_acc: "",
      scl_service_regno:"",
      experience:"",
      image: "",

  })
  const [form_Data,setform_Data]=useState({
    name:"",
    contact:"",
    email:"",
    nic:"",
    bank_acc: "",
    scl_service_regno:"",
    experience:"",
    image: "",
  })

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    async function getownerdetails() { 
        const{dataresponse,error} = await apiClient.loadownerDetails()
        console.log(dataresponse)
        // console.log("dilshi")
        setFetchData({ id:dataresponse.result.id,name:dataresponse.result.name,contact:dataresponse.result.contact,email:dataresponse.result.email,nic:dataresponse.result.nic,bank_acc:dataresponse.result.bank_acc,scl_service_regno:dataresponse.result.scl_service_regno,experience:dataresponse.result.experience ,image:dataresponse.result.image})
        setform_Data({ name:dataresponse.result.name,contact:dataresponse.result.contact,email:dataresponse.result.email,nic:dataresponse.result.nic,bank_acc:dataresponse.result.bank_acc,scl_service_regno:dataresponse.result.scl_service_regno,experience:dataresponse.result.experience ,image:dataresponse.result.image})
    }
    getownerdetails();
}, []);

    const submitDetails = () => {
      var nicErr = false
      if(form_Data.nic.length == 10){
        if(form_Data.nic.charAt(9)=='v' || form_Data.nic.charAt(9)=='V'){
          if(isNaN(form_Data.nic.substring(0,8))){
            nicErr = true
          } else {
            nicErr = false
          }
        } else{
          nicErr = true
        }
      } else if (form_Data.nic.length == 12) {
          if(isNaN(form_Data.nic.substring(0,11))){
            nicErr = true
          } else {
            nicErr = false
          }
      } else {
        nicErr = true
      }
      console.log(nicErr)

      if(form_Data.name==""){
        let msg = "Name can't be empty."
        setFormError({...formError,name:msg})
      } else if (form_Data.contact==""){
        let msg = "contact can't be empty."
        setFormError({...formError,contact:msg})
      } else if (form_Data.nic==""){
        let msg = "NIC can't be empty."
        setFormError({...formError,nic:msg})
      } else if (form_Data.bank_acc==""){
        let msg = "Bank account number can't be empty."
        setFormError({...formError,bank_acc:msg})
      } else if (form_Data.scl_service_regno==""){
        let msg = "School service register number can't be empty."
        setFormError({...formError,scl_service_regno:msg})
      } else if (form_Data.contact.length!=10){
        let msg = "contact number length incorrect."
        setFormError({...formError,contact:msg})
      } else if (form_Data.contact.charAt(0)!='0' || isNaN(form_Data.contact)) {
        let msg = "contact number type incorrect."
        setFormError({...formError,contact:msg})
      } else if (nicErr) {
        let msg = "NIC incorrect."
        setFormError({...formError,nic:msg})
      } else {
        setFormError(null)
        setEditdetails(false);

        const { dataresponse, error } =  apiClient.EditOwnerProfile({
          id:fetchData.id,
          name:form_Data.name,
          contact: form_Data.contact,
          email: form_Data.email,
          nic : form_Data.nic,
          bank_acc:form_Data.bank_acc,
          scl_service_regno:form_Data.scl_service_regno,
          experience:form_Data.experience,
          image: fetchData.image,
      });
        // const formData=new FormData();
        // formData.append("file",file); 
        // formData.append("upload_preset","dskmbhbt"); 

        // Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
        // .then((response)=>{
        //   console.log("response")
        //   setFetchData({ ...fetchData, image: response.data.secure_url});
        //   const { dataresponse, error } =  apiClient.EditOwnerProfile({
        //       id:fetchData.id,
        //       name:form_Data.name,
        //       contact: form_Data.contact,
        //       email: form_Data.email,
        //       nic : form_Data.nic,
        //       bank_acc:form_Data.bank_acc,
        //       scl_service_regno:form_Data.scl_service_regno,
        //       experience:form_Data.experience,
        //       image: response.data.secure_url,
        //   });
        // })
      }
      refreshPage()
      // e.preventDefault();
      // console.log(form_Data)
      // console.log(fetchData) 
    }
    const submitImage = () => {
      setEditdetails(false);
      const formData=new FormData();
      formData.append("file",file); 
      formData.append("upload_preset","dskmbhbt"); 

      Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
        .then((response)=>{
          console.log("response")
          setFetchData({ ...fetchData, image: response.data.secure_url});
          const { dataresponse, error } =  apiClient.EditOwnerProfile({
              id:fetchData.id,
              name:form_Data.name,
              contact: form_Data.contact,
              email: form_Data.email,
              nic : form_Data.nic,
              bank_acc:form_Data.bank_acc,
              scl_service_regno:form_Data.scl_service_regno,
              experience:form_Data.experience,
              image: response.data.secure_url,
          });
          refreshPage()
        })
       
    }

    const CancelEdit = (data,fetch) => {
      console.log(fetch)
      setEditdetails({...Editdetails,[data]:false})
      setform_Data({...form_Data,[data]:[fetch]})
      setFormError({...formError,[data]:null})
    }

    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerProfile-home">
                <div className="card p-3 m-2 flex-row OwnerProfilecontainer">
                    <div className="OwnerProfile-container  d-flex flex-column align-items-center">
                    <div className="OwnerProfile-photo p-3 d-flex flex-column align-items-center text-center">
                        <div className="OwnerProfile-image">
                        {Editdetails.image ? (
                            <div className="d-flex flex-column align-items-center justify-content-center gap-4 editpp rounded-circle" style={{backgroundImage: fetchData.image}}>
                              <input type="file" id="Inputimage" name="image" onChange={(event)=>{setFile(event.target.files[0])}}/>
                              <div className="d-flex flex-row gap-4 justify-content-center">
                                <button type="submit" className="savebutton" value="Submit" onClick={submitImage}>Save</button>
                                <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,image:false})}>Cancel</button>
                              </div>
                          </div>
                          ):(
                            <div>
                              <img src={fetchData.image} alt="" class="rounded-circle"/>
                              <button class="add-image-btn p-2 rounded-circle" type="button" onClick={()=>setEditdetails({...Editdetails,image:true})}>
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                          )}
                        </div>
                        
                        <div class="mt-3 d-flex flex-column align-items-center">
                            {Editdetails.name ? (
                              <div className="col-sm-6  d-flex flex-column gap-2">
                              <div class="mt-3 d-flex flex-row justify-content-center align-items-center gap-4">
                                <input type="text" class="form-control border-0 p-0" id="inputName" name="name" value={form_Data.name}
                                onChange={(e) => setform_Data({ ...form_Data, name: e.target.value})}/>
                                <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                                <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("name",fetchData.name)}>Cancel</button>
                              </div>
                              <div className="errors">{formError.name}</div>
                            </div>
                            ):(
                              <div class="mt-3 d-flex flex-row justify-content-center align-items-center gap-4">
                                <h4>{fetchData.name}</h4>
                                <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,name:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button> 
                              </div>
                            )}
                        </div>
                    </div>
                    <div className="OwnerProfile-details p-3 px-5">
                  <div class="OwnerProfile-details-row justify-content-between">
                    <div class="col-sm-4"><h6 class="mb-0">ID No.</h6></div>
                    {Editdetails.nic ? (
                      <div className="col-sm-6  d-flex flex-column gap-2">
                        <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputID" name="nic" value={form_Data.nic}
                      onChange={(e) => setform_Data({ ...form_Data, nic: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("nic",fetchData.nic)}>Cancel</button>
                        </div>
                        <div className="errors">{formError.nic}</div>
                        </div>
                      ):(
                          <div class="col-sm-6 text-secondary d-flex flex-row justify-content-between align-items-center">
                            <p1>{fetchData.nic}</p1>
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,nic:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div>  
                      )}
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-between">
                    <div class="col-sm-4"><h6 class="mb-0">Contact</h6></div>
                    {Editdetails.contact ? (
                      <div className="col-sm-6  d-flex flex-column gap-2">
                        <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputContact" name="contact" value={form_Data.contact}
                      onChange={(e) => setform_Data({ ...form_Data, contact: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("contact",fetchData.contact)}>Cancel</button>
                        </div>
                        <div className="errors">{formError.contact}</div>
                      </div>
                      ):(
                          <div class="col-sm-6 text-secondary d-flex flex-row justify-content-between align-items-center">
                            <p1>{fetchData.contact}</p1>
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,contact:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-between">
                    <div class="col-sm-4"><h6 class="mb-0">School service reg no.</h6></div>
                    ``{Editdetails.scl_service_regno ? (
                      <div className="col-sm-6  d-flex flex-column gap-2">
                        <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputRegno" name="scl_service_regno" value={form_Data.scl_service_regno}
                      onChange={(e) => setform_Data({ ...form_Data, scl_service_regno: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("scl_service_regno",fetchData.scl_service_regno)}>Cancel</button>
                        </div>
                        <div className="errors">{formError.scl_service_regno}</div>
                      </div>
                      ):(
                          <div class="col-sm-6 text-secondary d-flex flex-row justify-content-between align-items-center">
                            <p1>{fetchData.scl_service_regno}</p1>
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,scl_service_regno:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-between">
                    <div class="col-sm-4"><h6 class="mb-0">Bank Acc</h6></div>
                    {Editdetails.bank_acc ? (
                      <div className="col-sm-6  d-flex flex-column gap-2">
                        <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputBankAcc" name="bank_acc" value={form_Data.bank_acc}
                      onChange={(e) => setform_Data({ ...form_Data, bank_acc: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("bank_acc",fetchData.bank_acc)}>Cancel</button>
                        </div>
                        <div className="errors">{formError.bank_acc}</div>
                      </div>
                      ):(
                          <div class="col-sm-6 text-secondary d-flex flex-row justify-content-between align-items-center">
                            <p1>{fetchData.bank_acc}</p1>
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,bank_acc:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-between">
                    <div class="col-sm-4"><h6 class="mb-0">Years of experience</h6></div>
                    {Editdetails.experience ? (
                      <div className="col-sm-6  d-flex flex-column gap-2">
                        <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputExperience" name="experience" value={form_Data.experience}
                      onChange={(e) => setform_Data({ ...form_Data, experience: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("experience",fetchData.experience)}>Cancel</button>
                        </div>
                        <div className="errors">{formError.experience}</div>
                      </div>
                      ):(
                          <div class="col-sm-6 text-secondary d-flex flex-row justify-content-between align-items-center">
                            <p1>{fetchData.experience}</p1>
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,experience:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                  </div>
                  <hr/>
                  {/* <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-12">
                    <Link to='/OwnerEditProfile' type="Button" class="btn btn-primary" onClick={() => setEditdetails(true)}>
                        <i class="fas fa-pen me-2"></i>Edit Profile</Link>
                    </div>
                  </div> */}
                </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default OwnerProfile;