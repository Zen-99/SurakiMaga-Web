import React ,{useState}from 'react'
import Cancelation from '../components/Cancelation'
import Varification from '../components/Varification'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Verified from '../components/Verified';


const Requests = () => {
    const [key, setKey] = useState('varification')

    return (
        <>
        <Container>
            <Row className="text-center">
                <h2>Requests</h2>
            </Row>
        </Container>
        <Tabs
            id="request-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            justify
        >
        <Tab eventKey="varification" title="New Requests">
            <Varification/>
        </Tab>
        <Tab eventKey="verified" title="Verified">
            <Verified/>
        </Tab>
        <Tab eventKey="canceled" title="Canceled">
            <Cancelation/>
        </Tab>
        </Tabs>
        </>
    )
}

export default Requests