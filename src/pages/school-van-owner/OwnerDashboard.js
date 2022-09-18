import React from "react";
//import '../App.css';
import '../Home.css';
import './OwnerDashboard.css';
import OwnerNavbar from "./OwnerNavbar";
import BarChart from "../../components/BarChart";
import { useState ,useEffect} from "react";
import {Link} from 'react-router-dom';
import DoughnutChart from "../../components/DoughnutChart";
import apiClient from '../../Services/ApiClient'

function OwnerDashboard() {
    const lables = []
    const Seats = []
    const avail = []
    const stu = []
    useEffect(() => {
        async function getCount(){
            const{dataresponse,error} = await apiClient.getCount()
            console.log(dataresponse.result)
            dataresponse.result.map(data => {
                lables.push(data.vehicleno)
                Seats.push(data.seats)
                avail.push(data.seats-data.avail)
                stu.push(data.avail)
            })
        }
        
        getCount()
      },[])

    const [StCountchartData,setStCountchartData] = useState({
        labels: lables,
        datasets: [
            {
                label: lables,
                backgroundColor: ['#FF8C01', '#FF6B18', '#993300'],
                data: stu,
            }
        ]
    })
    const [chartData,setchartData] = useState({
        labels: lables,
        datasets: [
            {
                label: "Total Seats",
                backgroundColor: ['#FF8C01'],
                data: Seats,
            } ,
            {
                label: "Available Seats",
                backgroundColor: ['green'],
                data:avail,
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
                                    <p>Sandra Tennyson sent a request to ABC123</p>
                                    <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                                </li>
                                <li class="list-group-item d-flex flex-row gap-2 justify-content-between align-items-center">
                                    <p>Sandra Tennyson sent a request to ACD345</p>
                                    <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                                </li>
                                <li class="list-group-item d-flex flex-row gap-2 justify-content-between align-items-center">
                                    <p>Sandra Tennyson sent a request BN567</p>
                                    <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal">view</button>
                                </li>
                                <li class="list-group-item d-flex flex-row gap-2 justify-content-between align-items-center">
                                    <p>Sandra Tennyson sent a request ABC123</p>
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
                                    <p2>Available Seats</p2>
                                    {console.log(stu)}
                                    <div className="d-flex align-items-center chart-wrapper"><BarChart chartData={chartData}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="OwnerRequestModal" tabindex="-1" aria-labelledby="ModalLabel-new-ad" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="OwnerRequest-Details-container d-flex flex-column p-3">
                                <div class="d-flex flex-row justify-content-evenly">
                                    <div class="col-sm-5">
                                        <h6 class="mb-0">Parent Name</h6>
                                    </div>
                                    <div class="col-sm-5 text-secondary">
                                        Sandra Tennyson
                                    </div>
                                </div>
                                <hr/>
                                <div class="d-flex flex-row justify-content-evenly">
                                    <div class="col-sm-5">
                                        <h6 class="mb-0">Child Name</h6>
                                    </div>
                                    <div class="col-sm-5 text-secondary">
                                        Benjamin Tennyson
                                    </div>
                                </div>
                                <hr/>
                                <div class="d-flex flex-row justify-content-evenly">
                                    <div class="col-sm-5">
                                        <h6 class="mb-0">Contact Number</h6>
                                    </div>
                                    <div class="col-sm-5 text-secondary">
                                        0711223345
                                    </div>
                                </div>
                                <hr/>
                                <div class="d-flex flex-row justify-content-evenly">
                                    <div class="col-sm-5">
                                        <h6 class="mb-0">Vehicle</h6>
                                    </div>
                                    <div class="col-sm-5 text-secondary">
                                        ABC1234
                                    </div>
                                </div>
                                <hr/>
                                <div class="d-flex flex-row justify-content-evenly">
                                    <div class="col-sm-5">
                                        <h6 class="mb-0">School</h6>
                                    </div>
                                    <div class="col-sm-5 text-secondary">
                                        D.S.Senanayaka college
                                    </div>
                                </div>
                                <hr/>
                                <div class="d-flex flex-row justify-content-evenly">
                                    <div class="col-sm-5">
                                        <h6 class="mb-0">Pick up location</h6>
                                    </div>
                                    <div class="col-sm-5 text-secondary">
                                        {/* <div className="OwnerRequest-map">..location</div> */}
                                    </div>
                                </div>
                                <hr/>
                                <div class="d-flex flex-row justify-content-evenly p-1 gap-3">
                                    <button class="d-flex justify-content-center align-items-center gap-2 btn btn-success"><i class="fas fa-check"></i>Accept</button>
                                    <button class="d-flex justify-content-center align-items-center gap-2 btn btn-danger"><i class="fas fa-times-circle"></i>Reject</button>
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