import React, { useState} from "react";
import './OwnerAdvertiestments.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
//import { Link } from "react-router-dom";

const vehicleImage = require('../../assests/schoolbus.png')

function OwnerAdvertiestments() {

    const [clickSeeMore, setClickSeeMore] = useState(false);
    const handleClickSeeMore = () => setClickSeeMore(true);
    const closeAdDetailsCard = () => setClickSeeMore(false);

    const [clickNewPost, setClickNwePost] = useState(false);
    const handleClickNewPost = () => setClickNwePost(true);
    const closeNewPostCard = () => setClickNwePost(false);





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
                    <button type="button" class="btn btn-outline-success"><i class="fas fa-map-marker-alt"></i><div className="location-btn-text">Location</div></button>
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
                <div className="d-flex gap-4 flex-row advertiestments-new">
                <button class="d-flex btn btn-primary justify-content-center align-items-center gap-2" onClick={handleClickNewPost}>
                    <i class="fas fa-plus"></i>New ad</button>
                {/* <button class="d-flex btn btn-primary justify-content-center align-items-center gap-2" 
                onClick={SwapDivsWithClick('advertiestments-list','advertiestments-list-owners')}>
                    your Ads
                </button> */}
                </div>
                <div className="advertistment-container">
                    <div className="advertiestments-list">
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
                                <button href="/" class="btn btn-primary btn-sm read-more-btn" onClick={handleClickSeeMore}>Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="advertiestment-card">
                            <div className="advertiestment-image">
                                <img src={vehicleImage} alt=""/>
                            </div>
                            <div className="advertiestment-details">
                                <h4>School Service to D.S and Vishaka</h4>
                                <p className="advertiestment-details-lication">Pliyandala</p>
                                <p1>School van</p1>
                                <div className="ad-details">
                                <p2>10 Seats more</p2>
                                <button class="btn btn-primary btn-sm read-more-btn" onClick={handleClickSeeMore}>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={clickSeeMore ? 'advertiestment-details-expand-active':'advertiestment-details-expand-hide'}>
                    <div className="card p-3 advertiestment-details-card">
                    <span class="d-flex justify-content-end" onClick={closeAdDetailsCard}><i class="fas fa-times close-btn"></i></span>
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
                    </div>
                    <div className={clickSeeMore ? 'Owners-advertiestmentz-hide': 'Owners-advertiestmentz-active'}>
                    <div className="card p-3 advertiestment-details-card">
                        <div class="d-flex justify-content-between flex-column your-advertiestments-container">
                        <button class="d-flex btn btn-primary justify-content-center align-items-center gap-2" onClick={handleClickNewPost}>
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
                                <button href="/" class="btn btn-primary btn-sm read-more-btn" onClick={handleClickSeeMore}>Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="advertiestment-card">
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
                                <button class="btn btn-primary btn-sm read-more-btn" onClick={handleClickSeeMore}>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className={clickNewPost ? 'advertiestment-new-expand-active':'advertiestment-new-expand-hide'}>
                <div className="card p-3 advertiestment-new-card">
                <span class="d-flex justify-content-end" onClick={closeNewPostCard}><i class="fas fa-times close-btn"></i></span>
                    <div class="d-flex justify-content-between align-items-center ">
                    <select class="form-select" aria-label="Default select example">
                        <option selected disabled>select school van</option>
                        <option value="1">school van 1</option>
                        <option value="2">school bus</option>
                        <option value="3">school van 2</option>
                    </select>

                    </div>
                </div>
            </div>
    </div>

)
}
function SwapDivsWithClick(div1,div2)
{
   const d1 = document.getElementById(div1);
   const d2 = document.getElementById(div2);
//    if( d2.style.display === "none" )
//    {
//       d1.style.display = "none";
//    }
//    else
//    {
//       d2.style.display = "none";
//    }
}
export default OwnerAdvertiestments;