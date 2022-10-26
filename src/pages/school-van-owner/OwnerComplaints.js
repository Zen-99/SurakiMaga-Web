import React from "react";
import './OwnerComplaints.css';
import '../Home.css';
import OwnerNavbar from './OwnerNavbar';
import DoughnutChart from "../../components/DoughnutChart";
import { useState ,useEffect} from "react";
import apiClient from '../../Services/ApiClient'

function OwnerComplaints (){
    const [complaints,setComplaints]=useState([])
    const [pending,setPending]=useState()
    const [urgent,setUrgent]=useState()
    const [closed,setClosed]=useState()
    var complaintdata = []
    var i = 0
    useEffect(() => {
        async function getcomplaints(){
            const{dataresponse,error} = await apiClient.getcomplaints()
            setComplaints(dataresponse.result.complaints)
            setPending(dataresponse.result.pending.count)
            setUrgent(dataresponse.result.urgent.count)
            setClosed(dataresponse.result.closed.count)
            complaintdata.push(dataresponse.result.pending.count)
            complaintdata.push(dataresponse.result.urgent.count)
            complaintdata.push(dataresponse.result.closed.count)
        }
        getcomplaints()
    },[]);

    const [chartData,setchartData] = useState({
        datasets: [
            {
                label: "School vans",
                backgroundColor: ['green', 'aqua', '#ff8c01'],
                data: [2,1,1],
            }
        ],
        labels: ["Pending","Urgent","Closed"],
    })

    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerComplaints-home d-flex flex-column gap-3 align-items-center">
                <h3>Complaints</h3>
                <div className="card d-flex flex-column p-4 gap-2 OwnerComplaints-col">
                    <h5>Complaints Overview</h5>
                    <div className="d-flex flex-row p-4 gap-4 justify-content-evenly">
                       <div className="d-flex flex-row gap-3 align-items-center ownerComplaintsOverview">
                        <div class="vl1"></div>
                        <div className="d-flex flex-column justify-content-center">
                            <p>Pending</p>
                            <h4>{pending}</h4>
                        </div>
                       </div>
                       <div className="d-flex flex-row gap-3 align-items-center ownerComplaintsOverview">
                        <div class="vl2"></div>
                        <div className="d-flex flex-column justify-content-center">
                            <p>Urgent</p>
                            <h4>{urgent}</h4>
                        </div>
                       </div>
                       <div className="d-flex flex-row gap-3 align-items-center ownerComplaintsOverview">
                        <div class="vl3"></div>
                        <div className="d-flex flex-column justify-content-center">
                            <p>Closed</p>
                            <h4>{closed}</h4>
                        </div>
                       </div>
                       <div className="d-flex flex-row gap-3" style={{ width: 250 }}>
                            <DoughnutChart chartData={chartData} />
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
                            <a class="nav-link" data-bs-toggle="tab" href="#urgent">Urgent</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#closed">Closed</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="pending" class="container tab-pane active"><br/>
                        <h3>Pending Complaints</h3>
                        <table class="table table-borderless">
                            {complaints.map(data=>{
                                if(data.status=='pending'){
                                    i++
                                    return <tbody>
                                    <tr>
                                    <td>{data.date.slice(0,10)}</td>
                                    <td>{data.vehicleno}</td>
                                    <td>{data.name}</td>
                                    <td>
                                        <button class="" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${i}`} aria-expanded="false" aria-controls="collapseExample1">
                                            <i class='fa fa-caret-down'></i>
                                        </button>
                                    </td>
                                    </tr>
                                    <td colspan="4">
                                        <div class="collapse" id={`collapseExample${i}`}>
                                            <div class="card card-body">
                                                <p>{data.complaint}</p>
                                                <p>mobile number : {data.contact}</p>
                                            </div>
                                        </div>
                                    </td>
                                </tbody>
                                }
                            })}
                            </table>
                        </div>
                        <div id="urgent" class="container tab-pane fade"><br/>
                        <h3>Urgent</h3>
                        <p className="banned">Need to take imediate action</p>
                        <table class="table table-borderless">
                            {complaints.map(data=>{
                                if(data.status=='urgent'){
                                    i++
                                    return <tbody>
                                    <tr>
                                    <td>{data.date.slice(0,10)}</td>
                                    <td>{data.vehicleno}</td>
                                    <td>{data.name}</td>
                                    <td>
                                        <button class="" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${i}`} aria-expanded="false" aria-controls="collapseExample1">
                                            <i class='fa fa-caret-down'></i>
                                        </button>
                                    </td>
                                    </tr>
                                    <td colspan="4">
                                        <div class="collapse" id={`collapseExample${i}`}>
                                            <div class="card card-body">
                                                <p>{data.complaint}</p>
                                                <p>mobile number : {data.contact}</p>
                                            </div>
                                        </div>
                                    </td>
                                </tbody>
                                }
                            })}
                            </table>
                        </div>
                        <div id="closed" class="container tab-pane fade"><br/>
                        <h3>Closed Complaints</h3>
                        <p className="banned">Closed by admin</p>
                        <table class="table table-borderless">
                            {complaints.map(data=>{
                                if(data.status=='closed'){
                                    i++
                                    return <tbody>
                                    <tr>
                                    <td>{data.date.slice(0,10)}</td>
                                    <td>{data.vehicleno}</td>
                                    <td>{data.name}</td>
                                    <td>
                                        <button class="" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${i}`} aria-expanded="false" aria-controls="collapseExample1">
                                            <i class='fa fa-caret-down'></i>
                                        </button>
                                    </td>
                                    </tr>
                                    <td colspan="4">
                                        <div class="collapse" id={`collapseExample${i}`}>
                                            <div class="card card-body">
                                                <p>{data.complaint}</p>
                                                <p>mobile number : {data.contact}</p>
                                            </div>
                                        </div>
                                    </td>
                                </tbody>
                                }
                            })}
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