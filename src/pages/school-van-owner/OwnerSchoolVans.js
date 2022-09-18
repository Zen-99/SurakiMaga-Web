import React,{useState,useEffect} from "react";
import './OwnerSchoolVans.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import { Link,useNavigate } from "react-router-dom";
import OwnerAddNewDriver from "./OwnerAddNewDriver";
import OwnerAddNewVehicle from './OwnerAddNewVehicle';
import apiClient from '../../Services/ApiClient'
import Select from 'react-select'
import { confirm } from "react-confirm-box";

function OwnerSchoolVans (){
    const [drivers,setDrivers]=useState([])
    const [schoolvans,setSchoolvans]=useState([])
    const [school,setSchool]=useState([])
    const [selectsclvan,setSelectsclvan]= useState()
    const [schoolsSchoolvan,setSchoolsSchoolvan]=useState([])
    const [selectedSchools, setSelectedSchools] = useState({})
    const navigate = useNavigate();
    var count = 0;
    var countelse = 0;
    var SelectedSchools = []

    const [formData, setFormData]=useState({
        id:"",
        seats:"",
        charge:"",
        startlocation: "",
        driverid:"",
    
      })
      const [formError, setFormError] = useState({
        seats:null,
        charge:null,
        startlocation: null,
        driver:null,
        school:null,

      });
      const [Editdetails, setEditdetails] = useState({
        seats:false,
        charge:false,
        startlocation: false,
        driver:false,
        school:false,
      });
    function refreshPage() {
    window.location.reload(false);
    }

    useEffect(() => {
        async function getDriverdetails() { 
            const{dataresponse,error} = await apiClient.loadDriversDetails()
            console.log(dataresponse.result)
            setDrivers(dataresponse.result)
        }
        getDriverdetails();
    }, []);

    useEffect(() => {
        async function getschoolvandetails(){
            const{dataresponse,error} = await apiClient.getschoolvandetails()
            console.log(dataresponse)
            setSchoolvans(dataresponse.result)
            setSelectsclvan(dataresponse.result[0].id)
            selectsclvanDetails(dataresponse.result[0].id,dataresponse.result)
        }
        getschoolvandetails();
    },[])
    useEffect(() => {
        async function getschoolsSchoolvan(){
            const{dataresponse,error} = await apiClient.getschoolsSchoolvan()
            console.log(dataresponse.result)
            setSchoolsSchoolvan(dataresponse.result)
        }
        getschoolsSchoolvan()
    },[]);

    useEffect(() => {
        async function getschool(){
            const{dataresponse,error} = await apiClient.getSchool()
            console.log(dataresponse)
            setSchool(dataresponse.result)
        }
        getschool()
    },[]);

    const handleselected = async (selected) => {
        console.log(selected);
        await setSelectsclvan(selected)
        console.log(selectsclvan)
        selectsclvanDetails(selected,schoolvans);
        setEditdetails({seats:false,charge:false,startlocation: false,driver:false})
      };
    
      function ListItem(props) {
        return <li>{props.value}</li>;
      }

    const selectsclvanDetails=(selected,schoolvans)=>{
        schoolvans.map((data)=>{
            console.log(data.id)
        if(selected===data.id){
            setFormData({id:data.id,seats:data.seats,charge:data.charge,startlocation:data.startlocation,driverid:data.driverid});
        }
    })
}
    const selectschooldetails = () => {
        console.log(selectedSchools)
        schoolsSchoolvan.map((data)=>{
            if(data.sclvanid===selectsclvan){
                console.log("inside first if")
                school.map((scl)=>{
                    if(data.sclid===scl.id){
                        console.log("inside second if")
                        SelectedSchools.push({value:scl.id, label:scl.name })
                        console.log(SelectedSchools)
                    }
                })
            }
        
        })
        setSelectedSchools(SelectedSchools)
    }

const CancelEdit = (data,fetch) => {
    console.log(data)
    setEditdetails({...Editdetails,[data]:false})
    setFormData({...formData,[data]:[fetch]})
    setFormError({...formError,[data]:null})
  }

  var options = []
      drivers.map((data)=>{
        if(data.avail === 1){
            options.push({ value: data.id, label: data.fullname })
        }
      })
    const handleselect = (selected) => {
        console.log(selected.value);
        setFormData({ ...formData, driverid: selected.value})
    };
    const submitDetails = async () =>{
        if (formData.driverid===""){
            let msg = "asign a driver"
            setFormError({seats:null,charge:null,startlocation: null,driver:msg,school:null})
        } else if (formData.startlocation===""){
            let msg = "start location can't be empty."
            setFormError({seats:null,charge:null,startlocation: msg,driver:null,school:null})
        } else if (formData.seats===""){
            let msg = "number of seats can't be empty."
            setFormError({seats:msg,charge:null,startlocation: null,driver:null,school:null})
        } else if(isNaN(formData.seats)){
            let msg = "number of seats can't be a text."
            setFormError({seats:msg,charge:null,startlocation: null,driver:null,school:null})
        } else if (formData.charge ===""){
            let msg = "charge can't be empty."
            setFormError({seats:null,charge:msg,startlocation: null,driver:null,school:null})
        } else if(isNaN(formData.charge)){
            let msg = "charge can't be a text."
            setFormError({seats:null,charge:msg,startlocation: null,driver:null,school:null})
        } else{
            const { dataresponse, error } = await apiClient.updatesclvanDetails({
                id:formData.id,
                seats : formData.seats,
                charge: formData.charge,
                startlocation:formData.startlocation,
                driverid:formData.driverid,
            })
            refreshPage()
        }
    }
    const submitSchools = async () => {
        console.log(selectedSchools)
        if (Object.keys(selectedSchools).length <= 0){
            let msg = "choose at least one school"
            setFormError({seats:null,charge:null,startlocation: null,driver:null,school:msg})
        } else {
            const {dataresponse, error} = await apiClient.removeSchoolstoSchoolvan({sclvanid:selectsclvan})
            selectedSchools.map(async (data)=>{
                console.log(data.value)
                const {dataresponse, error} = await apiClient.addSchoolstoSchoolvan({
                    school:data.value,
                    schoolvanid:selectsclvan,
                })
            })
            refreshPage()
        }
    }
    var selectschools = []
    school.map((data)=>{
          selectschools.push({ value: data.id, label: data.name })
    })
    
    const handleselectschool = (selected) => {
        console.log(SelectedSchools)
        setSelectedSchools(selected)
        console.log(selectedSchools)
    }

    const onClickEditSchools = () => {
        setEditdetails({...Editdetails,school:true})
        selectschooldetails()
    }
    const assignDriver = async (id) => {
        const {dataresponse, error} = await apiClient.assignnewdriver({
            sclvanid:selectsclvan,
            crrdriver:formData.driverid,
            newdriver:id,
        })
        refreshPage()
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
          removeVehicle()
          return;
        }
        console.log("You click No!");
      };

      const removeVehicle = async (e)=>{
        console.log("remove")
        const { dataresponse, error } = await apiClient.removeVehicle({
          id:formData.id,
        })
        navigate(0)
      }
      
    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerSclVans-home d-flex gap-4 p-5">
                <div className="flex-column owner-scl-van-details gap-4">
                <div className="card p-4 owner-vehicle-info d-flex flex-column gap-4">
                        <h4>Vehicle Information</h4>
                        <div className="d-flex justify-content-between owner-Select-vehical-btns">
                            <div class="col-5 d-flex flex-row align-items-center owner-select-scl-van-container">
                                <label for="inputSchoolvan" class="form-label m-0 me-2 owner-select-scl-van">School Van: </label>
                                <select id="inputSchoolvan" class="form-select" placeholder="Choose.."  onChange={(e) => handleselected(e.target.value)} >
                                {schoolvans.map((data)=>{
                                    console.log(selectsclvan)
                                    return <option value={data.id}>{data.vehicleno}</option>
                                })}
                                </select>
                            </div>
                            <button type="button" class="btn btn-primary owner-add-new-vehicle-btn"data-bs-toggle="modal" data-bs-target="#OwneraddnewvehicleModal">Add new vehicle</button>
                        </div>
                        {schoolvans.map((data)=>{
                            if(selectsclvan===data.id){
                                console.log(formData)
                         return (<div className="d-flex  align-items-center ownervehicleinfo">
                        <div className="owner-vehicle-image">
                        <img src={data.frontimage} alt="" class="rounded-circle"/>
                        </div>
                        <div className="p-3">
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3"><h6 class="mb-0">Vehicle No</h6></div>
                                <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                                    <p1>{data.vehicleno}</p1>
                                </div>
                            </div>
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3"><h6 class="mb-0">Vehicle type</h6></div>
                                <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                                    <p1>{data.vehicletype}</p1>
                                </div>
                            </div>
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3"><h6 class="mb-0">number of seats</h6></div>
                                {Editdetails.seats ? (
                                <div className="col-sm-6  d-flex flex-column gap-2">
                                    <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                                        <input type="text" class="form-control border-0 p-0" id="inputID" name="seats" value={formData.seats} onChange={(e) => setFormData({ ...formData, seats: e.target.value})}/>
                                        <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                                        <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("seats",data.seats)}>Cancel</button>
                                    </div>
                                    <div className="errors">{formError.seats}</div>
                                </div>
                                ):(
                                <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                                    <p1>{data.seats}</p1>
                                    <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,seats:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>    
                                </div>
                                )}
                            </div>
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3"><h6 class="mb-0">Driver</h6></div>
                                {Editdetails.driver ? (
                                <div className="col-sm-6  d-flex flex-column gap-2">
                                    <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                                        <div class="input-group mb-3">
                                            <Select
                                                options={options}
                                                name="drivers"
                                                placeholder="assign a driver"
                                                value={options.value}
                                                onChange={handleselect}
                                                defaultValue={{ label: data.fullname, value: data.driverid }}
                                            />
                                        </div>
                                        <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                                        <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("driver",data.driver)}>Cancel</button>
                                    </div>
                                    <div className="errors">{formError.driver}</div>
                                </div>
                                ):(
                                <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                                    <p1>{data.fullname}</p1>
                                    <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,driver:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>    
                                </div>
                                )}
                            </div>
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3"><h6 class="mb-0">Start Location</h6></div>
                                {Editdetails.startlocation ? (
                                <div className="col-sm-6  d-flex flex-column gap-2">
                                    <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                                        <input type="text" class="form-control border-0 p-0" id="inputID" name="startlocation" value={formData.startlocation} onChange={(e) => setFormData({ ...formData, startlocation: e.target.value})}/>
                                        <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                                        <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("startlocation",data.startlocation)}>Cancel</button>
                                    </div>
                                    <div className="errors">{formError.startlocation}</div>
                                </div>
                                ):(
                                <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                                    <p1>{data.startlocation}</p1>
                                    <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,startlocation:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>    
                                </div>
                                )}
                            </div>
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3"><h6 class="mb-0">Charge per km</h6></div>
                                {Editdetails.charge ? (
                                <div className="col-sm-6  d-flex flex-column gap-2">
                                    <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                                        <input type="text" class="form-control border-0 p-0" id="inputID" name="charge" value={formData.charge} onChange={(e) => setFormData({ ...formData, charge: e.target.value})}/>
                                        <button type="submit" className="savebutton" value="Submit" onClick={submitDetails}>Save</button>
                                        <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("charge",data.charge)}>Cancel</button>
                                    </div>
                                    <div className="errors">{formError.charge}</div>
                                </div>
                                ):(
                                <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                                    <p1>{data.charge}</p1>
                                    <button type="Button" className="editbutton" onClick={()=>setEditdetails({...Editdetails,charge:true})}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>    
                                </div>
                                )}
                            </div>
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3"><h6 class="mb-0">Schools</h6></div>
                                    {Editdetails.school ? (
                                    <div className="col-sm-8  d-flex flex-column gap-2">
                                        <div class="text-secondary">
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
                                                    defaultValue={selectedSchools}
                                                />
                                            </div>
                                            <div className="d-flex gap-4">
                                                <button type="submit" className="savebutton" value="Submit" onClick={submitSchools}>Save</button>
                                                <button type="submit" className="cancelbutton" value="Submit" onClick={()=>CancelEdit("school")}>Cancel</button>
                                            </div>
                                        </div>
                                        <div className="errors">{formError.school}</div>
                                    </div>
                                    ):(
                                    <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                                        <div class="d-flex flex-column">
                                            {schoolsSchoolvan.map((data)=>{
                                                if(data.sclvanid===selectsclvan){
                                                    const listItems = school.map((scl)=>{
                                                        if(data.sclid===scl.id){
                                                            return <ListItem key={scl.toString()} value={scl.name}/>
                                                        }
                                                    });
                                                    return (
                                                        <ul>
                                                          {listItems}
                                                        </ul>
                                                      );
                                                }
                                            })}
                                        </div>
                                        <button type="Button" className="editbutton" onClick={onClickEditSchools}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                                    </div>
                                    )}
                            </div>
                            <hr/>
                        </div>
                        </div>
                         ) }
                        })}
                        <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                        {/* <button type="Button" class="btn btn-primary" onClick={() => setEditdetails(true)}>
                        <i class="fas fa-pen me-2"></i>Edit Details</button> */}
                        <button type="Button" class="btn btn-primary" onClick={onClick}>Remove Vehicle</button>
                        <button type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#OwnerassignnewdriverModal">Assign new driver</button>
                        </div>
                    </div>
                </div>
                <div className="card p-4 flex-column gap-3 owner-scl-van-driver-details">
                    <h4>Drivers</h4>
                    <button type="button" class="btn btn-primary owner-add-new-vehicle-btn"data-bs-toggle="modal" data-bs-target="#OwneraddnewdriverModal">Add new driver</button>
                    <div>
                    <ul class="list-group gap-2 p-3">
                    {drivers.map((data)=>{
                        console.log(data.id)
                        return  <Link to='/OwnerDriverProfile' state={data.id} className="text-decoration-none">
                            <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                {/* <img src={require('../../assests/luca-avatar.png')} alt="" class="rounded-circle"/> */}
                                <img src={data.image} alt="" class="rounded-circle"/>
                                <ul className="d-flex flex-column">
                                    <p>{data.fullname}</p>
                                    <p>{data.contact}</p>
                                </ul>
                            </li>
                        </Link>
                    })}
                    </ul>
                    </div>
                </div>
            </div>
            <div class="modal fade addnewdrivermodel" id="OwnerassignnewdriverModal" tabindex="-1" aria-labelledby="ModalLabel-new-ad" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Drivers List</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <ul class="list-group gap-2 p-3">
                            {drivers.map((data)=>{
                                count++
                                if(data.avail === 1){
                                    return  <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                <img src={data.image} alt="" class="rounded-circle"/>
                                <ul className="d-flex flex-row align-items-end">
                                    <p>{data.fullname}</p>
                                    <button type="input" class="btn btn-primary owner-add-new-vehicle-btn" value="Submit" onClick={()=>assignDriver(data.id)}>Assign</button>
                                </ul>
                                </li>
                                } else {
                                    countelse++
                                    if(count===Object.keys(drivers).length && count===countelse){
                                        return  <p>No drivers available</p>
                                    }
                                }
                            })}
                        </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade addnewdrivermodel" id="OwneraddnewvehicleModal" tabindex="-1" aria-labelledby="ModalLabel-new-ad" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                        <div class="modal-body">
                            <OwnerAddNewVehicle/>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade addnewdrivermodel" id="OwneraddnewdriverModal" tabindex="-1" aria-labelledby="ModalLabel-new-ad" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                        <div class="modal-body">
                            <OwnerAddNewDriver/>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default OwnerSchoolVans;
