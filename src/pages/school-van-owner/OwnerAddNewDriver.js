import React from "react";
import './OwnerSchoolVans.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import { Link } from "react-router-dom";

function OwnerAddNewDriver (){
    return(
        <>
            <div className="d-flex flex-column gap-4 align-items-center">
                <form>
                <div className="card p-4 gap-4 d-flex flex-column align-items-center">
                    <h3>Add New Driver</h3>
                    <div className="gap-4 owner-scl-van-details-form">
                        <div className="owner-driver-info d-flex flex-column pt-4 align-items-center">
                            <h4>Driver Information</h4>
                            <div className="p-3">
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Name</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                    <input type="text" class="form-control"/>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">License No</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                    <input type="text" class="form-control"/>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Mobile No</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                    <input type="text" class="form-control"/>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Add image</h6>
                                    </div>
                                    <div class="col-sm-8 text-secondary">
                                        <input class="form-control" type="file" id="formFile" required/>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <Link to='/OwnerSchoolVans' className="btn btn-primary">Cancel</Link>
                </div>
                </div>
                </form>
            </div>
        </>
    )
}

export default OwnerAddNewDriver;