import React, {useState,useEffect} from "react";
import './OwnerSchoolVans.css';
import '../Home.css';
import { Link } from "react-router-dom";
import Axios from "axios";
import apiClient from '../../Services/ApiClient'
import Select from 'react-select'

function OwnerAddNewVehicle() {
    const [drivers,setDrivers]=useState([])
    const [school,setSchool]=useState([])
    useEffect(() => {
        async function getDriverdetails() { 
            const{dataresponse,error} = await apiClient.loadDriversDetails()
            setDrivers(dataresponse.result)
        }
        getDriverdetails();
    }, []);
    useEffect(() => {
        async function getschool(){
            const{dataresponse,error} = await apiClient.getSchool()
            console.log(dataresponse)
            setSchool(dataresponse.result)
        }
        getschool()
    },[]);
    const [file, setFile] = useState({
        frontimg:"",
        backimg:"",
        licensefront:"",
        licenseback:""
    });
    const [form_Data, setForm_Data]=useState({
        vehicleno:"",
        vehicletype:"van",
        seats:"",
        charge:"",
        startlocation: "",
        driverid:"",
    
      })   
      const [formError, setFormError] = useState({
        vehicleno:null,
        seats:null,
        charge:null,
        startlocation: null,
        driverid:null,
        img:null

      });
      const [selectedValue, setSelectedValue] = useState(form_Data.vehicletype);
      const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setForm_Data({ ...form_Data, vehicletype: event.target.value})
      };
    //   var selectedschools = []
    //   const handleselectschool = (selected) => {
    //     console.log(selected)
    //     selectedschools.push({id:selected.value})
    //   };
    const [selectedSchools, setSelectedSchools] = useState();
    const handleselectschool = (selected) => {
        // setSelectedSchools(event.target.value)
        console.log(selected)
        setSelectedSchools(selected)
    }

      var options = []
      drivers.map((data)=>{
        if(data.avail === 1){
            options.push({ value: data.id, label: data.fullname })
        }
      })
      var selectschools = []
      school.map((data)=>{
            selectschools.push({ value: data.id, label: data.name })
      })
      const submitDetails = async ()=>{
        if(form_Data.vehicleno ===""){
            let msg = "license number can't be empty."
            setFormError({vehicleno:msg,seats:null,charge:null,startlocation: null,driverid:null,img:null})
        } else if(file.frontimg===""||file.backimg===""||file.licensefront===""||file.licenseback===""){
            let msg = "upload all required images"
            setFormError({vehicleno:null,seats:null,charge:null,startlocation: null,driverid:null,img:msg})
        } else if (form_Data.driverid===""){
            let msg = "asign a driver"
            setFormError({vehicleno:null,seats:null,charge:null,startlocation: null,driverid:msg,img:null})
        } else if (form_Data.startlocation===""){
            let msg = "start location can't be empty."
            setFormError({vehicleno:null,seats:null,charge:null,startlocation: msg,driverid:null,img:null})
        } else if (form_Data.seats===""){
            let msg = "number of seats can't be empty."
            setFormError({vehicleno:null,seats:msg,charge:null,startlocation: null,driverid:null,img:null})
        } else if (form_Data.charge ===""){
            let msg = "charge can't be empty."
            setFormError({vehicleno:null,seats:null,charge:msg,startlocation: null,driverid:null,img:null})
        } else{
            const { dataresponse, error } = await apiClient.isuniquevehicleno({vehicleno:form_Data.vehicleno})
            console.log(dataresponse.result)
            if(!dataresponse.result){
                let msg = "license number already exists"
                setFormError({vehicleno:msg,seats:null,charge:null,startlocation: null,driverid:null,img:null})
            } else {    
                const formData=new FormData();
                formData.append("file",file.frontimg); 
                formData.append("upload_preset","dskmbhbt"); 
                Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
                .then((response)=>{
                    const frontimage = response.data.secure_url
                    const formData=new FormData();
                    formData.append("file",file.backimg); 
                    formData.append("upload_preset","dskmbhbt"); 
                    Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
                    .then((response)=>{
                        const backimage = response.data.secure_url
                        const formData=new FormData();
                        formData.append("file",file.licensefront); 
                        formData.append("upload_preset","dskmbhbt"); 
                        Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
                        .then((response)=>{
                            const licensefrontimage = response.data.secure_url
                            const formData=new FormData();
                            formData.append("file",file.licenseback); 
                            formData.append("upload_preset","dskmbhbt"); 
                            Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
                            .then(async (response)=>{
                                const licensebackimage = response.data.secure_url
                                const { dataresponse, error } = await apiClient.registersclvan({
                                    vehicleno:form_Data.vehicleno,
                                    vehicletype  : form_Data.vehicletype,
                                    seats : form_Data.seats,
                                    charge: form_Data.charge,
                                    startlocation:form_Data.startlocation,
                                    driverid:form_Data.driverid,
                                    frontimg:frontimage,
                                    backimg:backimage,
                                    licensefront:licensefrontimage,
                                    licenseback:licensebackimage,
                                })
                                const schoolvanid = dataresponse.result.id
                                console.log(schoolvanid)
                                selectedSchools.map(async (data)=>{
                                    console.log(data.value)
                                    const {dataresponse, error} = await apiClient.addSchoolstoSchoolvan({
                                        school:data.value,
                                        schoolvanid:schoolvanid,
                                    })
                                })
                            })
                        })
                    })
                setFile({frontimg:"",backimg:"",licensefront:"",licenseback:""})
                setForm_Data({name:"",mobile: "",nic: "",licenseno: ""})
                })
            } 
        }
    }
    const handleselect = (selected) => {
        console.log(selected.value);
        setForm_Data({ ...form_Data, driverid: selected.value})
      };
    return(
        <>
            <div className="d-flex flex-column gap-4 align-items-center">
                {/* <form> */}
                <div className="card p-4 gap-4 d-flex flex-column align-items-center">
                    {/* <h3>Add New Vehicle</h3> */}
                    <div className="gap-4 owner-scl-van-details-form">
                        <div className="owner-vehicle-info d-flex flex-column pt-4 align-items-center">
                            <h4>Vehicle Information</h4>
                            <div className="p-3">
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Vehicle No</h6></div>
                                    <div class="col-sm-8 text-secondary"><input type="text" class="form-control" name="vehicleno" value={form_Data.vehicleno} onChange={(e) => setForm_Data({ ...form_Data, vehicleno: e.target.value})} /></div>
                                </div>
                                <div className="errors">{formError.vehicleno}</div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Vehicle type</h6></div>
                                    <div class="col-sm-8 text-secondary d-flex flex-row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="van" id="van" value="van" checked={selectedValue === 'van'} onChange={handleChange}></input>
                                            <label class="form-check-label" for="van">Van</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="bus" id="bus" value="bus" checked={selectedValue === 'bus'} onChange={handleChange}></input>
                                            <label class="form-check-label" for="bus">Bus</label>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                {/* <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Model</h6></div>
                                    <div class="col-sm-8 text-secondary"><input type="text" class="form-control"/></div>
                                </div>
                                <hr/> */}
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Add images</h6></div>
                                    <div class="col-sm-8 text-secondary">
                                        <p className="mb-0">Vehicle images(front with number plate)</p>
                                        <input class="form-control" type="file" id="frontimg" onChange={(event)=>{setFile({ ...file, frontimg: event.target.files[0]})}}/>
                                        <p className="mb-0">Vehicle images(back with number plate)</p>
                                        <input class="form-control" type="file" id="backimg" onChange={(event)=>{setFile({ ...file, backimg: event.target.files[0]})}}/>
                                        <p className="mb-0 mt-2">Vehicle license card (front)</p>
                                        <input class="form-control" type="file" id="licensefront" onChange={(event)=>{setFile({ ...file, licensefront: event.target.files[0]})}}/>
                                        <p className="mb-0 mt-2">Vehicle license card (back)</p>
                                        <input class="form-control" type="file" id="licenseback" onChange={(event)=>{setFile({ ...file, licenseback: event.target.files[0]})}}/>
                                    </div>
                                </div>
                                <div className="errors">{formError.img}</div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Driver</h6></div>
                                    <div class="col-sm-8 text-secondary">
                                    <div class="input-group mb-3">
                                    <Select
                                        options={options}
                                        name="drivers"
                                        placeholder="assign a driver"
                                        value={options.value}
                                        onChange={handleselect}
                                    />
                                    </div>
                                    </div>
                                </div>
                                <div className="errors">{formError.driverid}</div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Start location</h6></div>
                                    <div class="col-sm-8 text-secondary"><input type="text" class="form-control" value={form_Data.startlocation} onChange={(e) => setForm_Data({ ...form_Data, startlocation: e.target.value})}/></div>
                                </div>
                                <div className="errors">{formError.startlocation}</div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Number of seats</h6></div>
                                    <div class="col-sm-8 text-secondary"><input type="text" class="form-control" value={form_Data.seats} onChange={(e) => setForm_Data({ ...form_Data, seats: e.target.value})}/></div>
                                </div>
                                <div className="errors">{formError.seats}</div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Charge per km</h6></div>
                                    <div class="col-sm-8 text-secondary"><input type="text" class="form-control" value={form_Data.charge} onChange={(e) => setForm_Data({ ...form_Data, charge: e.target.value})}/></div>
                                </div>
                                <div className="errors">{formError.charge}</div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Schools</h6></div>
                                    <div class="col-sm-8 text-secondary">
                                    <div class="dropdown-container">
                                        <Select
                                            options={selectschools}
                                            isMulti={true}
                                            name="schools"
                                            placeholder="select schools"
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            value={selectschools.value}
                                            onChange={handleselectschool}
                                        />
                                    </div>
                                    </div>
                                    {/* <div class="col-sm-8 text-secondary"><input type="text" class="form-control" multiple/></div> */}
                                </div>
                                {/* <div className="errors">{formError.name}</div> */}
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    <button type="submit" class="btn btn-success" onClick={submitDetails}>Save</button>
                    <Link to='/OwnerSchoolVans' className="btn btn-danger">Cancel</Link>
                </div>
                </div>
                {/* </form> */}
            </div>
        </>
    )
}
export default OwnerAddNewVehicle;