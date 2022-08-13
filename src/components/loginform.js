import React, { useState}  from 'react';
import ReactDOM from 'react-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../pages/Home.css';
import '../pages/Login.css'



function Loginform(props) {

  
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    username: ""
  });

  
  var type = props.type;
  const { email, password, username } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name] : e.target.value });

  const onSubmitForm = async e => {
    // alert(props.type);
    e.preventDefault();
    try {
      const body = { email, password, username,type};
      const response = await fetch(
        "http://localhost:3001/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();
      console.log(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  };
    return (
        <>
        
      <Form className="px-5 py-3 login-form" onSubmit={onSubmitForm}>
     
        <Form.Group className="mb-2" controlId="formBasicfullname">
          <FloatingLabel
            controlId="floatingInput"
            label="Full Name"
            className="mb-1"
          >
            <Form.Control type="text" name="username" value={username}  placeholder="Full Name"
          onChange={e => onChange(e)} />
          </FloatingLabel>
        </Form.Group> 

        <Form.Group className="mb-2" controlId="formBasicemail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-1"
          >
            <Form.Control type="email" name="email"  placeholder="Email" value={email}
          onChange={e => onChange(e)} />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicpassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-1"
          >
            <Form.Control type="password" name="password"  placeholder="Password" value={password}
          onChange={e => onChange(e)}/>
          </FloatingLabel>
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
           Already have an account ? Login
        </p>
      </Form> 
    
      

       </>
    );
  
}

export default Loginform