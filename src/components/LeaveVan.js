import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function LeaveVan (props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
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
        <Button className="w-25" onClick={props.onHide}>Yes</Button>
        <Button className="w-25" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}

