import React,{useState} from "react";
import './OwnerSchoolVans.css';
import '../Home.css';
import { Link } from "react-router-dom";
import apiClient from '../../Services/ApiClient'

function OwnerAddNewDriver (){
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [form,setForm]=useState({
        name:"",
        mobile  : "",
        nic : "",
        licenseno: "",
        uploadedImage: null
    })
const saveFile = (e) => {

};
    
const submitDetails = async (e) => {
    //e.preventDefault();
    // console.log(form)

    const { dataresponse, error } = await apiClient.registerDriver({
        name:form.name,
        mobile  : form.mobile,
        nic : form.nic,
        licenseno: form.licenseno,
        file:file,
        fileName:fileName
   })
   setForm({name:"",mobile: "",nic: "",licenseno: "",uploadedImage: null})
     // const parseRes = await response.json();

}

    return(
        <>
            <div className="d-flex flex-column gap-4 align-items-center">
                {/* <form onSubmit={onSubmitForm}> */}
                <div className="card p-4 gap-4 d-flex flex-column align-items-center">
                    <h4>Add New Driver</h4>
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
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">License No</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                    <input type="text" class="form-control" id="licenceno" name="licenceno" value={form.licenseno} onChange={(e) => setForm({ ...form, licenseno: e.target.value})} />
                                    </div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">NIC</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                    <input type="text" class="form-control" id="nic" name="nic" value={form.nic} onChange={(e) => setForm({ ...form, nic: e.target.value})} />
                                    </div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Mobile No</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                    
                                    <input type="text" class="form-control" name="mobile" id="mobile" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value})} />
                                    </div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Add image</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                        <input class="form-control" type="file" id="image" name="image" value={form.uploadedImage} onChange={saveFile}/>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    <button type="submit" class="btn btn-success"onClick={submitDetails} >Save</button>
                    <Link to='/OwnerSchoolVans' className="btn btn-danger">Cancel</Link>
                </div>
                </div>
                {/* </form> */}
            </div>
        </>
    )
}

export default OwnerAddNewDriver;