import React,{ useState ,useEffect}  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import{Card,Col} from 'react-bootstrap'
import AdminNavbar from './AdminNavbar'
import apiClient from '../../Services/ApiClient'
import './Dashboard.css'
import BarChart from '../../components/BarChart';
import DoughnutChart from '../../components/DoughnutChart';

const Dashboard = () => {
  const [Dashboardcount,setDashboardcount]=useState([]);

  useEffect(() => {
    async function getDashboardCount() {
        const{dataresponse,error} = await apiClient.getDashboardCount({

        })
        setDashboardcount(dataresponse.result)
    }
    getDashboardCount();
    }, []);

  const [IncomechartData,setIncomechartData] = useState({
    labels: ["May","June","July","August"],
    datasets: [
        {
            label: "Income",
            backgroundColor: ['#FF8C01', '#FF6B18', '#993300'],
            data: [450000,540000,600000,520000],
        }
    ]
})

const [RegchartData,setRegchartData] = useState({
  labels: ["Owners","Parents","School vans"],
  datasets: [
      {
          label: "Registration count",
          backgroundColor: ['#FF8C01', '#FF6B18', '#993300'],
          data: [656834,456334,150000],
      }
  ]
})

  return (
    <div className="home">
    <AdminNavbar/>
    <Container className='d-flex flex-column gap-3 p-4 align-items-center admin-dashboard'>
            <Row className='my-3 justify-content-center' >
                <h3>User Enrollments</h3>
            </Row>
    
    <Row>
          <Col className="md-4 stretch-card grid-margin">
            <Card className="card bg-gradient-danger text-center text-black">
              <div className="card-body userEnrollments-card d-flex flex-column align-items-center">
                <h4 className="font-weight-normal mb-3">School van registered<i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-1">{Dashboardcount.schoolvan}</h2>
              </div>
            </Card>
          </Col>
          <Col className="md-4 stretch-card grid-margin">
            <Card className="bg-gradient-info text-center text-black">
              <div className="card-body userEnrollments-card d-flex flex-column align-items-center">
                <h4 className="font-weight-normal mb-3">Owners registered <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-1">{Dashboardcount.owner}</h2>
                
              </div>
            </Card>
          </Col>
          <Col className="md-4 stretch-card grid-margin">
            <Card className="bg-gradient-info text-center text-black">
              <div className="card-body userEnrollments-card d-flex flex-column align-items-center">
                
                <h4 className="font-weight-normal mb-3">Parents registered <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-1">{Dashboardcount.parent}</h2>
                
              </div>
            </Card>
          </Col>
          </Row>
          <Row className='my-3' >
            <Col>
                {/* <h3>Income</h3> */}
            </Col>
            <Col>
                {/* <h3>Registrations</h3> */}
            </Col>

            </Row>
          <Row className='gap-4 d-flex flex-row'>
            <Col className="md-4 stretch-card grid-margin">
                <Card className='p-4 gap-4 d-flex align-items-center' style={{ width: 800}}>
                  <h3>Income</h3>
                  <BarChart chartData={IncomechartData}/>
                </Card>
            </Col>
            <Col className="md-4 stretch-card grid-margin">
                <Card className='p-4 gap-4 d-flex align-items-center' style={{ width: 400 }}>
                  <h3>Registrations</h3>
                  <DoughnutChart chartData={RegchartData}/>
                </Card>
            </Col>
            
            </Row>
          
          </Container>
          </div>
  );
}

export default Dashboard