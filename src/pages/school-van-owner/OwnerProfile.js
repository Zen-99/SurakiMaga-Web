import React, { useState,useEffect} from "react";
import './OwnerProfile.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import {Link} from 'react-router-dom';
import apiClient from '../../Services/ApiClient'
import Axios from "axios";
// import Popup from 'reactjs-popup';

function OwnerProfile (){
  const [file, setFile] = useState(" ");
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
      name:"",
      contact:"",
      email:"",
      nic:"",
      bank_acc: "",
      scl_service_regno:"",
      experience:"",
      image: "",

  })
  useEffect(() => {
    async function getownerdetails() { 
        const{dataresponse,error} = await apiClient.loadownerDetails()
        console.log(dataresponse)
        // console.log("dilshi")
        setFetchData({ name:dataresponse.result.name,contact:dataresponse.result.contact,email:dataresponse.result.email,nic:dataresponse.result.nic,bank_acc:dataresponse.result.bank_acc,scl_service_regno:dataresponse.result.scl_service_regno,experience:dataresponse.result.experience ,image:dataresponse.result.image})
    }
    getownerdetails();
}, []);

    const submitDetails = () => {
      // e.preventDefault();
      // console.log(form)
      const formData=new FormData();
      formData.append("file",file); 
      formData.append("upload_preset","dskmbhbt"); 

    Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
    .then((response)=>{
      setFetchData({ ...fetchData, image: response.data.secure_url});
      const { dataresponse, error } =  apiClient.EditOwnerProfile({
          id:fetchData.id,
          name:fetchData.name,
          contact: fetchData.contact,
          email: fetchData.email,
          nic : fetchData.nic,
          bank_acc:fetchData.bank_acc,
          scl_service_regno:fetchData.scl_service_regno,
          experience:fetchData.experience,
          image: response.data.secure_url,
      });
    })
    setEditdetails(false);
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
                                <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
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
                              <div class="mt-3 d-flex flex-row justify-content-center align-items-center gap-4">
                                <input type="text" class="form-control border-0 p-0" id="inputName" name="name" value={fetchData.name}
                                onChange={(e) => setFetchData({ ...fetchData, name: e.target.value})}/>
                                <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                                <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,name:false})}>Cancel</button>
                              </div>
                            ):(
                              <div class="mt-3 d-flex flex-row justify-content-center align-items-center gap-4">
                                <h4>{fetchData.name}</h4>
                                <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,name:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button> 
                              </div>
                            )}
                        </div>
                    </div>
                    <div className="OwnerProfile-details p-3">
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5"><h6 class="mb-0">ID No.</h6></div>
                    {Editdetails.nic ? (
                        <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputID" name="nic" value={fetchData.nic}
                      onChange={(e) => setFetchData({ ...fetchData, nic: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,nic:false})}>Cancel</button>
                        </div>
                      ):(
                          <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                            {fetchData.nic}
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,nic:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5"><h6 class="mb-0">Contact</h6></div>
                    {Editdetails.contact ? (
                        <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputContact" name="contact" value={fetchData.contact}
                      onChange={(e) => setFetchData({ ...fetchData, contact: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,contact:false})}>Cancel</button>
                        </div>
                      ):(
                          <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                            {fetchData.contact}
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,contact:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5"><h6 class="mb-0">School service reg no.</h6></div>
                    ``{Editdetails.scl_service_regno ? (
                        <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputRegno" name="scl_service_regno" value={fetchData.scl_service_regno}
                      onChange={(e) => setFetchData({ ...fetchData, scl_service_regno: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,scl_service_regno:false})}>Cancel</button>
                        </div>
                      ):(
                          <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                            {fetchData.scl_service_regno}
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,scl_service_regno:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5"><h6 class="mb-0">Bank Acc</h6></div>
                    {Editdetails.bank_acc ? (
                        <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputBankAcc" name="bank_acc" value={fetchData.bank_acc}
                      onChange={(e) => setFetchData({ ...fetchData, bank_acc: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,bank_acc:false})}>Cancel</button>
                        </div>
                      ):(
                          <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                            {fetchData.bank_acc}
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,bank_acc:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5"><h6 class="mb-0">Years of experience</h6></div>
                    {Editdetails.experience ? (
                        <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputExperience" name="experience" value={fetchData.experience}
                      onChange={(e) => setFetchData({ ...fetchData, experience: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,experience:false})}>Cancel</button>
                        </div>
                      ):(
                          <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                            {fetchData.experience}
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