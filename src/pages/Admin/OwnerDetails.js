import React ,{useEffect, useState} from 'react';
import AdminNavbar from './AdminNavbar'
import Table from 'react-bootstrap/Table';
import { Container,Button,Modal } from 'react-bootstrap';
import apiClient from '../../Services/ApiClient'


function OwnerDetails() {
    const [ownerData, setOwnerData] = useState([]);
    const [ownershow, setOwnerShow] = useState(false);
    const [owner, setOwner] = useState("");
    const [schoolvans,setSchoolVans]=useState([])
    const [schooldata,setSchoolData]=useState("");
 
    const handleOwner = (name) => {
    setOwner(name);
    setOwnerShow(true);
    if(name.count>0){
    getSchoolVans(name.id);
    }
  };

  
//Function to get details of Owners
async function getOwners() {
    const{dataresponse,error} = await apiClient.getOwnersDetails();
    console.log(dataresponse.result)
    setOwnerData(dataresponse.result)
    
}

    useEffect(() => {   
        getOwners();
    }, []);

//Function to get details of schoolvans
async function getSchoolVans(ownerid) {
    console.log(ownerid);
    const{dataresponse,error} = await apiClient.getOwnersVanDetails({
            ownerid:ownerid
    })

    setSchoolVans(dataresponse.result)
    console.log(schoolvans)
    setSchoolData(dataresponse.result[0]);
    
}

//Function to get details of particular van
const handleselected = async (selected) => {
    console.log(selected)
    setSchoolData(schoolvans[selected]);
  };




    return (
        <>
        <div className="home">
        <AdminNavbar/>
            <Container className="  mt-4">
                <h4>Owners</h4>
                <div className='p-3'>
                    <table className="table bg-white table-hover">
                        <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Contact</th>
                            <th>Vans</th>
                            <th>Email</th>
                            <th>-</th>
                        </tr>
                        </thead>
                        <tbody>
                        {ownerData.map((data)=>{
                        // console.log(data)
                        return  (
                            <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                            <td>Doe</td>
                            <td><Button onClick={() => handleOwner(data)}>View More</Button></td>
                            </tr>
                        )
                    })}
                        <tr>
                            
                        </tr>
                        </tbody>
                    </table>
                
                {/* Modal to show the owner details */}
                    <Modal
                            
                            
                            show={ownershow}
                            onHide={() => setOwnerShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                            size="xl"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {owner.name}
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex">
                        <div className=''>

                            {/* Profile Details */}
                            <h6>Profile Details </h6>
                            <div className=' p-2 d-flex justify-content-center mt-3 mb-3'>
                            <img className='mx-auto w-25 ' src={owner.image} />
                            </div>
                                <div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Name</div>
                                                        <div>{owner.name} </div>
                                        </div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Email</div>
                                                        <div> {owner.email} </div>
                                        </div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Contact</div>
                                                        <div> {owner.contact}</div>
                                        </div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> NIC</div>
                                                        <div> {owner.nic} </div>
                                        </div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Number of Vehicles</div>
                                                        <div> {owner.count} </div>
                                        </div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Bank Account</div>
                                                        <div> {owner.bank_acc} </div>
                                        </div>
                                </div>
                        </div>
                        <div>
                            <div className="d-flex">
                            <div><h6>Van Details</h6> </div>
                            <div>
                            <select id="inputSchoolvan" className="form-select w-50" placeholder="Choose.." onChange={(e) => handleselected(e.target.value)}  >
                                {schoolvans.map((data,k)=>{
                                    // console.log(selectsclvan)
                                    return <option value={k}>{data.vehicleno}</option>
                                })}
                                </select>
                                </div>
                                </div>
                                
                                    <div>
                                    <div className=' p-2 d-flex justify-content-center mt-3 mb-3'>
                                        <img className='mx-auto w-25 ' src={schooldata.frontimage} />
                                        </div>
                                <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Vehicle Number</div>
                                                        <div>{schooldata.vehicleno}</div>
                                        </div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Vehicle Type</div>
                                                        <div> {schooldata.vehicletype}</div>
                                        </div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Total Seats</div>
                                                        <div>{schooldata.seats} </div>
                                        </div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Available Seats</div>
                                                        <div>{schooldata.avail} </div>
                                        </div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Start Location</div>
                                                        <div> {schooldata.startlocation} </div>
                                        </div>
                                        <div className='d-flex flex-row mb-1'>
                                                        <div className='fw-bold'> Status</div>
                                                        <div> {schooldata.approved ? "Approved": "Pending"} </div>
                                        </div>
                                </div>
                                    
                        </div>
                        
                        </Modal.Body>
                    </Modal>
                </div>
            </Container>
      </div>

      </>
    );
  
}

export default OwnerDetails;