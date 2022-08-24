import React from "react";
import './OwnerSchoolVans.css';
import '../Home.css';
import { Link } from "react-router-dom";

function OwnerAddNewVehicle() {
    return(
        <>
            <div className="d-flex flex-column gap-4 align-items-center">
                <form>
                <div className="card p-4 gap-4 d-flex flex-column align-items-center">
                    {/* <h3>Add New Vehicle</h3> */}
                    <div className="gap-4 owner-scl-van-details-form">
                        <div className="owner-vehicle-info d-flex flex-column pt-4 align-items-center">
                            <h4>Vehicle Information</h4>
                            <div className="p-3">
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Vehicle No</h6></div>
                                    <div class="col-sm-8 text-secondary"><input type="text" class="form-control"/></div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Vehicle Name</h6></div>
                                    <div class="col-sm-8 text-secondary"><input type="text" class="form-control"/></div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Vehicle type</h6></div>
                                    <div class="col-sm-8 text-secondary d-flex flex-row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio"/>
                                            <label class="form-check-label" for="inlineRadio1">Van</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio"/>
                                            <label class="form-check-label" for="inlineRadio2">Bus</label>
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
                                        <p className="mb-0">Vehicle images(front and back with number plate)</p>
                                        <input class="form-control" type="file" id="formFile" multiple required/>
                                        <p className="mb-0 mt-2">Vehicle license card (both sides)</p>
                                        <input class="form-control" type="file" id="formFile" multiple required/>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Driver</h6></div>
                                    <div class="col-sm-8 text-secondary">
                                    <div class="input-group mb-3">
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Choose...</option>
                                            <option value="1">Roshan Senevirathne</option>
                                            <option value="2">Damith Wickramasinghe</option>
                                            <option value="3">faali senevirathne</option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Start location</h6></div>
                                    {/* <div class="col-sm-8 text-secondary"><input type="text" class="form-control"/></div> */}
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Number of seats</h6></div>
                                    <div class="col-sm-8 text-secondary"><input type="text" class="form-control"/></div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Charge per km</h6></div>
                                    <div class="col-sm-8 text-secondary"><input type="text" class="form-control"/></div>
                                </div>
                                <hr/>
                                <div class="row align-items-center">
                                    <div class="col-sm-3"><h6 class="mb-0">Schools</h6></div>
                                    <div class="col-sm-8 text-secondary">
                                    <div class="input-group mb-3">
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Choose...</option>
                                            <option value="1">D.S.Senanayaka College</option>
                                            <option value="2">vishaka vidyalaya</option>
                                            <option value="3">vishaka vidyalaya</option>
                                        </select>
                                    </div>
                                    </div>
                                    {/* <div class="col-sm-8 text-secondary"><input type="text" class="form-control" multiple/></div> */}
                                </div>
                                <hr/>
                            </div>
                        </div>
                        {/* <div className="owner-driver-info d-flex flex-column pt-4 align-items-center">
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
                        </div> */}
                    </div>
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    <button type="submit" class="btn btn-success">Save</button>
                    <Link to='/OwnerSchoolVans' className="btn btn-danger">Cancel</Link>
                </div>
                </div>
                </form>
            </div>
        </>
    )
}
export default OwnerAddNewVehicle;