import React  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import apiClient from '../Services/ApiClient';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';

function OTP(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();

      const location = useLocation();
      const dataregister = location.state;
      console.log(dataregister);
 
  const onSubmitOtp =async (data,e) => {
    console.log(data);
    e.preventDefault();
      const { dataresponse, error } = await apiClient.registerUser({
        otp : data['otp']
    })
    props.onHide();
      // const parseRes = await response.json();
      console.log(dataresponse);
      if (dataresponse) {
        reset();
        // localStorage.setItem("token", parseRes.jwtToken);
        // setAuth(true);
       
      } else {
        alert(error);
        alert("error in making OTP");

      }
    }

  return (
    <>

      <Modal {...props} className='mt-5'>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmitOtp)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
              label="otp"
              >Enter the OTP that we've sent you</Form.Label>
              <Form.Control
                name="otp"
                type="text"
                placeholder="123456"
                {...register("otp", { required: "Otp is Required" })}
              />
              {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}
            </Form.Group>
          
        {/* </Modal.Body>
        <Modal.Footer> */}
        <div className='d-flex gap-5'>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OTP;
