import React,{useState,useEffect} from "react";
import './OwnerStudentDetails.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import { Link } from "react-router-dom";

function OwnerStudentDetails (){
    return(
        <div className="home">
             <OwnerNavbar/>
             <div className="OwnerStudentDetails-home d-flex gap-4 p-4">
                <div className="card d-flex flex-column gap-4">
                    
                </div>
             </div>
        </div>
    )
}

export default OwnerStudentDetails