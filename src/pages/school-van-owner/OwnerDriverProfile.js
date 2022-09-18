import React, { useState,useEffect} from "react";
import './OwnerProfile.css';
import '../Home.css';
import Axios from "axios";
import OwnerNavbar from "./OwnerNavbar";
import { Link,useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import apiClient from '../../Services/ApiClient'
import { confirm } from "react-confirm-box";

function OwnerDriverProfile (){
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const [file, setFile] = useState(" ");
  const [formError, setFormError] = useState({
    fullname:null,
    contact: null,
    nic: null,
    licenceno: null,
  });
  const [Editdetails, setEditdetails] = useState({
    fullname: false,
    nic: false,
    licenceno: false,
    contact: false,
    image: false,
  });
  const [form_Data, setform_Data]=useState({
    id:data,
    fullname:"",
    contact:"",
    licenceno:"",
    nic:"",
    image:"",

  })
  const [fetchData, setFetchData]=useState({
    id:data,
    fullname:"",
    contact:"",
    licenceno:"",
    nic:"",
    image:"",

  })
  useEffect(() => {
    async function getdriverdetails() { 
      console.log(data)
        const{dataresponse,error} = await apiClient.getDriverDetails({data:data})
        console.log(dataresponse)
        setFetchData({ fullname:dataresponse.result.fullname,contact:dataresponse.result.contact,nic:dataresponse.result.nic,licenceno:dataresponse.result.licenceno,image:dataresponse.result.image})
        setform_Data({ fullname:dataresponse.result.fullname,contact:dataresponse.result.contact,nic:dataresponse.result.nic,licenceno:dataresponse.result.licenceno,image:dataresponse.result.image})
    }
    getdriverdetails();
}, []);
        function refreshPage() {
          window.location.reload(false);
        }
        
        const submitDetails = () => {
          // e.preventDefault();
          // console.log(form)
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

          if(form_Data.fullname==""){
            let msg = "Name can't be empty."
            setFormError({...formError,fullname:msg})
          } else if (form_Data.contact==""){
            let msg = "contact can't be empty."
            setFormError({...formError,contact:msg})
          } else if (form_Data.nic==""){
            let msg = "NIC can't be empty."
            setFormError({...formError,nic:msg})
          } else if (form_Data.licenceno==""){
            let msg = "License number can't be empty."
            setFormError({...formError,licenceno:msg})
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
            console.log(form_Data)
            console.log("else")
            const { dataresponse, error } =  apiClient.EditOwnerDriverProfile({
              id:data,
              fullname:form_Data.fullname,
              contact: form_Data.contact,
              licenceno: form_Data.licenceno,
              nic : form_Data.nic,
              image:fetchData.image,
            });
            refreshPage()
          }         
      }
      const submitImage = () => {
        setEditdetails(false);
            const formData=new FormData();
            formData.append("file",file); 
            formData.append("upload_preset","dskmbhbt"); 
            Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
            .then((response)=>{
              setform_Data({ ...form_Data, image: response.data.secure_url});
              const { dataresponse, error } =  apiClient.EditOwnerDriverProfile({
                id:data,
                fullname:form_Data.fullname,
                contact: form_Data.contact,
                licenceno: form_Data.licenceno,
                nic : form_Data.nic,
                image:response.data.secure_url,
              });
              refreshPage()
            })
      }
      const CancelEdit = (data,fetch) => {
        // console.log(data)
        setEditdetails({...Editdetails,[data]:false})
        setform_Data({...form_Data,[data]:[fetch]})
        setFormError({...formError,[data]:null})
      }

      const popupbox = {
        render: (message, onConfirm, onCancel) => {
          return (
            <>
              <p>{message} </p>
              <button className="btn btn-success" onClick={onConfirm}> Yes </button>
              <button className="btn btn-danger" onClick={onCancel}> No </button>
            </>
          );
        }
      };

      const onClick = async (popupbox) => {
        const result = await confirm("Confirm to remove", popupbox);
        if (result) {
          removeDriver()
          return;
        }
        console.log("You click No!");
      };

      const removeDriver = async (e)=>{
        console.log("remove")
        const { dataresponse, error } = await apiClient.removeDriver({
          id:data,
        })
        navigate(-1)
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
                            {Editdetails.fullname ? (
                              <div className="col-sm-6  d-flex flex-column gap-2">
                              <div class="mt-3 d-flex flex-row justify-content-center align-items-center gap-4">
                                <input type="text" class="form-control border-0 p-0" id="inputName" name="name" value={form_Data.fullname}
                                onChange={(e) => setform_Data({ ...form_Data, fullname: e.target.value})}/>
                                <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                                <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("fullname",fetchData.fullname)}>Cancel</button>
                              </div>
                              <div className="errors">{formError.fullname}</div>
                            </div>
                            ):(
                              <div class="mt-3 d-flex flex-row justify-content-center align-items-center gap-4">
                                <h4>{fetchData.fullname}</h4>
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
                          <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                            {fetchData.nic}
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
                        <div className="col-sm-6  d-flex flex-column gap-2">
                        <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputlicense" name="licenceno" value={form_Data.licenceno}
                      onChange={(e) => setform_Data({ ...form_Data, licenceno: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("licenceno",fetchData.licenceno)}>Cancel</button>
                        </div>
                      <div className="errors">{formError.licenceno}</div>
                      </div>
                      ):(
                          <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                            {fetchData.licenceno}
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
                        <div className="col-sm-6  d-flex flex-column gap-2">
                        <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                          <input type="text" class="form-control border-0 p-0" id="inputMb" name="contact" value={form_Data.contact}
                        onChange={(e) => setform_Data({ ...form_Data, contact: e.target.value})}/>
                          <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                          <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("contact",fetchData.contact)}>Cancel</button>
                        </div>
                        <div className="errors">{formError.contact}</div>
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
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    {/* <Link to='/OwnerDriverEditProfile' state={data} type="Button" class="btn btn-primary">
                        <i class="fas fa-pen me-2"></i>Edit Profile</Link> */}
                        <button type="Button" class="btn btn-primary" onClick={onClick}>Remove Driver</button>
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