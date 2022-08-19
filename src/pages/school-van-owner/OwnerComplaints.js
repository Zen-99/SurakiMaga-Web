import React from "react";
import './OwnerComplaints.css';
import '../Home.css';
import OwnerNavbar from './OwnerNavbar';

function OwnerComplaints (){
    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerComplaints-home d-flex flex-column gap-3 align-items-center">
                <h3>Complaints</h3>
                <div className="card d-flex flex-column p-4 gap-2 OwnerComplaints-col">
                    <h5>Complaints Overview</h5>
                    <div className="d-flex flex-row p-4">
                       <div className="d-flex flex-row gap-3">
                        <div class="vl1"></div>
                        <div className="d-flex flex-column">
                            <p>New</p>
                            <h3>21</h3>
                        </div>
                       </div>
                       <div className="d-flex flex-row gap-3">
                        <div class="vl2"></div>
                        <div className="d-flex flex-column">
                            <p>Pending</p>
                            <h3>11</h3>
                        </div>
                       </div>
                       <div className="d-flex flex-row gap-3">
                        <div class="vl3"></div>
                        <div className="d-flex flex-column">
                            <p>Closed</p>
                            <h3>20</h3>
                        </div>
                       </div>
                       <div className="d-flex flex-row gap-3">
                            
                       </div>
                    </div>
                </div>
                <div className="card d-flex flex-column p-4 gap-2 OwnerComplaints-col">
                    <h5>All Complaints</h5>
                    <div className="d-flex flex-column">
                    <ul class="nav nav-tabs d-flex flex-row flex-nowrap">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#pending">Pending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#closed">Closed</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="pending" class="container tab-pane active"><br/>
                        <h3>Pending Complaints</h3>
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                <td>2022/08/17</td>
                                <td>ABC1234</td>
                                <td>Benjamin Kirby Tennyson</td>
                                <td>
                                    <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                        <i class='fa fa-caret-down'></i>
                                    </button>
                                </td>
                                </tr>
                                <td colspan="4">
                                    <div class="collapse" id="collapseExample1">
                                        <div class="card card-body">
                                            <p>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
                                            <p>mobile number : 0711234567</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Action taken
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <tr>
                                <td>2022/08/17</td>
                                <td>ABC1234</td>
                                <td>Benjamin Kirby Tennyson</td>
                                <td>
                                    <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                        <i class='fa fa-caret-down'></i>
                                    </button>
                                </td>
                                </tr>
                                <td colspan="4">
                                    <div class="collapse" id="collapseExample2">
                                        <div class="card card-body">
                                            <p>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
                                            <p>mobile number : 0711234567</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Action taken
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <tr>
                                <td>2022/08/18</td>
                                <td>ABC1234</td>
                                <td>Benjamin Kirby Tennyson</td>
                                <td>
                                    <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                        <i class='fa fa-caret-down'></i>
                                    </button>
                                </td>
                                </tr>
                                <td colspan="4">
                                    <div class="collapse" id="collapseExample3">
                                        <div class="card card-body">
                                            <p>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
                                            <p>mobile number : 0711234567</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Action taken
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tbody>
                            </table>
                        </div>
                        <div id="closed" class="container tab-pane fade"><br/>
                        <h3>Closed Complaints</h3>
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                <td>2022/08/17</td>
                                <td>ABC1234</td>
                                <td>Benjamin Kirby Tennyson</td>
                                <td>
                                    <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                                        <i class='fa fa-caret-down'></i>
                                    </button>
                                </td>
                                </tr>
                                <td colspan="4">
                                    <div class="collapse" id="collapseExample1">
                                        <div class="card card-body">
                                            <p>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
                                            <p>mobile number : 0711234567</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Action taken
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <tr>
                                <td>2022/08/17</td>
                                <td>ABC1234</td>
                                <td>Benjamin Kirby Tennyson</td>
                                <td>
                                    <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                        <i class='fa fa-caret-down'></i>
                                    </button>
                                </td>
                                </tr>
                                <td colspan="4">
                                    <div class="collapse" id="collapseExample2">
                                        <div class="card card-body">
                                            <p>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
                                            <p>mobile number : 0711234567</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Action taken
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <tr>
                                <td>2022/08/18</td>
                                <td>ABC1234</td>
                                <td>Benjamin Kirby Tennyson</td>
                                <td>
                                    <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                                        <i class='fa fa-caret-down'></i>
                                    </button>
                                </td>
                                </tr>
                                <td colspan="4">
                                    <div class="collapse" id="collapseExample3">
                                        <div class="card card-body">
                                            <p>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
                                            <p>mobile number : 0711234567</p>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Action taken
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OwnerComplaints;