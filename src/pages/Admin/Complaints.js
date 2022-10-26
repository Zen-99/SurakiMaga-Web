import React, {useState,useEffect} from 'react'
import AdminNavbar from './AdminNavbar'
import Complain from '../../components/Complain.js'
import apiClient from '../../Services/ApiClient'
import { Container } from 'react-bootstrap';

const Complaints = () => {
  const [complaints,setComplaints]=useState([])
  var i=0

  useEffect(() => {
    async function getcomplaints(){
        const{dataresponse,error} = await apiClient.getAdminComplaints()
        setComplaints(dataresponse.result)
    }
    getcomplaints()
},[]);

  return (
    <>
    <div className="home">
      <AdminNavbar/>
      <Container className="  mt-4">
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
                                      <div className='d-flex p-4 gap-4'>
                                        <button type="Button" class="btn btn-success">Take Action</button>
                                        <button type="Button" class="btn btn-danger">Close Complaint</button>
                                      </div>
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
      </Container>
        
      </div>
    </>
    
  )
}

export default Complaints