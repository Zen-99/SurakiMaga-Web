import React,{useState} from "react";
import Axios from "axios";
import './OwnerSchoolVans.css';
import '../Home.css';
import { Link } from "react-router-dom";
import apiClient from '../../Services/ApiClient'

function OwnerAddNewDriver (){
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState();
    const [form,setForm]=useState({
        name:"",
        mobile  : "",
        nic : "",
        licenseno: "",
    })
    function refreshPage() {
        window.location.reload(false);
      }
      const [formError, setFormError] = useState({
        name:null,
        mobile: null,
        nic : null,
        licenseno: null,
        img:null

      });

    const submitDetails=()=>{
        var nicErr = false
      if(form.nic.length == 10){
        if(form.nic.charAt(9)=='v' || form.nic.charAt(9)=='V'){
          if(isNaN(form.nic.substring(0,8))){
            nicErr = true
          } else {
            nicErr = false
          }
        } else{
          nicErr = true
        }
      } else if (form.nic.length == 12) {
          if(isNaN(form.nic.substring(0,11))){
            nicErr = true
          } else {
            nicErr = false
          }
      } else {
        nicErr = true
      }
        if(form.name ===""){
            let msg = "name can't be empty."
            setFormError({name:msg,mobile: null,nic : null,licenseno: null,img:null})
        } else if(form.licenseno===""){
            let msg = "license number can't be empty."
            setFormError({name:null,mobile: null,nic : null,licenseno:msg,img:null})
        } else if(form.nic===""){
            let msg = "NIC can't be empty."
            setFormError({name:null,mobile: null,nic : msg,licenseno: null,img:null})
        } else if(nicErr) {
            let msg = "NIC incorrect"
            setFormError({name:null,mobile: null,nic : msg,licenseno: null,img:null})
        } else if (form.mobile==="") {
            let msg = "contact number can't be empty."
            setFormError({name:null,mobile: msg,nic : null,licenseno: null,img:null})
        } else if(form.mobile.length!=10){
            let msg = "contact number length incorrect."
            setFormError({name:null,mobile: msg,nic : null,licenseno: null,img:null})
        } else if(form.mobile.charAt(0)!='0' || isNaN(form.mobile)) {
            let msg = "contact number type incorrect."
            setFormError({name:null,mobile: msg,nic : null,licenseno: null,img:null})
        } else if(file ===""){
            let msg = "image is required"
            console.log(msg)
            setFormError({name:null,mobile:null,nic : null,licenseno: null,img:msg})
        } else {
        const formData=new FormData();
        formData.append("file",file); 
        formData.append("upload_preset","dskmbhbt"); 

        Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
        .then((response)=>{
            const { dataresponse, error } = apiClient.registerDriver({
                name:form.name,
                mobile  : form.mobile,
                nic : form.nic,
                licenseno: form.licenseno,
                url:response.data.secure_url
           })
           setFile(null)
           setForm({name:"",mobile: "",nic: "",licenseno: ""})
           setFormError({name:null,mobile: null,nic : null,licenseno: null,img:null})
           refreshPage()
        })
    }


    }
    const cancel = () => {
        setFile(null)
           setForm({name:"",mobile: "",nic: "",licenseno: ""})
           setFormError({name:null,mobile: null,nic : null,licenseno: null,img:null})
    }

    


    return(
        <>  <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={cancel}></button>         
            </div>
            <div className="d-flex flex-column gap-4 align-items-center">
                {/* <form onSubmit={onSubmitForm}> */}
                <div className="card p-4 gap-4 d-flex flex-column align-items-center">
                    {/* <h4>Add New Driver</h4> */}
                    <div className="gap-4 owner-scl-van-details-form">
                        <div className="owner-driver-info d-flex flex-column pt-4 align-items-center">
                            <h5>Driver Information</h5>
                            <div className="p-3">
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Name</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                    <input type="text" class="form-control" id="name" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value})} />
                                    </div>
                                </div>
                                <div className="errors">{formError.name}</div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">License No</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                    <input type="text" class="form-control" id="licenceno" name="licenceno" value={form.licenseno} onChange={(e) => setForm({ ...form, licenseno: e.target.value})} />
                                    </div>
                                </div>
                                <div className="errors">{formError.licenseno}</div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">NIC</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                    <input type="text" class="form-control" id="nic" name="nic" value={form.nic} onChange={(e) => setForm({ ...form, nic: e.target.value})} />
                                    </div>
                                </div>
                                <div className="errors">{formError.nic}</div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Mobile No</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                    
                                    <input type="text" class="form-control" name="mobile" id="mobile" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value})} />
                                    </div>
                                </div>
                                <div className="errors">{formError.mobile}</div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Add image</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                        <input class="form-control" type="file" id="image" name="image" onChange={(event)=>{setFile(event.target.files[0])}}/>
                                    </div>
                                </div>
                                <div className="errors">{formError.img}</div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    <button type="submit" class="btn btn-success"onClick={submitDetails} >Save</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onClick={cancel}>Cancel</button>
                </div>
                </div>
                {/* </form> */}
            </div>
        </>
    )
}

export default OwnerAddNewDriver;