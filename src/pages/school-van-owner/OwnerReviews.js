import React from "react";
import './OwnerReviews.css';
import '../Home.css';
import OwnerNavbar from './OwnerNavbar';

function OwnerReviews (){
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
                        <div class="rating_circle">
                            <h1 class="pt-4">4.0</h1>
                            <p class="">out of 5</p>
                        </div>
                        <div className="d-flex flex-row"> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-inactive mx-1"></span> </div>
                    </div>
                    <div class="col-md-8">
                        <div class="rating-bar0 justify-content-center">
                            <table class="text-left mx-auto">
                                <tr className="ratings-tr">
                                    <td class="rating-label">Excellent</td>
                                    <td class="rating-bar">
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "65%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                65%
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right">123</td>
                                </tr>
                                <tr className="ratings-tr">
                                    <td class="rating-label">Good</td>
                                    <td class="rating-bar">
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "25%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                25%
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right">23</td>
                                </tr>
                                <tr className="ratings-tr">
                                    <td class="rating-label">Average</td>
                                    <td class="rating-bar">
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "15%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                15%
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right">10</td>
                                </tr>
                                <tr className="ratings-tr">
                                    <td class="rating-label">Poor</td>
                                    <td class="rating-bar">
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "5%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                5%
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right">3</td>
                                </tr>
                                <tr className="ratings-tr">
                                    <td class="rating-label">Terrible</td>
                                    <td class="rating-bar">
                                        <div class="progress">
                                            <div class="progress-bar bg-warning" role="progressbar" style={{width: "0%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                0%
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right">0</td>
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
                    <tbody>
                        <tr>
                        <td>2022/08/17</td>
                        <td>ABC1234</td>
                        <td>Benjamin Kirby Tennyson</td>
                        <td><div className="d-flex flex-row"> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-inactive mx-1"></span> </div></td>
                        <td>
                            <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                <i class='fa fa-caret-down'></i>
                            </button>
                        </td>
                        </tr>
                        <td colspan="5">
                            <div class="collapse" id="collapseExample1">
                                <div class="card card-body">
                                    <h6>Feedback</h6>
                                    <p>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
                                </div>
                            </div>
                        </td>
                        <tr>
                        <td>2022/08/17</td>
                        <td>ABC1234</td>
                        <td>Benjamin Kirby Tennyson</td>
                        <td><div className="d-flex flex-row"> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-inactive mx-1"></span> <span class="fa fa-star star-inactive mx-1"></span> <span class="fa fa-star star-inactive mx-1"></span> </div></td>
                        <td>
                            <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                <i class='fa fa-caret-down'></i>
                            </button>
                        </td>
                        </tr>
                        <td colspan="5">
                            <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                    <h6>Feedback</h6>
                                    <p>No Feedback Given</p>
                                </div>
                            </div>
                        </td>
                        <tr>
                        <td>2022/08/18</td>
                        <td>ABC1234</td>
                        <td>Benjamin Kirby Tennyson</td>
                        <td><div className="d-flex flex-row"> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-active mx-1"></span> <span class="fa fa-star star-inactive mx-1"></span> <span class="fa fa-star star-inactive mx-1"></span> </div></td>
                        <td>
                            <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                <i class='fa fa-caret-down'></i>
                            </button>
                        </td>
                        </tr>
                        <td colspan="5">
                            <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                    <h6>Feedback</h6>
                                    <p>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
                                </div>
                            </div>
                        </td>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default OwnerReviews ;