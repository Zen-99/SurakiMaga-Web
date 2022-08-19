import React,{useState} from "react";
import './OwnerSchoolVans.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import { Link } from "react-router-dom";
import OwnerAddNewDriver from "./OwnerAddNewDriver";
import OwnerAddNewVehicle from './OwnerAddNewVehicle';

function OwnerSchoolVans (){
    const [Editdetails, setEditdetails] = useState(false);
    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerSclVans-home d-flex flex-row gap-4 p-4 pt-5">
                <div className="flex-column owner-scl-van-details gap-4">
                <div className="card p-4 owner-vehicle-info d-flex flex-column gap-4">
                        <h4>Vehicle Information</h4>
                        <div className="d-flex justify-content-between owner-Select-vehical-btns">
                            <div class="col-5 d-flex flex-row align-items-center owner-select-scl-van-container">
                                <label for="inputSchoolvan" class="form-label m-0 me-2 owner-select-scl-van">School Van: </label>
                                <select id="inputSchoolvan" class="form-select" placeholder="Choose.." required>
                                <option>School van 1</option>
                                <option>School bus 1</option>
                                <option>School van 2</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-primary owner-add-new-vehicle-btn"data-bs-toggle="modal" data-bs-target="#OwneraddnewvehicleModal">Add new vehicle</button>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                        <div className="owner-vehicle-image">
                        <img src={require('../../assests/school-bus.jpg')} alt="" class="rounded-circle"/>
                        </div>
                        <div className="p-3">
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Vehicle No</h6>
                                </div>
                                <div class="col-sm-5 text-secondary">
                                    wp PA 1645
                                </div>
                            </div>
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Vehicle type</h6>
                                </div>
                                <div class="col-sm-5 text-secondary">
                                    Van
                                </div>
                            </div>
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">number of seats</h6>
                                </div>
                                <div class="col-sm-5 text-secondary">
                                    40
                                </div>
                            </div>
                            <hr/>
                            <div class="row justify-content-evenly">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Driver</h6>
                                </div>
                                <div class="col-sm-5 text-secondary">
                                    Damitha Wickramasinghe
                                </div>
                            </div>
                            <hr/>
                        </div>
                        </div>
                        <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                        <button type="Button" class="btn btn-primary" onClick={() => setEditdetails(true)}>
                        <i class="fas fa-pen me-2"></i>Edit Details</button>
                        <button type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#OwnerassignnewdriverModal">Assign new driver</button>
                        </div>
                    </div>
                </div>
                <div className="card p-4 flex-column gap-3 owner-scl-van-driver-details">
                    <h4>Drivers</h4>
                    <button type="button" class="btn btn-primary owner-add-new-vehicle-btn"data-bs-toggle="modal" data-bs-target="#OwneraddnewdriverModal">Add new driver</button>
                    <div>
                    <ul class="list-group gap-2 p-3">
                    <Link to='/Owner_DriverProfile' className="text-decoration-none">
                        <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                            <img src={require('../../assests/luca-avatar.png')} alt="" class="rounded-circle"/>
                            <ul className="d-flex flex-column">
                                <p>Damitha Wickramasinghe</p>
                                <p>0711213123</p>
                            </ul>
                        </li>
                    </Link>
                    <Link to='/Owner_DriverProfile' className="text-decoration-none">
                        <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                            <img src={require('../../assests/luca-avatar.png')} alt="" class="rounded-circle"/>
                            <ul className="d-flex flex-column">
                                <p>Damitha Wickramasinghe</p>
                                <p>0711213123</p>
                            </ul>
                        </li>
                    </Link>
                    <Link to='/Owner_DriverProfile' className="text-decoration-none">
                        <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                            <img src={require('../../assests/luca-avatar.png')} alt="" class="rounded-circle"/>
                            <ul className="d-flex flex-column">
                                <p>Damitha Wickramasinghe</p>
                                <p>0711213123</p>
                            </ul>
                        </li>
                    </Link>
                    <Link to='/Owner_DriverProfile' className="text-decoration-none">
                        <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                            <img src={require('../../assests/luca-avatar.png')} alt="" class="rounded-circle"/>
                            <ul className="d-flex flex-column">
                                <p>Damitha Wickramasinghe</p>
                                <p>0711213123</p>
                            </ul>
                        </li>
                    </Link>
                    </ul>
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
                            <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                <img src={require('../../assests/luca-avatar.png')} alt="" class="rounded-circle"/>
                                <ul className="d-flex flex-row align-items-end">
                                    <p>Damitha Wickramasinghe</p>
                                    <button type="input" class="btn btn-primary owner-add-new-vehicle-btn">Assign</button>
                                </ul>
                            </li>
                            <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                <img src={require('../../assests/luca-avatar.png')} alt="" class="rounded-circle"/>
                                <ul className="d-flex flex-row align-items-end">
                                    <p>Damitha Wickramasinghe</p>
                                    <button type="input" class="btn btn-primary owner-add-new-vehicle-btn">Assign</button>
                                </ul>
                            </li>
                            <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                <img src={require('../../assests/luca-avatar.png')} alt="" class="rounded-circle"/>
                                <ul className="d-flex flex-row align-items-end">
                                    <p>Damitha Wickramasinghe</p>
                                    <button type="input" class="btn btn-primary owner-add-new-vehicle-btn">Assign</button>
                                </ul>
                            </li>
                            <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                <img src={require('../../assests/luca-avatar.png')} alt="" class="rounded-circle"/>
                                <ul className="d-flex flex-row align-items-end">
                                    <p>Damitha Wickramasinghe</p>
                                    <button type="input" class="btn btn-primary owner-add-new-vehicle-btn">Assign</button>
                                </ul>
                            </li>
                        </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade addnewdrivermodel" id="OwneraddnewvehicleModal" tabindex="-1" aria-labelledby="ModalLabel-new-ad" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <OwnerAddNewVehicle/>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade addnewdrivermodel" id="OwneraddnewdriverModal" tabindex="-1" aria-labelledby="ModalLabel-new-ad" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <OwnerAddNewDriver/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OwnerSchoolVans;
