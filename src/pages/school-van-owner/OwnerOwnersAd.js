import React from "react";
import './OwnerAdvertiestments.css';

const vehicleImage = require('../../assests/schoolbus.png');

function OwnerOwnersAd (){
    return(
        <>
        <div className="card p-3 advertiestment-details-card">
            <div class="d-flex justify-content-between flex-column your-advertiestments-container">
            <button class="d-flex btn btn-primary justify-content-center align-items-center gap-2" type="button" data-bs-toggle="modal" data-bs-target="#Modal-new-ad" data-bs-dismiss="modal">
                            <i class="fas fa-plus"></i>Post a new advertiestment</button>
                <h5>Your Advertiestments : </h5>
                <div className="advertiestments-list-owners">
                    <div className="advertiestment-card" >
                        <div className="advertiestment-image">
                            <img src={vehicleImage} alt=""/>
                        </div>
                        <div className="advertiestment-details">
                            <div className="d-flex justify-content-end edit-your-ads">
                                <button class="">Edit</button><button class=""><i class="fas fa-times close-btn"></i></button>
                            </div>
                            <h4>School Service to D.S and Vishaka</h4>
                            <p className="advertiestment-details-lication">Pliyandala</p>
                            <p1>School van</p1>
                            <div className="ad-details">
                                <p2>10 Seats more</p2>
                                <button class="btn btn-primary btn-sm read-more-btn" type="button" data-bs-toggle="modal" data-bs-target="#Modal">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="advertiestment-card" >
                        <div className="advertiestment-image">
                            <img src={vehicleImage} alt=""/>
                        </div>
                        <div className="advertiestment-details">
                            <div className="d-flex justify-content-end edit-your-ads">
                                <button class="">Edit</button><button class=""><i class="fas fa-times close-btn"></i></button>
                            </div>
                            <h4>School Service to D.S and Vishaka</h4>
                            <p className="advertiestment-details-lication">Pliyandala</p>
                            <p1>School van</p1>
                            <div className="ad-details">
                                <p2>10 Seats more</p2>
                                <button class="btn btn-primary btn-sm read-more-btn" type="button" data-bs-toggle="modal" data-bs-target="#Modal">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default OwnerOwnersAd;