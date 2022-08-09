import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const logo = require('../assests/logo.png');
const profileImage = require('../assests/Faalil.jpeg');


export default function ParentNavbar() {
  return (
    <div >
        <Navbar expand="lg" className='mb-3 bg-secondary bg-light' justify >
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} style={{
            height:'64px',
            width:'64px',
            }} alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="ParentDashboard">School Vans</Nav.Link>
            <NavDropdown title="My Children" id="basic-nav-dropdown">
              <NavDropdown.Item href="MyChildren">Roshan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dilshi
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="AddChild">
                Add another Child
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Route to School" id="basic-nav-dropdownschool">
              <NavDropdown.Item href="#action/3.1">Roshan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dilshi
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  title={
                        
                        <img className="thumbnail-image ms-5 center" 
                            src={profileImage} 
                            alt="user pic"
                            roundedCircle
    style={{ width: '50px' }}
                        />
                  
                } id="basic-nav-dropdownschool">
              
              <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="AddChild">
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            
            
    </div>
  )
}
