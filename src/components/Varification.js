
import React, { useEffect, useState ,useRef} from 'react'
import { Card, Row, Col, Container,Table,Button,ButtonToolbar } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
//import "bootstrap/scss/bootstrap.scss";

const Varification = () => {
    const [vanData, setVanData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('https://nba-players.herokuapp.com/players-stats')
        const nbaData = await response.json()
        setVanData(nbaData)
              }
        fetchData()
        }, [])

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
                            <Card.Header>Header</Card.Header>
                        
                            <Card.Img variant="top" src="https://via.placeholder.com/150x75" />
                        <Card.Body>
                            <Card.Title >Card title</Card.Title>
                            <Card.Text>
                                    <div className='d-flex flex-row'>
                                                <div className=''> Vehicle No</div>
                                                <div> WP - 9087</div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                                <div className=''> Vehicle Type</div>
                                                <div> WP - 9087</div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                                <div className=''> Seats</div>
                                                <div> WP - 9087</div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                                <div className=''> Charge</div>
                                                <div> WP - 9087</div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                                <div className=''> Contact</div>
                                                <div> WP - 9087</div>
                                    </div>
                                    
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        </Card>
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