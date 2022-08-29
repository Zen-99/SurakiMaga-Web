import React from "react";
import './OwnerAdvertisements.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
//import { Link } from "react-router-dom";
import OwnerAdDetails from "./OwnerAdDetails";
import OwnerOwnersAd from "./OwnerOwnersAd";
import OwnerAddNewAd from "./OwnerAddNewAd";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const vehicleImage = require('../../assests/schoolbus.png');

function OwnerAdvertisements() {

    // const [clickNewPost, setClickNwePost] = useState(false);
    // const handleClickNewPost = () => setClickNwePost(true);
    // const closeNewPostCard = () => setClickNwePost(false);


return(
    <div className="home">
        <OwnerNavbar/>
            <div className="Advertisements-home gap-3 p-4 pt-5">
                {/* <div className="Advertisements-search">
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
                </div> */}
                <div className="card d-felx advertistment-search">
                    <div className="OwnerlistSearch p-3">
            <h1 className="lsTitle text-center">Search</h1>
            <div className="lsItem">
            <Form.Group>
            <Form.Label>Search</Form.Label>
        <Form.Control 
          type="text" 
          name="username" 
          placeholder="Search"/>  
      </Form.Group>
            </div>
            <div className="lsItem">
              <Form.Group>
                <Form.Label> Select the Pickup Location</Form.Label>
              
            <Form.Select aria-label="Default select example">
              <option>Select Location</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            </Form.Group>
            </div>
            <div className="lsItem">
              <Form.Group>
                <Form.Label>Category</Form.Label>
                  <Form.Check
                  inline
                  label="Bus"
                  name="group1"
                />
                 <Form.Check
                  inline
                  label="Van"
                  name="Van"
                />
                 <Form.Check
                  inline
                  label="Air Conditioned"
                  name="Air Conditioned"
                />
                 <Form.Check
                  inline
                  label="FM Radio"
                  name="FM Radio"
                />
          </Form.Group>
            </div>
            <Button className="mt-2">Search</Button>
          </div>
                    </div>
                <div className="Advertisements-new">
                <ul class="nav nav-tabs d-flex flex-row flex-nowrap" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="Ad-tab" data-bs-toggle="tab" data-bs-target="#Ad" type="button" role="tab" aria-controls="Ad" aria-selected="true">Advertisements</button>
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
                <div className="advertistment-container gap-2">
                    <div className="card p-3 Advertisements-list">
                    <div className="Advertisement-card" >
                            <div className="Advertisement-image">
                                <img src={vehicleImage} alt=""/>
                            </div>
                            <div className="Advertisement-details">
                                <h4>School Service to D.S and Vishaka</h4>
                                <p className="Advertisement-details-lication">Pliyandala</p>
                                <p1>School van</p1>
                                <div className="ad-details">
                                <p2>10 Seats more</p2>
                                <button class="btn btn-primary btn-sm read-more-btn" type="button" data-bs-toggle="modal" data-bs-target="#Modal">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="Advertisement-card" >
                            <div className="Advertisement-image">
                                <img src={vehicleImage} alt=""/>
                            </div>
                            <div className="Advertisement-details">
                                <h4>School Service to D.S and Vishaka</h4>
                                <p className="Advertisement-details-lication">Pliyandala</p>
                                <p1>School van</p1>
                                <div className="ad-details">
                                <p2>10 Seats more</p2>
                                <button class="btn btn-primary btn-sm read-more-btn" type="button" data-bs-toggle="modal" data-bs-target="#Modal">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="Advertisement-card" >
                            <div className="Advertisement-image">
                                <img src={vehicleImage} alt=""/>
                            </div>
                            <div className="Advertisement-details">
                                <h4>School Service to D.S and Vishaka</h4>
                                <p className="Advertisement-details-lication">Pliyandala</p>
                                <p1>School van</p1>
                                <div className="ad-details">
                                <p2>10 Seats more</p2>
                                <button class="btn btn-primary btn-sm read-more-btn" type="button" data-bs-toggle="modal" data-bs-target="#Modal">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="Advertisement-card" >
                            <div className="Advertisement-image">
                                <img src={vehicleImage} alt=""/>
                            </div>
                            <div className="Advertisement-details">
                                <h4>School Service to D.S and Vishaka</h4>
                                <p className="Advertisement-details-lication">Pliyandala</p>
                                <p1>School van</p1>
                                <div className="ad-details">
                                <p2>10 Seats more</p2>
                                <button class="btn btn-primary btn-sm read-more-btn" type="button" data-bs-toggle="modal" data-bs-target="#Modal">Read More</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
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
                        <div class="modal-dialog modal-dialog-centered">
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
                    <div className='Owners-Advertisementz-active p-0'>
                        <OwnerOwnersAd/>
                    </div>
                </div>
            </div>
            
    </div>

)
}

export default OwnerAdvertisements;