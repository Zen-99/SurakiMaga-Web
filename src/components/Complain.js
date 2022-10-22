
import React, { useEffect, useState ,useRef} from 'react'
import { Card, Row, Col, Container,Table,Button,ButtonToolbar } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
const Complain = () => {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('https://nba-players.herokuapp.com/players-stats')
        const cData = await response.json()
        setComplaints(cData)
              }
        fetchData()
        }, [])

    console.log(complaints)

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;
    const pagination = useRef();

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(complaints.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(complaints.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,complaints]);

  // Invoke when user click to request another page.
    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % complaints.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    };

  return (
    <Container>
        <Row >
                {currentItems.map((vanData, k) => (
                    <Row key={k}  className='mt-5'>
                        <Card >
                            

                            <Card.Body>
                                <Card.Title>{vanData.name}</Card.Title>
                                <Card.Text>has sent a request</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                ))}
            </Row>
            <Row style={{}}>
            <Col sm={6}></Col>
            <Col sm={6} >
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
  )
}

export default Complain;