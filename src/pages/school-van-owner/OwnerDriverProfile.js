import React, { useState} from "react";
import './OwnerProfile.css';
import '../Home.css';
import Axios from "axios";
import OwnerNavbar from "./OwnerNavbar";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import apiClient from '../../Services/ApiClient'

function OwnerDriverProfile (){
  const location = useLocation();
  const data = location.state;
  // console.log(data);
  const [file, setFile] = useState(" ");
  const [Editdetails, setEditdetails] = useState({
    fullname: false,
    nic: false,
    licenceno: false,
    contact: false,
    image: false,
  });
  
      const [form_Data, setform_Data]=useState({
          id:data.id,
          fullname:data.fullname,
          contact:data.contact,
          licenceno:data.licenceno,
          nic:data.nic,
          image:data.image,
      
        })
        
        const submitDetails = () => {
          // e.preventDefault();
          // console.log(form)
          const formData=new FormData();
          formData.append("file",file); 
          formData.append("upload_preset","dskmbhbt"); 

        Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
        .then((response)=>{
          setform_Data({ ...form_Data, image: response.data.secure_url});
          const { dataresponse, error } =  apiClient.EditOwnerDriverProfile({
            id:form_Data.id,
            fullname:form_Data.fullname,
            contact: form_Data.contact,
            licenceno: form_Data.licenceno,
            nic : form_Data.nic,
            image:response.data.secure_url,
          });
        })
         setEditdetails(false);
      }

      const removeDriver = async (e)=>{
        const { dataresponse, error } = await apiClient.removeDriver({
          id:data.id,
        })
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
                            <div className="d-flex flex-column align-items-center justify-content-center gap-4 editpp rounded-circle" style={{backgroundImage: form_Data.image}}>
                              <input type="file" id="Inputimage" name="image" onChange={(event)=>{setFile(event.target.files[0])}}/>
                              <div className="d-flex flex-row gap-4 justify-content-center">
                                <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                                <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,image:false})}>Cancel</button>
                              </div>
                          </div>
                          ):(
                            <div>
                              <img src={form_Data.image} alt="" class="rounded-circle"/>
                              <button class="add-image-btn p-2 rounded-circle" type="button" onClick={()=>setEditdetails({...Editdetails,image:true})}>
                                <i class="fas fa-pen"></i>
                              </button>
                            </div>
                          )}
                        </div>
                            {Editdetails.fullname ? (
                              <div class="mt-3 d-flex flex-row justify-content-center align-items-center gap-4">
                                <input type="text" class="form-control border-0 p-0" id="inputName" name="name" value={form_Data.fullname}
                                onChange={(e) => setform_Data({ ...form_Data, fullname: e.target.value})}/>
                                <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                                <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,fullname:false})}>Cancel</button>
                              </div>
                            ):(
                              <div class="mt-3 d-flex flex-row justify-content-center align-items-center gap-4">
                                <h4>{form_Data.fullname}</h4>
                                <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,fullname:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button> 
                              </div>
                            )}
                    </div>
                    <div className="OwnerProfile-details p-3">
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">ID No.</h6>
                    </div>
                      {Editdetails.nic ? (
                        <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputID" name="nic" value={form_Data.nic}
                      onChange={(e) => setform_Data({ ...form_Data, nic: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,nic:false})}>Cancel</button>
                        </div>
                      ):(
                          <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                            {form_Data.nic}
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,nic:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                    </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">License number</h6>
                    </div>
                    {Editdetails.licenceno ? (
                        <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputlicense" name="licenceno" value={form_Data.licenceno}
                      onChange={(e) => setform_Data({ ...form_Data, licenceno: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,licenceno:false})}>Cancel</button>
                        </div>
                      ):(
                          <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                            {form_Data.licenceno}
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,licenceno:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">Contact number</h6>
                    </div>
                    {Editdetails.contact ? (
                        <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputMb" name="contact" value={form_Data.contact}
                        onChange={(e) => setform_Data({ ...form_Data, contact: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>setEditdetails({...Editdetails,contact:false})}>Cancel</button>
                        </div>
                      ):(
                          <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                            {form_Data.nic}
                            <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,contact:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                          </div> 
                      )}
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    {/* <Link to='/OwnerDriverEditProfile' state={data} type="Button" class="btn btn-primary">
                        <i class="fas fa-pen me-2"></i>Edit Profile</Link> */}
                        <button type="Button" class="btn btn-primary" onClick={removeDriver}>Remove Driver</button>
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