import React from "react";
import './OwnerAdvertiestments.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
//import { Link } from "react-router-dom";
import OwnerAdDetails from "./OwnerAdDetails";
import OwnerOwnersAd from "./OwnerOwnersAd";
import OwnerAddNewAd from "./OwnerAddNewAd";

const vehicleImage = require('../../assests/schoolbus.png');

function OwnerAdvertiestments() {

    // const [clickNewPost, setClickNwePost] = useState(false);
    // const handleClickNewPost = () => setClickNwePost(true);
    // const closeNewPostCard = () => setClickNwePost(false);


return(
    <div className="home">
        <OwnerNavbar/>
            <div className="advertiestments-home">
                <div className="advertiestments-search">
                    <div class="input-group ">
                        <input type="text" class="form-control" placeholder="Search by School.."/>
                        <div class="input-group-append"><button class="btn btn-search"><i class="fas fa-search"></i></button></div>
                    </div>
                    <div>
                    <button type="button" class="btn btn-outline-success d-flex flex-row justify-content-center">
                        <i class="fas fa-map-marker-alt"></i><div className="location-btn-text">Location</div>
                    </button>
                    </div>
                    <div className="select-vehical-type">
                        <label class="check">
				            <input type="checkbox" />
				        <span><i class="fas fa-bus-alt"></i><div className="vehival-type-chexkbox-text">Bus</div></span>
				        </label>
                        <label class="check">
				            <input type="checkbox" />
				        <span><i class="fas fa-shuttle-van"></i><div className="vehival-type-chexkbox-text">Van</div></span>
				        </label>
                        <label class="check">
				            <input type="checkbox" />
                            <span><i class="fas fa-shuttle-van"></i><div className="vehival-type-chexkbox-text">Tuk</div></span>
				        </label>
                    </div>
                </div>
                <div className="advertiestments-new">
                <ul class="nav nav-tabs d-flex flex-row flex-nowrap" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="Ad-tab" data-bs-toggle="tab" data-bs-target="#Ad" type="button" role="tab" aria-controls="Ad" aria-selected="true">Advertiestments</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="Owner-Ad-tab" data-bs-toggle="tab" data-bs-target="#Owner-Ad" type="button" role="tab" aria-controls="Owner-Ad" aria-selected="false">Your Ads</button>
                    </li>
                </ul>
                    <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="Ad" role="tabpanel" aria-labelledby="Ad-tab"></div>
                    <div class="tab-pane fade" id="Owner-Ad" role="tabpanel" aria-labelledby="Owner-Ad-tab"><OwnerOwnersAd/></div>
                    </div>
                </div>
                <div className="advertistment-container">
                    <div className="card p-3 advertiestments-list">
                    <div className="advertiestment-card" >
                            <div className="advertiestment-image">
                                <img src={vehicleImage} alt=""/>
                            </div>
                            <div className="advertiestment-details">
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
                    <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <OwnerAdDetails/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="Modal-new-ad" tabindex="-1" aria-labelledby="ModalLabel-new-ad" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <OwnerAddNewAd/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='Owners-advertiestmentz-active pt-0'>
                        <OwnerOwnersAd/>
                    </div>
                </div>
            </div>
            
    </div>

)
}

export default OwnerAdvertiestments;