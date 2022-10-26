import React ,{useState,useEffect} from 'react';
import ParentNavbar from '../../components/ParentNavbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { SocialIcon } from 'react-social-icons';
import RequestVan from '../../components/RequestVan';
import { useLocation } from 'react-router-dom';
import apiClient from '../../Services/ApiClient'


const mapImage = require('../../assests/map.jpg');

export default function VehicleView() {
    const [requestvehiclemodalShow, setRequestVehicleModalShow] = useState(false);
    const [Vanschools,setVanschools]=useState([]);
    const location = useLocation();
    const schoolvan = location.state;
    console.log(schoolvan.id)
    useEffect(() => {
        async function getDestinationSchools() {
            console.log(schoolvan.id)
            const{dataresponse,error} = await apiClient.getdestinationSchools({
                vanid : schoolvan.id
            })
            console.log(dataresponse)
            setVanschools(dataresponse.result)
            console.log(Vanschools);
            
        }
            getDestinationSchools();   
        
        }, [schoolvan.id]);
    
  return (
    <div>
       <ParentNavbar/>
       <Container className='border mb-3'>
        <div className='d-flex mb-1'>
        <div className='my-auto fixed'><h3 className="fw-bold">{schoolvan.title}</h3></div>
        <Button onClick={() => setRequestVehicleModalShow(true)}  className='w-25 m-2 p-2'>Request Vehicle</Button>
        <RequestVan
            show={requestvehiclemodalShow}
            onHide={() => setRequestVehicleModalShow(false)}
            vanid={schoolvan.id}
        />
        </div>
            <Row>
                <Col xs={12} md={8} className="border">
                  <div className='p-3'>
                    <Carousel className='bg-light'>
                    <Carousel.Item className=''>
                        <img
                        className="d-block mx-auto"
                        src={schoolvan.frontimage} style={{
                            height:'400px',
                            width:'500px',
                            }}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className='align-items-center center'>
                        <img
                        className="d-block mx-auto"
                        src={schoolvan.backimage} style={{
                            height:'400px',
                            width:'500px',
                            }}
                        alt="Second slide"
                        />
                    </Carousel.Item>
    
                    </Carousel>
                    <hr className="bg-danger border-2 border-top border-danger"/>
                    <div className='mt-3'>
                        <div className='d-flex justify-content-between'>
                        <h4 className='text-dark '>Vehicle Details</h4>
                        {schoolvan.avail ?
                            <h5 className='bg-success w-50 text-center p-2 inline-block rounded'>{schoolvan.avail} Seats Available</h5> :
                            <h5 className='bg-danger w-50 text-center p-2 inline-block rounded'>No Seats Available</h5> 
                            }
                        </div>
                        <div className='d-flex gap-1'>
                        <Row  >
                        <Col xs={6} md={4}>
                        <div className="d-flex flex-column">
                        <span className='mb-1'><b>Type</b></span> 
                        <span className='mb-1'><b>Vehicle No</b></span>
                        <span className='mb-1'><b>Total Seats</b></span>
                        <span className='mb-1'><b>A/C</b></span>
                        {/* <span className='mb-1'><b>A/C</b></span> */}
                        </div>
                        </Col>
                        <Col xs={6} md={4} >
                        <div className="d-flex flex-column">
                        <span className='mb-1'>{schoolvan.vehicletype}</span> 
                        <span className='mb-1'>{schoolvan.vehicleno}</span>
                        <span className='mb-1'>{schoolvan.seats}</span>
                        <span className='mb-1'>{schoolvan.ac ? "Yes" : "No"}</span>
                        {/* <span className='mb-1'>Yes</span> */}
                        </div>
                        </Col>
                        </Row>
                        
                    </div>
                    </div>
                    <hr className="bg-danger border-2 border-top border-danger"/>
                    <div className="mt-3">
                        <h4 className='text-dark mb-3'>Vehicle Description</h4>
                        <p> This school van is in a good condition. This goes in the optimum speed which is ideal for 
                            the students to travel. All tyres are in a good conditon. The A/C is also working fine in the school
                            vans. The van will be starting its tour at 5:00 am.
                        </p>
                    </div>
                    <hr className="bg-danger border-2 border-top border-danger"/>
                    <div className="mt-3">
                        <h4 className='text-dark mb-3 text-center fw-bold'> Share this transport with others</h4>
                        <div className='d-flex justify-content-center gap-2'> 
                        <SocialIcon network="telegram"  />
                        <SocialIcon network="facebook"  />
                        <SocialIcon network="whatsapp" />
                        </div>
                    </div>
                </div>
                </Col>
                <Col xs={6} md={4} className="border p-3">
                <Card>
                    <Card.Header className='text-center h4 '>Route</Card.Header>
                    <Card.Body>
                        <Card.Title className='h5'>Starting Position</Card.Title>
                        <Card.Text>
                        {schoolvan.startlocation}
                        </Card.Text>
                        <Card.Title>Destination Schools</Card.Title>
                        <Card.Text>
                            <ul>
                            {Vanschools.map((data)=>{
                        // console.log(data)
                        return  (
                            <li key={data.name}>{data.name}</li>
                        )
                    })}
                            </ul>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    <Card.Img className="mx-auto pb-1" src={mapImage} style={{
                            height:'120px',
                            width:'150px',
                            }} />
                 </Card>
                    <div className=''>
                        {/* <h4 className='text-dark'> Route</h4>
                        <ul className='mb-3'>
                            <li> Vishaka Vidyalaya Colombo 07</li>
                            <li> Royal College Colombo 07</li>
                        </ul> */}

                            {/* <div className='d-flex flex-row'>
                                <div> Name</div>
                                <div> Faalil Bary</div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div > Contact</div>
                                <div> +94 77 1234567</div>
                            </div> */}
                        <hr className="bg-danger border-2 border-top border-dark"/>
                        <h5 className='text-dark'> Owner Details</h5>
                            <div className='d-flex flex-row'>
                                <div> Name</div>
                                <div> {schoolvan.ownername}</div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div > Contact</div>
                                <div>{schoolvan.ownercontact}</div>
                            </div>
                        <hr className="bg-danger border-2 border-top border-dark"/>
                        <h5 className='text-dark mt-3'> Driver Details</h5>
                            <div className='d-flex flex-row'>
                                <div> Name</div>
                                <div> {schoolvan.drivername}</div>
                            </div>
                            <div className='d-flex flex-row'>
                                <div > Contact</div>
                                <div> {schoolvan.drivercontact}</div>
                            </div>
                            <hr className="bg-danger border-2 border-top border-dark"/>
                            {/* <div>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div> */}

                            
                    </div>
                </Col>
            </Row>

       </Container> 
    </div>
  )
}
