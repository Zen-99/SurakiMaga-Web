import React, { useState}  from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link} from "react-router-dom";
import apiClient from '../Services/ApiClient';
import '../pages/Home.css';
import '../pages/Login.css';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";


function Loginform(props) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();


  const [inputs, setInputs] = useState({
    contact: "",
    password: "",
    username: ""
  });

  


  const onChange = e =>
    setInputs({ ...inputs, [e.target.name] : e.target.value });

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
      if (dataresponse) {
        alert("Logged in Success");
        reset();
        // localStorage.setItem("token", parseRes.jwtToken);
        // setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        // setAuth(false);
        alert(error);
        toast.error(error.message);
      }
    }

    return (
        <>
        
      <Form className="px-5 py-3 login-form" onSubmit={handleSubmit(onSubmitForm)}>
     
        <Form.Group className="mb-2" controlId="formBasicfullname">
          <FloatingLabel
            controlId="floatingInput"
            label="Full Name"
            className="mb-1"
          >
            <Form.Control 
              type="text" 
              name="username" 
              // value={username}  
              placeholder="Full Name"
              // onChange={e => onChange(e)}
              {...register("username", { required: "Username is Required" })} />
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
              onChange={e => onChange(e)}
              {...register("contact", { required: "Email is Required" ,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Contact Number",
              }})}
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
              // value={password}
              onChange={e => onChange(e)}
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
            />
          </FloatingLabel>
          {errors.contact && (
                <small className="text-danger">{errors.contact.message}</small>
              )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicconfirmpassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Confirm Password"
            className="mb-1"
          >
            <Form.Control type="password" placeholder="Confirm Password" />
          </FloatingLabel>
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
    
      

       </>
    );
  
}

export default Loginform