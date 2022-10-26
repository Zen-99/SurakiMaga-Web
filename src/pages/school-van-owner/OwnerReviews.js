import React from "react";
import './OwnerReviews.css';
import '../Home.css';
import OwnerNavbar from './OwnerNavbar';
import { useState ,useEffect} from "react";
import apiClient from '../../Services/ApiClient'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from "../../components/Rating";

function OwnerReviews (){
    const [reviews,setReviews]=useState([])
    const [r5,setR5]=useState()
    const [r4,setR4]=useState()
    const [r3,setR3]=useState()
    const [r2,setR2]=useState()
    const [r1,setR1]=useState()
    const [rt,setRt]=useState()
    const [rTotal,setRTotal]=useState()
    var i = 0
    useEffect(() => {
        async function getReviews(){
            const{dataresponse,error} = await apiClient.getReviews()
            console.log(dataresponse.result.r5.count)
            setReviews(dataresponse.result.reviews)
            setR1(dataresponse.result.r1.count)
            setR2(dataresponse.result.r2.count)
            setR3(dataresponse.result.r3.count)
            setR4(dataresponse.result.r4.count)
            setR5(dataresponse.result.r5.count)
            setRt(dataresponse.result.rt.count)
            let RT = Math.round((dataresponse.result.r1.count*1 + dataresponse.result.r2.count*2 + dataresponse.result.r3.count*3 + dataresponse.result.r4.count*4 + dataresponse.result.r5.count*5)/dataresponse.result.rt.count)
            setRTotal(RT)
        }
        getReviews()
    },[]);
    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerReviews-home d-flex flex-column gap-3 align-items-center">
            <h3>Reviews</h3>
            <div className="card d-flex flex-column p-4 gap-2 Ownerreviews-col">
                <h5>Overall Reviews</h5>
                <div class="OwnerReview-card card">
                <div class="row justify-content-left d-flex">
                    <div class="col-md-4 d-flex flex-column text-center">
                        <div className="rating_circle">
                            <h1 className="pt-4">{rTotal}</h1>
                            <p className="">out of 5</p>
                        </div>
                        <Rating rate={rTotal}/>
                    </div>
                    <div class="col-md-8">
                        <div class="rating-bar0 justify-content-center">
                            <table class="text-left mx-auto">
                                <tr className="ratings-tr">
                                    <td class="rating-label">Excellent</td>
                                    <td class="rating-bar">
                                        <div class="progress">
                                            <ProgressBar now={(r5/rt)*100} label={`${(r5/rt)*100}%`} variant="warning"/>
                                        </div>
                                    </td>
                                    <td class="text-right">{r5}</td>
                                </tr>
                                <tr className="ratings-tr">
                                    <td class="rating-label">Good</td>
                                    <td class="rating-bar">
                                        <div class="progress">
                                            <ProgressBar now={(r4/rt)*100} label={`${(r4/rt)*100}%`} variant="warning"/>
                                        </div>
                                    </td>
                                    <td class="text-right">{r4}</td>
                                </tr>
                                <tr className="ratings-tr">
                                    <td class="rating-label">Average</td>
                                    <td class="rating-bar">
                                        <div class="progress">
                                            <ProgressBar now={(r3/rt)*100} label={`${(r3/rt)*100}%`} variant="warning"/>
                                        </div>
                                    </td>
                                    <td class="text-right">{r3}</td>
                                </tr>
                                <tr className="ratings-tr">
                                    <td class="rating-label">Poor</td>
                                    <td class="rating-bar">
                                        <div class="progress">
                                            <ProgressBar now={(r2/rt)*100} label={`${(r2/rt)*100}%`} variant="warning"/>
                                        </div>
                                    </td>
                                    <td class="text-right">{r2}</td>
                                </tr>
                                <tr className="ratings-tr">
                                    <td class="rating-label">Terrible</td>
                                    <td class="rating-bar">
                                        <div class="progress">
                                            <ProgressBar now={(r1/rt)*100} label={`${(r1/rt)*100}%`} variant="warning"/>
                                        </div>
                                    </td>
                                    <td class="text-right">{r1}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="card d-flex flex-column p-4 gap-2 Ownerreviews-col">
                <h5>All Reviews</h5>
                <table class="table table-borderless">
                    {reviews.map(data=>{
                        i++
                        return <tbody>
                        <tr>
                        <td>{data.date.slice(0,10)}</td>
                        <td>{data.vehicleno}</td>
                        <td>{data.fullname}</td>
                        <td><Rating rate={data.review}/></td>
                        <td>
                            <button class="" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${i}`} aria-expanded="false" aria-controls="collapseExample1">
                                <i class='fa fa-caret-down'></i>
                            </button>
                        </td>
                        </tr>
                        <td colspan="5">
                            <div class="collapse" id={`collapseExample${i}`}>
                                <div class="card card-body">
                                    <h6>Feedback</h6>
                                    <p>{data.feedback}</p>
                                </div>
                            </div>
                        </td>
                    </tbody>
                    })}
                </table>
            </div>
            </div>
        </div>
    )
}

export default OwnerReviews ;