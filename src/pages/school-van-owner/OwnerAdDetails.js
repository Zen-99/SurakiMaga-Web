import React,{useEffect,useState} from "react";
import './OwnerAdvertisements.css';
import apiClient from '../../Services/ApiClient'

const vehicleImage = require('../../assests/schoolbus.png');

function OwnerAdDetails(props){
    console.log(props.data)
    const data = props.data
    const [Schools,setSchools]=useState([])
    const [Images,setImages]=useState([])

    useEffect(() => {
        async function getAdDetailsSchools(){
            const{dataresponse,error} = await apiClient.getAdDetailsSchools({id:props.data.id})
            console.log(dataresponse.result)
            setSchools(dataresponse.result)
        }
        getAdDetailsSchools()
    },[]);
    useEffect(() => {
        async function getAdDetailsImages(){
            const{dataresponse,error} = await apiClient.getAdDetailsImages({id:props.data.id})
            console.log(dataresponse.result)
            setImages(dataresponse.result)
        }
        getAdDetailsImages()
    },[]);
    
    function ListItem(props) {
        return <li>{props.value}</li>;
      }
      const listItems = Schools.map((scl)=>{
        return <ListItem key={scl.toString()} value={scl.name}/>
});
var i = 1
    return( 
        <div className="card p-3 Advertisement-details-card gap-4">
            <h4>{data.title}</h4>
            <div class="d-flex justify-content-between align-items-center details">
                <div class="mt-2 d-flex flex-column justify-content-between align-items-center">
                    <p class="text-uppercase mb-0">{data.vehicleno}</p>
                    <p class="text-uppercase mb-0">School {data.vehicletype}</p>
                    <p class=" mt-0" style={{ color: "red" }}>{data.seats - data.avail} more seats available</p>
                    <p class=" mt-0">Charge for 1KM : Rs.{data.charge}</p>
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
                <div className="Adimages">
                    <div id="LpageCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={data.frontimage} height="300px" class="d-block w-100" alt="..."/>
                    </div>
                    {Images.map((img)=>{
                        return <div class="carousel-item">
                                    <img src={img.image} height="300px" class="d-block w-100" alt="..."/>
                                </div>
                    })}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#LpageCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#LpageCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
            </div>
                </div>
            </div>
            <div class="d-flex flex-column">
                <ul>
                    {listItems}
                </ul>
            </div><p>{data.description}</p><button class="d-flex justify-content-center align-items-center gap-2 btn btn-success"><i class="fas fa-share"></i>Share</button>
        </div>
    );
}
export default OwnerAdDetails;