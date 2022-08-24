import React from "react";
import './OwnerRequests.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";

function OwnerRequests (){
    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerRequests-home d-flex flex-column gap-3 align-items-center">
                <div className="OwnerRequestsList d-flex gap-3">
                    <div className=" card OwnerRequest-list p-3">
                        <h3>Join Requests</h3>
                        <ul class="list-group gap-2 p-3">
                            <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                <p>Sandra Tennyson sent a request to ABC123</p>
                                <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                            </li>
                            <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                <p>Sandra Tennyson sent a request to ACD345</p>
                                <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                            </li>
                            <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                <p>Sandra Tennyson sent a request BN567</p>
                                <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                            </li>
                            <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                <p>Sandra Tennyson sent a request ABC123</p>
                                <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                            </li>
                        </ul>
                    </div>
                    <div className="OwnerRequest-Details d-flex flex-column p-4">
                        <div class="modal fade" id="OwnerRequestModal" tabindex="-1" aria-labelledby="ModalLabel-new-ad" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div className="OwnerRequest-Details-container d-flex flex-column p-3">
                                            <div class="d-flex flex-row justify-content-evenly">
                                                <div class="col-sm-5">
                                                    <h6 class="mb-0">Parent Name</h6>
                                                </div>
                                                <div class="col-sm-5 text-secondary">
                                                    Sandra Tennyson
                                                </div>
                                            </div>
                                            <hr/>
                                            <div class="d-flex flex-row justify-content-evenly">
                                                <div class="col-sm-5">
                                                    <h6 class="mb-0">Child Name</h6>
                                                </div>
                                                <div class="col-sm-5 text-secondary">
                                                    Benjamin Tennyson
                                                </div>
                                            </div>
                                            <hr/>
                                            <div class="d-flex flex-row justify-content-evenly">
                                                <div class="col-sm-5">
                                                    <h6 class="mb-0">Contact Number</h6>
                                                </div>
                                                <div class="col-sm-5 text-secondary">
                                                    0711223345
                                                </div>
                                            </div>
                                            <hr/>
                                            <div class="d-flex flex-row justify-content-evenly">
                                                <div class="col-sm-5">
                                                    <h6 class="mb-0">Vehicle</h6>
                                                </div>
                                                <div class="col-sm-5 text-secondary">
                                                    ABC1234
                                                </div>
                                            </div>
                                            <hr/>
                                            <div class="d-flex flex-row justify-content-evenly">
                                                <div class="col-sm-5">
                                                    <h6 class="mb-0">School</h6>
                                                </div>
                                                <div class="col-sm-5 text-secondary">
                                                    earhgouebrgupey
                                                </div>
                                            </div>
                                            <hr/>
                                            <div class="d-flex flex-row justify-content-evenly">
                                                <div class="col-sm-5">
                                                    <h6 class="mb-0">Pick up location</h6>
                                                </div>
                                                <div class="col-sm-5 text-secondary">
                                                    <div className="OwnerRequest-map">..location</div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div class="d-flex flex-row justify-content-evenly p-1 gap-3">
                                                <button class="d-flex justify-content-center align-items-center gap-2 btn btn-success"><i class="fas fa-check"></i>Accept</button>
                                                <button class="d-flex justify-content-center align-items-center gap-2 btn btn-danger"><i class="fas fa-times-circle"></i>Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card d-flex gap-3 p-4">
                        <h3>Leaving Notifications</h3>
                            <ul class="list-group gap-2 p-3">
                                <li class="list-group-item d-flex flex-row justify-content-between align-items-center">
                                    <p>Sandra Tennyson notified leaving the ABC123 form August</p>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Action taken
                                        </label>
                                    </div>
                                </li>
                                <li class="list-group-item d-flex flex-row gap-4 justify-content-between align-items-center">
                                    <p>Sandra Tennyson notified leaving the ACD345 form August</p>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Action taken
                                        </label>
                                    </div>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerRequests;