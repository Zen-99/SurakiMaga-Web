import React,{useEffect,useState}  from "react";
import './OwnerAdvertisements.css';
import apiClient from '../../Services/ApiClient'

const vehicleImage = require('../../assests/schoolbus.png');

function OwnerOwnersAd (){
    const [ads,setAds]=useState([])
    const[vanid,setvanid]=useState()

    useEffect(() => {
        async function getOwnersAdDetails(){
            const{dataresponse,error} = await apiClient.getOwnersAdDetails()
            console.log(dataresponse.result)
            setAds(dataresponse.result)
        }
        getOwnersAdDetails()
    },[]);

    return(
        <>
        <div className="card p-3 Advertisement-details-card">
            <div class="d-flex justify-content-between flex-column your-Advertisements-container">
            <button class="d-flex btn btn-primary justify-content-center align-items-center gap-2" type="button" data-bs-toggle="modal" data-bs-target="#Modal-new-ad" data-bs-dismiss="modal">
                            <i class="fas fa-plus"></i>Post a new Advertisement</button>
                <h5>Your Advertisements : </h5>
                <div className="Advertisements-list-owners">
                    {ads.map((data)=>{
                        return <div className="Advertisement-card" >
                        <div className="Advertisement-image">
                            <img src={data.frontimage} alt=""/>
                        </div>
                        <div className="Advertisement-details">
                            <div className="d-flex justify-content-end edit-your-ads">
                                <button class="">Edit</button><button class=""><i class="fas fa-times close-btn"></i></button>
                            </div>
                            <h4>{data.title}</h4>
                            <p className="Advertisement-details-lication">{data.startlocation}</p>
                            <p1>{data.vehicletype}</p1>
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
        
        </>
    );
}

export default OwnerOwnersAd;