import React  from 'react';
// import { Redirect } from "react-router-dom";
import Navbar from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import apiClient from '../Services/ApiClient';
import {useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import './Home.css';
import './Login.css'

const homeImage = require('../assests/schoolbus.png');

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  // const [inputs, setInputs] = useState({
  //   username: "",
  //   password: ""
  // });

  // const { username, password } = inputs;

  // const onChange = e =>
  //   setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async (datasubmit,e) => {
      // console.log("Akila Lula")
      e.preventDefault();
        const { dataresponse, error } = await apiClient.loginUser({
           password : datasubmit["password"] ,
           username : datasubmit["username"]
      })
      console.log(dataresponse)
        // const parseRes = await response.json();
        if (dataresponse.status) {
          console.log(dataresponse.status)
          alert("Logged in Success");
          reset();
          alert(dataresponse.user.type);
          if(dataresponse.user.type=="Parent"){
            navigate('/ParentDashboard');
          }
          else if(dataresponse.user.type=="Admin"){
              navigate('/Dashboard');
          }
          else{
            navigate('/OwnerDashboard');
          }
        } else {
          // setAuth(false);
          console.log(error)
          alert(error);
          // toast.error(error.message);
        }
      };
  
  
    return (
        <>
        <div className="home pt-1 pb-5">
        <Navbar/>
        <div className ="container p-5 d-flex flex-row justify-content-center ">  
        
        <div className='container d-flex flex-row total_login shadow bg-white rounded mt-3'>
        <div >
        <img src={homeImage} alt="school bus" width="500px" height="370px"/>
        </div>
        <div>
      <form className="px-5 py-4 login-form"  onSubmit={handleSubmit(onSubmitForm)}>
      <h2 className='mb-4 text-center'>Welcome Back !</h2>

      <Form.Group className="mb-2" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text" 
          name="username" 
          placeholder="Enter Username"
          {...register("username", { required: "Username is Required" })}/>
          {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          name="password" 
          placeholder="Enter Password"
          {...register("password", { required: "Password is Required" })}/>
          {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )} 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      
      <div class="d-flex justify-content-center">
      <Button className='btn-primary w-50 centering logbutton' type="submit">
        Log in
      </Button>
      </div>
      <p className="forgot-password text-center mt-2">
          Forgot password?
        </p>
      </form>
      </div>
      </div>
      </div>
      </div>

      </>
    );
  
}

export default Login;