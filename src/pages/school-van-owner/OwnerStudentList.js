import React from "react";
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import { useState ,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import apiClient from '../../Services/ApiClient'
import './OwnerStudentList.css'

function OwnerStudentList (){
    const location = useLocation();
    const data = location.state;
    console.log(data)
    const navigate = useNavigate();
    var i = 0
    var j = 0
    const [studentList,setStudentList]=useState([])
    const [banned,setBanned]=useState(false)
    useEffect(() => {
        async function getStudentDetails(){
            const{dataresponse,error} = await apiClient.getStudentDetails({id:data})
            setStudentList(dataresponse.result)
            console.log(dataresponse.result)
            let count = 0
            studentList.map(data=>{
                if(data.sclvan_status == 'banned'){
                    count ++
                }
            })
            if(count > 0){
                setBanned(true)
            }
        }
        getStudentDetails()
      },[])
      function refreshPage() {
        window.location.reload(false);
      }
    const BanAStudent = async (id) => {
        const{dataresponse,error} = await apiClient.BanAStudent({
            id:id
        })
        refreshPage()
    }
    const UnbanAStudent = async (id) => {
        const{dataresponse,error} = await apiClient.UnbanAStudent({
            id:id
        })
        refreshPage()
    }
    const RemoveAStudent = async (id) => {
        const{dataresponse,error} = await apiClient.RemoveAStudent({
            id:id
        })
        refreshPage()
    }
    return (
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerStudents-home d-flex flex-column gap-3  align-items-center">
                <h3>Student List</h3>
                <h5>Vehicle {data}</h5>
                <div className="d-flex flex-row gap-3">
                    <div className="OwnerStudents-col d-flex flex-column gap-3">
                        <div className="OwnerStudents-row card d-flex flex-column p-4 gap-2 align-items-center">
                            <h5>All Students</h5>
                            <hr/>
                            <table class="table">
                            {studentList.map(data=>{
                            if(data.sclvan_status==null){
                                i++
                            return <tbody>
                            <tr>
                                <td><img src={data.image} alt="" class="ownerStudentImg"/></td>
                                <td>{data.fullname}</td>
                                <td>
                                    <button class="" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${i}`} aria-expanded="false" aria-controls="collapseExample1">
                                        <i class='fa fa-caret-down'></i>
                                    </button>
                                </td>
                            </tr>
                            <td colspan="4">
                            <div class="collapse" id={`collapseExample${i}`}>
                                <div class="card card-body">
                                    <p>Parent name : {data.parentName}</p>
                                    <p>Contact number : {data.contact}</p>
                                    <p>Age : {data.extract}</p>
                                    <p>School : {data.school}</p>
                                    <p>Payment : {data.monthly_charge}</p>
                                    <div class="d-flex flex-row justify-content-evenly p-1 gap-3">
                                        <button type="Button" class="d-flex justify-content-center align-items-center gap-2 btn btn-success" onClick={()=>BanAStudent(data.id)}>BAN</button>
                                        <button type="Button" class="d-flex justify-content-center align-items-center gap-2 btn btn-danger" onClick={()=>RemoveAStudent(data.id)}>REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        </td>
                        </tbody>
                        }
                        })}
                        </table>
                        </div>
                    </div>
                    <div className="OwnerStudents-col d-flex flex-column gap-3">
                        <div className="OwnerStudents-row card d-flex flex-column p-4 gap-2 align-items-center">
                            <h5>Banned Students</h5>
                            <hr/>
                            <table class="table">
                            {studentList.map(data=>{
                            if(data.sclvan_status == 'banned') {
                                i++
                                j=1
                            return <tbody>
                            <tr>
                                <td><img src={data.image} alt="" class="ownerStudentImg"/></td>
                                <td>{data.fullname}</td>
                                <td>
                                    <button class="" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${i}`} aria-expanded="false" aria-controls="collapseExample1">
                                        <i class='fa fa-caret-down'></i>
                                    </button>
                                </td>
                            </tr>
                            <td colspan="4">
                            <div class="collapse" id={`collapseExample${i}`}>
                                <div class="card card-body">
                                    <p>Parent name : {data.parentName}</p>
                                    <p>Contact number : {data.contact}</p>
                                    <p>Age : {data.extract}</p>
                                    <p>School : {data.school}</p>
                                    <p>Payment : {data.monthly_charge}</p>
                                    <div class="d-flex flex-row justify-content-evenly p-1 gap-3">
                                        <button type="Button" class="d-flex justify-content-center align-items-center gap-2 btn btn-success" onClick={()=>UnbanAStudent(data.id)}>UNBAN</button>
                                        <button type="Button" class="d-flex justify-content-center align-items-center gap-2 btn btn-danger" onClick={()=>RemoveAStudent(data.id)}>REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        </td>
                        </tbody>
                            }
                            if(!banned && j==0){
                                j=1
                                return <p>No student banned</p>
                            }
                        })}
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OwnerStudentList