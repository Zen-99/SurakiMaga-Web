import React,{useEffect,useState} from "react";
import './OwnerAdvertisements.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
//import { Link } from "react-router-dom";
import OwnerAdDetails from "./OwnerAdDetails";
import OwnerOwnersAd from "./OwnerOwnersAd";
import OwnerAddNewAd from "./OwnerAddNewAd";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import apiClient from '../../Services/ApiClient'
import { Link,useNavigate } from "react-router-dom";
import { confirm } from "react-confirm-box";


function OwnerAdvertisements() {
    const navigate = useNavigate();
    const [ads,setAds]=useState([])
    const [Ownerads,setOwnerAds]=useState([])
    const[vanid,setvanid]=useState()

    useEffect(() => {
        async function getAllAdDetails(){
            const{dataresponse,error} = await apiClient.getAllAdDetails()
            console.log(dataresponse.result)
            setAds(dataresponse.result)
        }
        getAllAdDetails()
    },[]);

    useEffect(() => {
        async function getOwnersAdDetails(){
            const{dataresponse,error} = await apiClient.getOwnersAdDetails()
            console.log(dataresponse.result)
            setOwnerAds(dataresponse.result)
        }
        getOwnersAdDetails()
    },[]);
    const popupbox = {
        render: (message, onConfirm, onCancel) => {
          return (
            <>
              <p>{message} </p>
              <button className="btn btn-success" onClick={onConfirm}> Yes </button>
              <button className="btn btn-danger" onClick={onCancel}> No </button>
            </>
          );
        }
      };

      const onClick = async (id,popupbox) => {
        const result = await confirm("Confirm to remove", popupbox);
        if (result) {
          removeAd(id)
          return;
        }
        console.log("You click No!");
      };

      const removeAd = async (id)=>{
        console.log(id)
        const { dataresponse, error } = await apiClient.removeAd({
          id:id,
        })
        navigate(0)
      }

return(
    <div className="home">
        <OwnerNavbar/>
            <div className="Advertisements-home gap-3 p-4 pt-5">
                {/* <div className="card d-felx advertistment-search">
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
                    </div> */}
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
                        {ads.map((data)=>{
                            return <div className="Advertisement-card" >
                            <div className="Advertisement-image">
                                <img src={data.frontimage} alt=""/>
                            </div>
                            <div className="Advertisement-details">
                                <h4>{data.title}</h4>
                                <p className="Advertisement-details-lication">{data.startlocation}</p>
                                <p1 className="text-uppercase">{data.vehicletype}</p1>
                                <div className="ad-details">
                                <p2>{data.seats-data.avail} seats more</p2>
                                <button class="btn btn-primary btn-sm read-more-btn" type="button" data-bs-toggle="modal" data-bs-target="#Modal" onClick={()=>setvanid(data.id)}>Read More</button>
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                    <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            {ads.map((data)=>{
                                if(data.id==vanid){
                                    console.log(vanid)
                                    return <OwnerAdDetails data={data}/>
                                }
                            })}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="Modal-new-ad" tabindex="-1" aria-labelledby="ModalLabel-new-ad" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                            <div class="modal-body">
                                <OwnerAddNewAd/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='Owners-Advertisementz-active p-0'>
                        <div className="card p-3 Advertisement-details-card">
                            <div class="d-flex justify-content-between flex-column your-Advertisements-container">
                            <button class="d-flex btn btn-primary justify-content-center align-items-center gap-2" type="button" data-bs-toggle="modal" data-bs-target="#Modal-new-ad" data-bs-dismiss="modal">
                                            <i class="fas fa-plus"></i>Post a new Advertisement</button>
                                <h5>Your Advertisements : </h5>
                                <div className="Advertisements-list-owners">
                                    {Ownerads.map((data)=>{
                                        return <div className="Advertisement-card" >
                                        <div className="Advertisement-image">
                                            <img src={data.frontimage} alt=""/>
                                        </div>
                                        <div className="Advertisement-details">
                                            <div className="d-flex justify-content-end edit-your-ads">
                                                <button class="" onClick={()=>{onClick(data.id)}}><i class="fas fa-times close-btn"></i></button>
                                            </div>
                                            <h4>{data.title}</h4>
                                            <p className="Advertisement-details-lication">{data.startlocation}</p>
                                            <p1 className="text-uppercase">{data.vehicletype}</p1>
                                            <div className="ad-details">
                                                <p2>{data.seats-data.avail} seats more</p2>
                                                <button class="btn btn-primary btn-sm read-more-btn" type="button" data-bs-toggle="modal" data-bs-target="#Modal" onClick={()=>setvanid(data.id)}>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    </div>

)
}

export default OwnerAdvertisements;