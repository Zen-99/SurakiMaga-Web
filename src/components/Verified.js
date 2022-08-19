
import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container,Table} from "react-bootstrap";

const Verified = () => {
    const [vanData, setVanData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('https://nba-players.herokuapp.com/players-stats')
        const nbaData = await response.json()
        setVanData(nbaData.slice(0, 15))
              }
        fetchData()
        }, [])

    console.log(vanData)

  return (
    <Container>
            <Row >
                {vanData.map((vanData, k) => (
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