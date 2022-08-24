import React from "react";
//import '../App.css';
import '../Home.css';
import './OwnerDashboard.css';
import OwnerNavbar from "./OwnerNavbar";
import BarChart from "../../components/BarChart";
import { useState } from "react";
import {Link} from 'react-router-dom';
import DoughnutChart from "../../components/DoughnutChart";

function OwnerDashboard() {

    const [StCountchartData,setStCountchartData] = useState({
        labels: ["School van 1","School van 2","School bus"],
        datasets: [
            {
                label: "Number of Student",
                backgroundColor: ['#FF8C01', '#FF6B18', '#993300'],
                data: [45,30,60],
            }
        ]
    })
    const [chartData,setchartData] = useState({
        labels: ["School van 1","School van 2","School bus"],
        datasets: [
            {
                label: "Total Seats",
                backgroundColor: ['#FF8C01'],
                data: [50,50,70],
            } ,
            {
                label: "Available Seats",
                backgroundColor: ['green'],
                data: [10,8,12],
            }
        ],
        options:[{
            responsive: true,
            maintainAspectRatio: false,
        }]
    })

    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerDashboard-home d-flex gap-3 p-4 align-items-center">
                <div className="d-flex gap-4 pa-4 ownerDashboard-cards">
                    <div className=" card Owner-Request-list d-flex p-2 pt-4 align-items-center">
                        <h5>Join Requests</h5>
                        <div>
                            <ul class="list-group gap-2 p-4">
                                <li class="list-group-item d-flex flex-row gap-2 justify-content-between align-items-center">
                                    <p>Sandra Tennyson sent a request to school van 1</p>
                                    <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                                </li>
                                <li class="list-group-item d-flex flex-row gap-2 justify-content-between align-items-center">
                                    <p>Sandra Tennyson sent a request to school bus 1</p>
                                    <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                                </li>
                                <li class="list-group-item d-flex flex-row gap-2 justify-content-between align-items-center">
                                    <p>Sandra Tennyson sent a request school van 2</p>
                                    <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                                </li>
                                <li class="list-group-item d-flex flex-row gap-2 justify-content-between align-items-center">
                                    <p>Sandra Tennyson sent a request school van 1</p>
                                    <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-3  Owner-dashboard-charts">
                        <div className="card d-flex flex-column p-4 gap-2 Owner-Payments-col">
                            <h5>Income Status of this Month</h5>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style={{width: "35%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    25%
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="d-flex flex-column ownerPayment-amounts">
                                    <p1>Currently recived</p1>
                                    <p2>LKR 30,000</p2>
                                </div>
                                <div className="d-flex flex-column ownerPayment-amounts">
                                    <p1>Total amount</p1>
                                    <p2>LKR 120,000</p2>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end"><Link to='/OwnerPayments' className='link-to'>Go to Payments</Link></div>
                        </div>
                        <div className="d-flex gap-3 ownerDashboard-charts">
                            <div className="card d-flex p-3 align-items-center">
                                <div className="d-flex flex-column gap-4 align-items-center" style={{ width: 300 }}>
                                <p2>Sudent Count</p2>
                                    <DoughnutChart chartData={StCountchartData}/>
                                </div>
                            </div>
                            <div className="card d-flex p-3">
                                <div className="d-flex flex-column gap-4 align-items-center chart-wrapper">
                                    <p2>Sudent Count</p2>
                                    <div className="d-flex align-items-center chart-wrapper"><BarChart chartData={chartData}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OwnerDashboard;