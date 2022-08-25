import React from "react";
import "./dashboard.css";
import ParentNavbar from "../../components/ParentNavbar";
import SearchItem from "../../components/SearchItem";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


const ParentDashboard = () => {
//   const location = useLocation();
//   const [destination, setDestination] = useState(location.state.destination);
//   const [date, setDate] = useState(location.state.date);
//   const [openDate, setOpenDate] = useState(false);
//   const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <ParentNavbar />
      <div className="d-flex justify-content-center mt-20">
        <div className="d-flex w-75 gap-3">
          <div className="listSearch">
            <h1 className="lsTitle text-center">Search the Ideal Vehicle for your child</h1>
            <div className="lsItem">
            <Form.Group>
            <Form.Label>Search</Form.Label>
        <Form.Control 
          type="text" 
          name="username" 
          placeholder="Search"/>  
      </Form.Group>
            </div>
            <div className="lsItem">
              <Form.Group>
                <Form.Label> Select the Pickup Location</Form.Label>
              
            <Form.Select aria-label="Default select example">
              <option>Select Location</option>
              <option value="1">Moratuwa Bus Stand</option>
              <option value="2">University of Moratuwa</option>
              <option value="3">Maliban</option>
            </Form.Select>
            </Form.Group>
            </div>
            <div className="lsItem">
              <Form.Group>
                <Form.Label>Category</Form.Label>
                  <Form.Check
                  inline
                  label="Bus"
                  name="group1"
                />
                 <Form.Check
                  inline
                  label="Van"
                  name="Van"
                />
                 <Form.Check
                  inline
                  label="Air Conditioned"
                  name="Air Conditioned"
                />
                 <Form.Check
                  inline
                  label="FM Radio"
                  name="FM Radio"
                />
          </Form.Group>
            </div>
            <Button className="mt-2">Search</Button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;