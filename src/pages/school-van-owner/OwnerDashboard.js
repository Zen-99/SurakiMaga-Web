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
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OwnerDashboard() {
    const lables = []
    const Seats = []
    const avail = []
    const stu = []
    const [requests,setRequests]=useState([])
    const [reqid,setReqid]=useState()
    const [monthlyCharge,setMonthlyCharge]=useState()
    // const [charge,setCharge]=useState()
    const [chargeErr,setChargeErr]=useState("")
    const [Editdetails, setEditdetails] = useState()
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

      useEffect(() => {
        async function getRequestDetails(){
            const{dataresponse,error} = await apiClient.getRequestDetails()
            console.log(dataresponse.result)
            setRequests(dataresponse.result)
        }
        getRequestDetails()
    },[]);

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

    function refreshPage() {
        window.location.reload(false);
      }

    const viewReq = (id,charge) => {
        setReqid(id)
        setMonthlyCharge(charge)
        console.log(id+" "+charge)
    }
    const SubmitMonthlyCharge = (crr,id) => {
        setChargeErr("")
        if (monthlyCharge === ""){
            setMonthlyCharge(crr)
            setChargeErr("Enter Correct amount")
        }else if(isNaN(monthlyCharge)){
            setChargeErr("Enter correct amount")
        } else {
            const { dataresponse, error } =  apiClient.EditMonthlyCharge({
                id: id,
                charge: monthlyCharge
            });
            setChargeErr("")
            setEditdetails(false)
        }
    }
    const cancelMonthlyCharge = (crr) => {
        setChargeErr("")
        setEditdetails(false)
        setMonthlyCharge(crr)
    }
    const AcceptRequest = (student_id,id,van_id) => {
        const date = new Date();
        date.setMonth(date.getMonth()+1)
        date.setDate(date.getDate()+1)
        let paymentDate = date.toISOString().slice(0,10)
        console.log(paymentDate)
        const { dataresponse,error} = apiClient.AcceptRequest({
            id:id,
            student_id:student_id,
            van_id:van_id,
            charge:monthlyCharge,
            date:paymentDate
        })
        refreshPage()
    }
    const RejectRequest = (id) => {
        const { dataresponse,error} = apiClient.RejectRequest({
            id:id
        })
        refreshPage()
    }
    const closeReqdetails = () =>{
        refreshPage()
    }
    const [paymentStatus,setPaymentStatus]=useState()
    const [totalIncome,setTotalIncome]=useState()
    const [currentIncome,setCurrentIncome]=useState()
      useEffect(() => {
        async function getPaymentStatus(){
            let cI = await getCurrentIncome()
            setCurrentIncome(cI)
            let tI = await getTotalIncome()
            setTotalIncome(tI)
            let ps = +((cI/tI)*100).toFixed(2)
            setPaymentStatus(ps)
        }
        getPaymentStatus()
      },[])
    async function getTotalIncome(){
        const{dataresponse,error} = await apiClient.getTotalIncome()
        return dataresponse.result.total
    }
    async function getCurrentIncome(){
        const{dataresponse,error} = await apiClient.getCurrentIncome()
        return dataresponse.result.current
    }

    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerDashboard-home d-flex gap-3 p-4 align-items-center">
                <div className="d-flex gap-4 pa-4 ownerDashboard-cards">
                    <div className=" card Owner-Request-list d-flex p-2 pt-4 align-items-center">
                        <h5>Join Requests</h5>
                        <div>
                            <ul class="list-group gap-2 p-4">
                                {requests.map(data=>{
                                    return <li class="list-group-item d-flex flex-column gap-2 justify-content-between align-items-center">
                                    <p>{data.studentname} sent a request to {data.vehicleno}</p>
                                    <button type="button" class="btn btn-primary Request-view"data-bs-toggle="modal" data-bs-target="#OwnerRequestModal"  onClick={()=>viewReq(data.id,data.monthlycharge)}>View</button>
                                </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-3  Owner-dashboard-charts">
                        <div className="card d-flex flex-column p-4 gap-2 Owner-Payments-col">
                            <h5>Income Status of this Month</h5>
                            <div class="progress">
                                <ProgressBar now={paymentStatus} label={`${paymentStatus}%`} variant="success"/>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="d-flex flex-column ownerPayment-amounts">
                                    <p1>Currently recived</p1>
                                    <p2>LKR {currentIncome}</p2>
                                </div>
                                <div className="d-flex flex-column ownerPayment-amounts">
                                    <p1>Total amount</p1>
                                    <p2>LKR {totalIncome}</p2>
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
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeReqdetails}></button>
                        </div>
                        <div class="modal-body">
                        {requests.map(data=>{
                            console.log(data)
                             if(data.id==reqid){
                                return <div className="OwnerRequest-Details-container d-flex flex-column p-3">
                                    <div class="d-flex flex-row justify-content-evenly">
                                        <div class="col-sm-5">
                                            <h6 class="mb-0">Parent Name</h6>
                                        </div>
                                        <div class="col-sm-5 text-secondary">{data.parentname}</div>
                                    </div>
                                    <hr/>
                                    <div class="d-flex flex-row justify-content-evenly">
                                        <div class="col-sm-5">
                                            <h6 class="mb-0">Child Name</h6>
                                        </div>
                                        <div class="col-sm-5 text-secondary">{data.studentname}</div>
                                    </div>
                                    <hr/>
                                    <div class="d-flex flex-row justify-content-evenly">
                                        <div class="col-sm-5">
                                            <h6 class="mb-0">Contact Number</h6>
                                        </div>
                                        <div class="col-sm-5 text-secondary">{data.contact}</div>
                                    </div>
                                    <hr/>
                                    <div class="d-flex flex-row justify-content-evenly">
                                        <div class="col-sm-5">
                                            <h6 class="mb-0">Vehicle</h6>
                                        </div>
                                        <div class="col-sm-5 text-secondary">{data.vehicleno}</div>
                                    </div>
                                    <hr/>
                                    <div class="d-flex flex-row justify-content-evenly">
                                        <div class="col-sm-5">
                                            <h6 class="mb-0">School</h6>
                                        </div>
                                        <div class="col-sm-5 text-secondary">{data.school}</div>
                                    </div>
                                    <hr/>
                                    {/* <div class="d-flex flex-row justify-content-evenly">
                                        <div class="col-sm-5">
                                            <h6 class="mb-0">Pick up location</h6>
                                        </div>
                                        <div class="col-sm-5 text-secondary">
                                            <div className="OwnerRequest-map">..location</div>
                                        </div>
                                    </div>
                                    <hr/> */}
                                    <div class="d-flex flex-row justify-content-evenly">
                                        <div class="col-sm-5">
                                            <h6 class="mb-0">Monthly Charge</h6>
                                        </div>
                                        {Editdetails ? (
                                           <div className="col-sm-5 d-flex flex-column">
                                           <div class="text-secondary d-flex flex-row justify-content-between align-items-center gap-4">
                                             <input type="text" class="form-control border-0 p-0" id="inputContact" name="contact" value={monthlyCharge} onChange={(e) => setMonthlyCharge(e.target.value)}/>
                                             <button type="submit" className="savebutton" value="Submit" onClick={()=>SubmitMonthlyCharge(data.monthlycharge,data.id)}>Save</button>
                                             <button type="submit" className="cancelbutton" value="Submit" onClick={()=>cancelMonthlyCharge(data.monthlycharge)}>Cancel</button>
                                           </div>
                                           <div className="errors">{chargeErr}</div>
                                         </div>
                                        ): (
                                            <div class="col-sm-5 text-secondary d-flex flex-row justify-content-between align-items-center">
                                             <p1>{monthlyCharge}</p1>
                                            <button type="Button" className="editbutton" onClick={()=>setEditdetails(true)}><img src={require('../../assests/pen-solid.svg')} className="editbutton" style={{height:'15px',width:'15px',}} alt=""/></button>
                                            </div>
                                        )}
                                    </div>
                                    <hr/>
                                    <div class="d-flex flex-row justify-content-evenly p-1 gap-3">
                                        <button type="Button" class="d-flex justify-content-center align-items-center gap-2 btn btn-success" onClick={()=>AcceptRequest(data.student_id,data.id,data.van_id)}><i class="fas fa-check"></i>Accept</button>
                                        <button type="Button" class="d-flex justify-content-center align-items-center gap-2 btn btn-danger" onClick={()=>RejectRequest(data.id)}><i class="fas fa-times-circle"></i>Reject</button>
                                    </div>
                                </div>
                             }
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OwnerDashboard;