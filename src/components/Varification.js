
import React, { useEffect, useState ,useRef} from 'react'
import { Card, Row, Col, Container,Table,Button,Modal,ButtonToolbar } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import apiClient from '../Services/ApiClient';
//import "bootstrap/scss/bootstrap.scss";

const Varification = () => {
    const [vanData, setVanData] = useState([]);
    const [show, setShow] = useState(false);
    const [vehicle, setVehicle] = useState("");
  const handleName = (name) => {
    setVehicle(name);
    setShow(true);
  };


  //Function to accept request
  async function acceptRequest(van) {
    const{dataresponse,error} = await apiClient.acceptRequest({
        vanid : van
    })
    if (dataresponse) {
        setShow(false);
        getRequests();
    } else {
    }
    
}

//Function to get Requests 
async function getRequests() {
    const{dataresponse,error} = await apiClient.getpendingRequest();
    console.log(dataresponse.result)
    setVanData(dataresponse.result)
    
}

    useEffect(() => {   
        getRequests();
    }, []);

    console.log(vanData)

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;
    const pagination = useRef();

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(vanData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(vanData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,vanData]);

  // Invoke when user click to request another page.
    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % vanData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    };

  return (
    <Container>
            <Row >
                {currentItems.map((vanData, k) => (
                    <Col key={k} xs={12} md={6} lg={4} className='mt-5'>
                        <Card>
                            <Card.Header>{vanData.vehicleno} </Card.Header>
                        
                            <Card.Img variant="top" src={vanData.frontimage} />
                        <Card.Body>
                            {/* <Card.Title >{vanData.name} sent a request</Card.Title> */}
                            <Card.Text>
                                    <div className='d-flex flex-row'>
                                                <div className='fw-bold'> Owner</div>
                                                <div>{vanData.name} </div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                                <div className='fw-bold'> Vehicle No</div>
                                                <div>{vanData.vehicleno} </div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                                <div className='fw-bold'> Vehicle Type</div>
                                                <div> {vanData.vehicletype} </div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                                <div className='fw-bold'> Seats</div>
                                                <div> {vanData.seats} </div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                                <div className='fw-bold'> Charge</div>
                                                <div> {vanData.charge} </div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                                <div className='fw-bold'> Contact</div>
                                                <div> {vanData.contact} </div>
                                    </div>
                                    
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant="primary" onClick={() => handleName(vanData)}>
                                View More
                            </Button>
                        </Card.Footer>
                        </Card>
                            <Modal key={vehicle}
                                data={vehicle}
                                show={show}
                                size='lg'
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                    {vehicle.vehicleno}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container className="d-flex gap-5">
                                        <div>
                                            <img src={vehicle.frontimage} />
                                        </div>
                                        <div>
                                            <div className="mb-2">Vehicle Details</div>
                                            <div className='d-flex flex-row'>
                                                        <div className='fw-bold'> Vehicle No</div>
                                                        <div>{vehicle.vehicleno} </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                        <div className='fw-bold'> Vehicle Type</div>
                                                        <div> {vehicle.vehicletype} </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                        <div className='fw-bold'> Seats</div>
                                                        <div> {vehicle.seats} </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                        <div className='fw-bold'> Charge</div>
                                                        <div> {vehicle.charge} </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                        <div className='fw-bold'> Destination Schools</div>
                                                        <div> {vehicle.tag_array} </div>
                                            </div>
                                            <div className="mt-3 mb-2">Owner Details</div>
                                            <div className='d-flex flex-row'>
                                                        <div className='fw-bold'> Name</div>
                                                        <div>{vehicle.name} </div>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                        <div className='fw-bold'> Contact</div>
                                                        <div> {vehicle.contact} </div>
                                            </div>
                                            

                                            <div className="d-flex flex-direction-column gap-3 mt-3 ">
                                            <Button variant="success" onClick={() =>acceptRequest(vehicle.id)}>
                                                    Accept
                                            </Button>
                                            <Button variant="danger">
                                                    Reject
                                            </Button>
                                            </div>
                                        </div>
                                    </Container>
                                </Modal.Body>
                                </Modal>
                                
                    </Col>
                                ))}
                                
                    <Col sm={6} className="mt-5 d-flex justify-content-center" >
             <ReactPaginate
                ref={pagination}
                pageCount={pageCount}
                pageRangeDisplayed={4}
                marginPagesDisplayed={1}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
                pageLinkClassName="page-link"
                breakLinkClassName="page-link"
                nextLinkClassName="page-link"
                previousLinkClassName="page-link"
                pageClassName="page-item"
                breakClassName="page-item"
                nextClassName="page-item"
                previousClassName="page-item"
                previousLabel={<>&laquo;</>}
                nextLabel={<>&raquo;</>}
            />
            </Col>
            </Row>
            
        </Container>

    // <Container>
    //     njnjnjc
    // </Container>
  )
}

export default Varification