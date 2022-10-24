
import React, { useEffect, useState ,useRef} from 'react'
import { Card, Row, Col, Container,Table} from "react-bootstrap";
import ReactPaginate from 'react-paginate';

const Verified = () => {
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
    const itemsPerPage = 4;
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
            <Row >
                {currentItems.map((vanData, k) => (
                    <Col key={k} xs={12} md={4} lg={3} className='mt-5'>
                        <Card >
                            

                            <Card.Body>
                                <Card.Title>{vanData.name}</Card.Title>
                                <Card.Text>has sent a request</Card.Text>
                                <Table borderless>
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>: {vanData.name}</td>
                                            </tr>
                                            <tr>
                                                <td>ID No</td>
                                                <td>: {vanData.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact</td>
                                                <td>: {vanData.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Bank Acc</td>
                                                <td>: {vanData.name}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>School van hire permit</td>
                                            </tr>
                                            
                                        </tbody>
                                </Table>
                                <Card.Img className='mb-2'src="https://via.placeholder.com/150x75" />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
  )
}

export default Verified