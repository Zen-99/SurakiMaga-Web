import React from "react";
import './OwnerAdvertiestments.css';

const vehicleImage = require('../../assests/schoolbus.png');

function OwnerAdDetails({closeAdDetailsCard}){
    
    return(
        <>
        <div className="card p-3 advertiestment-details-card">
                        <div class="d-flex justify-content-between align-items-center ">
                            <div class="mt-2">
                                <h4 >School Service to D.S and Vishaka</h4>
                                <div class="mt-5">
                                    <p class="text-uppercase mb-0">school van</p>
                                    <p class=" mt-0" style={{color:"red"}}>10 more seats available</p>
                                    <p class=" mt-0">monthly charge :<p>Rs.6000</p></p>
                                    <div class="d-flex flex-row user-ratings">
                                        <div class=" d-flex flex-row ratings">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        </div>
                                        <h6 class="text-muted me-5">4/5</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="image">
                                <img src={vehicleImage} width="200" alt=""/>
                            </div>
                        </div>
                        <div class="d-flex flex-column">
                            <li class="fs-10 me-3">D.S Senamayake College</li>
                            <li class="fs-10 me-3">Vishaka Vidyalaya</li>
                            <li class="fs-10 me-3">Vishaka Vidyalaya</li>
                        </div>
                        <p>Hybrid van with air conditioning</p>
                        <button class="d-flex justify-content-center align-items-center gap-2 btn btn-success"><i class="fas fa-share"></i>Share</button>
                    </div>
        </>
    );
}
export default OwnerAdDetails;