import React from "react";
import './OwnerPayments.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";
import { useState ,useEffect} from "react";
import apiClient from '../../Services/ApiClient'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OwnerPayments (){
    function refreshPage() {
        window.location.reload(false);
      }
    const [paymentStatus,setPaymentStatus]=useState()
    const [totalIncome,setTotalIncome]=useState()
    const [currentIncome,setCurrentIncome]=useState()
    const [yetToPay,setYetToPay]=useState([])
    const [unpaidList,setUnpaidList]=useState([])
    var i = 0
    useEffect(() => {
        async function getYetToPayList(){
            const{dataresponse,error} = await apiClient.getYetToPayList()
            setYetToPay(dataresponse.result)
            console.log(dataresponse.result)
        }
        getYetToPayList()
      },[])
      useEffect(() => {
        async function getUnpaidList(){
            const{dataresponse,error} = await apiClient.getUnpaidList()
            setUnpaidList(dataresponse.result)
            console.log(dataresponse.result)
        }
        getUnpaidList()
      },[])
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
    const BanAStudent = async (id) => {
        const{dataresponse,error} = await apiClient.BanAStudent({
            id:id
        })
        refreshPage()
    }
    const UnbanAStudent = async (id) => {
        const{dataresponse,error} = await apiClient.UnbanAStudent({
            id:id
        })
        refreshPage()
    }
    const RemoveAStudent = async (id) => {
        const{dataresponse,error} = await apiClient.RemoveAStudent({
            id:id
        })
        refreshPage()
    }
    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerPayments-home d-flex flex-column gap-3  align-items-center">
                <h3>Payments</h3>
                <div className="d-flex flex-row gap-3">
                    <div className="OwnerPayments-col d-flex flex-column gap-3">
                        <div className="OwnerPayments-row card d-flex flex-column p-4 gap-2">
                            <h5>Income Status</h5>
                            <div class="progress">
                            <ProgressBar now={paymentStatus} label={`${paymentStatus}%`} variant="danger"/>
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
                        </div>
                        <div className="OwnerPayments-row card d-flex flex-column p-4 gap-2">
                            <h5>Yet to Pay (This month)</h5>
                            <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                <th scope="col" className="payment-tbl-column1">Student</th>
                                <th scope="col" className="payment-tbl-column2">Amount</th>
                                <th scope="col" className="payment-tbl-column3">Payment Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {yetToPay.map(data=>{
                                    return <tr>
                                    <td>{data.fullname}</td>
                                    <td>{data.monthly_charge}</td>
                                    <td>{data.payment_date.slice(0,10)}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="OwnerPayments-col gap-3">
                        <div className="OwnerPayments-row card d-flex flex-column p-4 gap-2">
                            <h5>Unpaid List of last month</h5>
                            <table class="table">
                                {unpaidList.map(data=>{
                                    i++
                                return <tbody>
                                <tr>
                                    <td>{data.fullname}</td>
                                    <td className="banned">{data.sclvan_status}</td>
                                    <td>
                                        <button class="" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${i}`} aria-expanded="false" aria-controls="collapseExample1">
                                            <i class='fa fa-caret-down'></i>
                                        </button>
                                    </td>
                                </tr>
                                <td colspan="4">
                                <div class="collapse" id={`collapseExample${i}`}>
                                    <div class="card card-body">
                                        <p>Payment : Rs.{data.monthly_charge}</p>
                                        <p>Payment Date : {data.payment_date.slice(0,10)}</p>
                                        <p>Delay : {data.due} days</p>
                                        <p>Vehicle : {data.vehicleno}</p>
                                        <p>contact number : {data.contact}</p>
                                        <div class="d-flex flex-row justify-content-evenly p-1 gap-3">
                                        {data.sclvan_status=="banned" ? (
                                            <button type="Button" class="d-flex justify-content-center align-items-center gap-2 btn btn-success" onClick={()=>UnbanAStudent(data.id)}>UNBAN</button>
                                        ):(
                                            <button type="Button" class="d-flex justify-content-center align-items-center gap-2 btn btn-success" onClick={()=>BanAStudent(data.id)}>BAN</button>
                                        )}
                                        <button type="Button" class="d-flex justify-content-center align-items-center gap-2 btn btn-danger" onClick={()=>RemoveAStudent(data.id)}>REMOVE</button>
                                    </div>
                                    </div>
                                </div>
                            </td>
                            </tbody>
                                })}
                            
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerPayments;