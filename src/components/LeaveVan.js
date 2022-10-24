import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import apiClient from '../Services/ApiClient';
import Alert from 'react-bootstrap/Alert';

export default function LeaveVan (props) {
  console.log(props.status)

  const [showsuccess, setShowSuccess] = useState(false);
  const [showerror, setShowError] = useState(false);

  //Function to leave School Van
  async function leaveSchoolVan(status) {
    if(status){
      console.log(status)
      setShowError(true);
    }
    else {
    const{dataresponse,error} = await apiClient.leaveSchoolVan({
        studentid:props.student
    })
    if (dataresponse) {
      setShowSuccess(true);
      // props.onHide();
    } else {
  
    }
  }
  
}



  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* Alert Function to Show Success of Request */}
    <Alert className='mt-0 p-3' show ={showsuccess} variant="success" onClose={() => setShowSuccess(false)} dismissible>
        <p className='mb-0 mt-0'> Successfully Removed From the Van !</p>
      </Alert>

      {/* Alert Function to Show Difficulty to Request */}
    <Alert className='mt-0 p-3' show ={showerror} variant="success" onClose={() => setShowError(false)} dismissible>
        <p className='mb-0 mt-0'> Please Pay the Amount due !</p>
      </Alert>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Leave From this Van
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure that you want to remove from this van ?
        </p>
      </Modal.Body>
      <Modal.Footer className='d-flex flex-row justify-content-center'>
        <Button className="w-25" onClick={() =>leaveSchoolVan(props.status)}>Yes</Button>
        <Button className="w-25 bg-white" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}

