import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function MarkAbsent(props) {
  return (
    <Modal {...props} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Mark Absent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Date</Form.Label>
              <Form.Control type="date" name="dob" placeholder="Date of Birth" />
            </Form.Group>
            <h6 className='my-2 fw-bold'>Morning</h6>
            <div className='d-flex'>
                <div>Confirm absence</div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"  />
                </Form.Group>
            </div>
            <h6 className='my-2 fw-bold'>Evening</h6>
            <div className='d-flex'>
                <div>Confirm absence</div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"  />
                </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className='d-flex flex-row gap-5 justify-content-center'>
        <Button className="w-25" onClick={props.onHide}>Submit</Button>
        <Button className="w-25 bg-secondary border-secondary" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
      </Modal>
  )
}
