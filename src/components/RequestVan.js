import React, {useState,useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import apiClient from '../Services/ApiClient';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function RequestVan (props) {
  const [Requestschools,setRequestschools]=useState([]);
  const [showsuccess, setShowSuccess] = useState(false);
  const [showerror, setShowError] = useState(false);

  async function requestSchoolVan(child,charge,van) {
    if(van>0){
      setShowError(true);
    }
    else {
    const{dataresponse,error} = await apiClient.requestSchoolVan({
        vanid : props.vanid,
        studentid:child,
        monthlycharge:charge
    })
    if (dataresponse) {
      setShowSuccess(true);
    } else {
      // toast("Email or Password is incorrect!");
      
      // setTimeout(() => {
      //   window.location.href = "/log-in";
      // }, 2000);
    }
  }
    
}

  useEffect(() => {
    async function getRequestSchools() {
        const{dataresponse,error} = await apiClient.getrequestSchools({
            vanid : props.vanid
        })
        console.log(dataresponse)
        setRequestschools(dataresponse.result)
        
    }
        getRequestSchools();   
    
    }, [props.vanid]);

 
 return (
    <Modal {...props} centered>
    <Modal.Header closeButton>
      <Modal.Title className='text-center'>Request Vehicle</Modal.Title>
    </Modal.Header>

    {/* Alert Function to Show Success of Request */}
    <Alert className='mt-0 p-3' show ={showsuccess} variant="success" onClose={() => setShowSuccess(false)} dismissible>
        <p className='mb-0 mt-0'>Request Sent !</p>
      </Alert>

      {/* Alert Function to Show Difficulty to Request */}
    <Alert className='mt-0 p-3' show ={showerror} variant="success" onClose={() => setShowError(false)} dismissible>
        <p className='mb-0 mt-0'> Leave From the Van already assigned!</p>
      </Alert>

    <Modal.Body>
    <ListGroup variant="flush">
        {Requestschools.map((child)=>{
                        // console.log(data)
                        return  (
                          <ListGroup.Item key ={child.id} className='d-flex justify-content-around my-2 p-3 fw-bold bg-secondary bg-light border-bottom'><span>{child.fullname}</span><span>{child.monthly_charge}</span> <span>{(child.vanid == props.vanid) ?<Button className='bg-warning'>Leave</Button>:<Button className='' onClick={() =>requestSchoolVan(child.id,child.monthly_charge,child.vanid)}>Request</Button>}</span></ListGroup.Item>
                        )
                    })}
      </ListGroup>
    </Modal.Body>
    <Modal.Footer className='d-flex flex-row gap-5 justify-content-center'>

  </Modal.Footer>
  </Modal>
  
  
  )
}
