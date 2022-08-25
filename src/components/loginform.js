import React, { useRef,useState}  from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link} from "react-router-dom";
import apiClient from '../Services/ApiClient';
import '../pages/Home.css';
import '../pages/Login.css';
import { useForm } from "react-hook-form";
import OTP from './OTP';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";



function Loginform(props) {

  const [modalShow, setModalShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  // const onSubmitForm =async (data,e) => {
  //   console.log(data);
  //   e.preventDefault();
  //     const { dataresponse, error } = await apiClient.sendOtp({
  //        type     : props.type,
  //        username : data['username'],
  //        contact  : data['contact'],
  //        password : data['password']
  //   })
  //     // const parseRes = await response.json();
  //     console.log(dataresponse);
  //     if (dataresponse) {
  //       alert(dataresponse.respond);
  //       setModalShow(true);
        

  //       reset();
  //       // localStorage.setItem("token", parseRes.jwtToken);
  //       // setAuth(true);
  //       // toast.success("Logged in Successfully");
  //     } else {
  //       // setAuth(false);
  //       alert(error);
  //     }
  //   }

    const onSubmitForm =async (data,e) => {
      console.log(data);
      e.preventDefault();
        const { dataresponse, error } = await apiClient.registerUser({
           type     : props.type,
           username : data['username'],
           contact  : data['contact'],
           password : data['password']
      })
        // const parseRes = await response.json();
        console.log(dataresponse);
        if (dataresponse) {
          alert(dataresponse.respond.id);
          // setModalShow(true);
          
  
          reset();
          // localStorage.setItem("token", parseRes.jwtToken);
          // setAuth(true);
          // toast.success("Logged in Successfully");
        } else {
          // setAuth(false);
          alert(error);
        }
      }

    return (
        <>
         {/* <ToastContainer autoClose={2000} /> */}
      <Form className="px-5 py-3 login-form" onSubmit={handleSubmit(onSubmitForm)}>
     
        <Form.Group className="mb-2" controlId="formBasicfullname">
          <FloatingLabel
            controlId="floatingInput"
            label="User Name"
            className="mb-1"
          >
            <Form.Control 
              type="text" 
              name="username" 
              // value={username}  
              placeholder="User Name"
              // onChange={e => onChange(e)}
              {...register("username", { required: "Username is Required" })} 
              onKeyUp={() => {
                trigger("username");
              }}/>
          </FloatingLabel>
          
            {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}
        </Form.Group> 

        <Form.Group className="mb-2" controlId="formBasicemail">
          <FloatingLabel
            controlId="floatingInput"
            label="Contact"
            className="mb-1"
          >
            <Form.Control 
              type="text" 
              name="contact"  
              placeholder="Contact Number" 
              // value={contact}
              {...register("contact", { required: "Contact Number is Required" ,
              // pattern: {
              //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //   message: "Invalid Contact Number",
              // }
            })}
              onKeyUp={() => {
                trigger("contact");
              }} />
          </FloatingLabel>
          {errors.contact && (
                <small className="text-danger">{errors.contact.message}</small>
              )}
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicpassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-1"
          >
            <Form.Control 
              type="password" 
              name="password"  
              placeholder="Password" 
              {...register("password", {
                required: "Password is required",
                minLength: 5,
                maxLength: 20,
              })}
              onKeyUp={() => {
                trigger("password");
              }}
            />
          </FloatingLabel>
          {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicconfirmpassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Confirm Password"
            className="mb-1"
          >
            <Form.Control 
            type="password"
            name="confirmpassword" 
            placeholder="Confirm Password"
            {...register("confirmpassword", {
              validate: (value) =>
                value === password.current ||
                "The passwords do not match",
            })}
             />
          </FloatingLabel>
          {errors.confirmpassword && (
                <small className="text-danger">{errors.confirmpassword.message}</small>
              )}
        </Form.Group>

      
       <div  >
       <Button className='btn-primary' type="submit">
         Sign up
       </Button>
       </div>
       <p className="forgot-password text-center mt-2">
           Already have an account ?   <Link to="/log-in">Login</Link>
        </p>
      </Form> 

      <OTP password={password}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    
      

       </>
    );
  
}

export default Loginform