import React from "react";
import './OwnerPayments.css';
import '../Home.css';
import OwnerNavbar from "./OwnerNavbar";

function OwnerPayments (){
    return(
        <div className="home">
            <OwnerNavbar/>
            <div className="OwnerPayments-home d-flex flex-column gap-3 align-items-center">
                <h3>Payments</h3>
                <div className="OwnerPayments-row gap-3">
                    <div className="card d-flex flex-column p-4 gap-2 OwnerPayments-col">
                        <h5>Income Status</h5>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: "35%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
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
                    </div>
                </div>
                <div className="OwnerPayments-row gap-3">
                    <div className="card d-flex flex-column p-4 gap-2 OwnerPayments-col">
                        <h5>Paid List</h5>
                        <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                            <th scope="col" className="payment-tbl-column1">Date</th>
                            <th scope="col" className="payment-tbl-column2">Student</th>
                            <th scope="col" className="payment-tbl-column3">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>2022-11-15</td>
                            <td>Benjamin Tennyson</td>
                            <td>5000</td>
                            </tr>
                            <tr>
                            <td>2022-11-15</td>
                            <td>Benjamin Tennyson</td>
                            <td>5000</td>
                            </tr>
                            <tr>
                            <td>2022-11-15</td>
                            <td>Benjamin Tennyson</td>
                            <td>5000</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="card d-flex flex-column p-4 gap-2 OwnerPayments-col">
                        <h5>Unpaid List of last month</h5>
                        <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                            <th scope="col" className="payment-tbl-column2">Student</th>
                            <th scope="col" className="payment-tbl-column3">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Benjamin Tennyson</td>
                            <td>5000</td>
                            </tr>
                            <tr>
                            <td>Benjamin Tennyson</td>
                            <td>5000</td>
                            </tr>
                            <tr>
                            <td>Benjamin Tennyson</td>
                            <td>5000</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerPayments;