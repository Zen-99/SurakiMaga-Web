import React, { useState} from "react";
import './OwnerProfile.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import { Link } from "react-router-dom";

function OwnerDriverProfile (){

    const [Editdetails, setEditdetails] = useState(false);

    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerProfile-home">
                <div className="card p-3 m-2 flex-row OwnerProfilecontainer">
                    <div className={Editdetails ? "OwnerProfile-container-hide":"OwnerProfile-container  d-flex flex-column align-items-center"}>
                    <div className="OwnerProfile-photo p-3 d-flex flex-column align-items-center text-center">
                        <div className="OwnerProfile-image">
                        <img src={require('../../assests/luca-avatar.png')} alt="" class="rounded-circle"/>
                        </div>
                        
                        <div class="mt-3">
                            <h4>Damitha Wickramasinghe</h4>
                            <p class="text-secondary mb-1">2019cs161@ucsc.cmb.ac.lk</p>
                            <p class="text-secondary font-size-sm">0711234567</p>
                        </div>
                    </div>
                    <div className="OwnerProfile-details p-3">
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">ID No.</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                      9982011694v
                    </div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                    (239) 816-9029
                    </div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">License number</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                      ABC12345
                    </div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">Years of experience</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                      10
                    </div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                    <button type="Button" class="btn btn-primary" onClick={() => setEditdetails(true)}>
                        <i class="fas fa-pen me-2"></i>Edit Profile</button>
                      <Link to='/OwnerSchoolVans' class="btn btn-primary" onClick={() => setEditdetails(true)}>Back</Link>
                    </div>
                  </div>
                </div>
                </div>
                <div className={Editdetails ? "OwnerProfile-edit-container d-flex flex-column align-items-center" :"OwnerProfile-edit-container-hide"}>
                    <form>
                    <div className="OwnerProfile-photo-edit p-3 d-flex flex-column align-items-center text-center">
                        <div className="OwnerProfile-image">
                        <img src={require('../../assests/avatar7.png')} alt="Admin" class="rounded-circle"/>
                        <button class="add-image-btn p-2  rounded-circle">
                        <i class="fas fa-plus"></i>
                        </button>
                        </div>
                    </div>
                    <div className="OwnerProfile-details-edit p-3">
                    <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">Name</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                    <input type="text" class="form-control border-0 p-0" id="inputName" name="inputName" value="Roshan Senevirathne"/>
                    </div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">ID No.</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                        <input type="text" class="form-control border-0 p-0" id="inputID" name="inputID" value={"9982011694v"}/>
                    </div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                    <input type="text" class="form-control border-0 p-0" id="inputEm" name="inputEm" value={"2019cs161@ucsc.cmb.ac.lk"}/>
                    </div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                    <input type="text" class="form-control border-0 p-0" id="inputMb" name="inputMb" value={"0711234567"}/>
                    </div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                    <input type="text" class="form-control border-0 p-0" id="inputPn" name="inputPn" value={"(239) 816-9029"}/>
                    </div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">License number</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                    <input type="text" class="form-control border-0 p-0" id="inputReg" name="inputReg" value={"ABC12345"}/>
                    </div>
                  </div>
                  <hr/>
                  <div class="OwnerProfile-details-row justify-content-evenly">
                    <div class="col-sm-5">
                      <h6 class="mb-0">Years of experience</h6>
                    </div>
                    <div class="col-sm-5 text-secondary">
                    <input type="text" class="form-control border-0 p-0" id="inputYr" name="inputYr" value={"10"}/>
                    </div>
                  </div>
                  <hr/>
                  <div class="col-12 d-flex flex-row gap-2 flex-nowrap">
                        <button type="submit" value="Submit" class="btn btn-success">Save</button>
                    <button type="Button" class="btn btn-danger" onClick={() => setEditdetails(false)}>Cancel</button>
                  </div>
                </div>
                </form>
                </div>
                </div>
            </div>
        </div>

    )
}

export default OwnerDriverProfile;