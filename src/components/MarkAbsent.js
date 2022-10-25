import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import apiClient from '../Services/ApiClient';

export default function MarkAbsent(props) {
  const [checkedState, setCheckedState] = useState(
    new Array(2).fill(false)
  );
  const [showsuccess, setShowSuccess] = useState(false);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
  
    setCheckedState(updatedCheckedState);
  }

  async function markAbsent() {
    const{dataresponse,error} = await apiClient.markAbsent({
      studentid:props.student,
      morning : !checkedState[0],
      evening : !checkedState[1]
  });
    console.log(dataresponse.result)
    if(dataresponse.result){
      setShowSuccess(true);
    }
    
}

  return (
    <Modal {...props} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Mark Absent</Modal.Title>
        </Modal.Header>
        {/* Alert Function to Show Success of Request */}
                <Alert className='mt-0 p-3' show ={showsuccess} variant="success" onClose={() => setShowSuccess(false)} >
                    <p className='mb-0 mt-0'>Submitted Succesfully !</p>
                </Alert>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Date</Form.Label>
              <Form.Control type="date" name="date" placeholder="Date of Birth" />
            </Form.Group>
            <h6 className='my-2 fw-bold'>Morning</h6>
            <div className='d-flex'>
                <div>Confirm absence</div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                     checked={checkedState[0]}
                     onChange={() => handleOnChange(0)}  />
                </Form.Group>
            </div>
            <h6 className='my-2 fw-bold'>Evening</h6>
            <div className='d-flex'>
                <div>Confirm absence</div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" 
                     checked={checkedState[1]}
                     onChange={() => handleOnChange(1)} />
                </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className='d-flex flex-row gap-5 justify-content-center'>
        <Button className="w-25" onClick={markAbsent}>Submit</Button>
        <Button className="w-25 bg-secondary border-secondary" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
      </Modal>
  )
}
