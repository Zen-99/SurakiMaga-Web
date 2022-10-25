import React,{useState,useEffect} from 'react';
import ParentNavbar from '../../components/ParentNavbar';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import apiClient from '../../Services/ApiClient';
import Axios from "axios";

function AddChild() {
    function refreshPage() {
        window.location.reload(false);
      }
    const [value, setValue] = useState(null);
    const [school,setSchool]=useState([])
    const [form,setForm]=useState({
        name:"",
        school: "",
        dob: "",
        longitude: 6.905597,
        latitude:79.873388
    })
    const [file, setFile] = useState("");
    const [formError, setFormError] = useState({
        name:null,
        school: null,
        dob : null,
        location: null,
        img:null

      });
  useEffect(() => {
    async function getSchoolnames() { 
        const{dataresponse,error} = await apiClient.getSchool();
        console.log(dataresponse)
        setSchool(dataresponse.result)
        
    }
    getSchoolnames();
}, []);
const submitDetails = () => {
    if(form.name ===""){
        let msg = "name can't be empty."
        setFormError({name:msg,school: null,dob: null,location: null,img:null})
    } else if (form.school ===""){
        let msg = "select a school"
        setFormError({name:null,school:msg,dob: null,location: null,img:null})
    } else if (form.dob ===""){
        let msg = "enter birthday"
        setFormError({name:null,school:null,dob: msg,location: null,img:null})
    } else if (form.longitude ===""){
        let msg = "select location"
        setFormError({name:null,school:null,dob: null,location: msg,img:null})
    } else if (file ===""){
        let msg = "image is required"
        setFormError({name:null,school:null,dob: null,location: null,img:msg})
    } else {
        console.log("else")
        console.log(form)
        const formData=new FormData();
        formData.append("file",file); 
        formData.append("upload_preset","dskmbhbt");
        Axios.post("https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",formData)
        .then((response)=>{
            const { dataresponse, error } = apiClient.addChild({
                name:form.name,
                school: form.school,
                dob: form.dob,
                longitude: form.longitude,
                latitude:form.latitude,
                url:response.data.secure_url
        })
        setFile(null)
        setForm({name:"",school: "",dob: "",longitude: "",latitude:""})
        setFormError({name:null,school:null,dob: null,location: null,img:null})
        refreshPage()
        })
    }
}
  return (
    <>
    <ParentNavbar />
    <Container className='p-3'>
        {/* <h3 className='text-center'> Add A Child</h3> */}
            <Container className='d-flex flex-row border shadow bg-white rounded'>
                <div className='d-flex flex-column'>
                    <div className='px-5 py-3'> 
                    <h4 className='mb-4 text-center'>Add an image of your child </h4>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                    <div className="border border-warning rounded-circle" style={{ width: 300, height: 300, margin: 50 }}>
                        <div className="h-100 d-flex justify-content-center align-items-center">
                        
                        <Form.Group controlId="formFile" className="mb-3 text-center p-4">
                            <Form.Label>Upload Image of your child</Form.Label>
                            <Form.Control type="file" onChange={(event)=>{setFile(event.target.files[0])}}/>
                            <div className="errors">{formError.img}</div>
                        </Form.Group>
                    
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                <Container className="px-5 py-3">
                    <h4 className='mb-4'>Add the Details of your Child</h4>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name of the Child</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name of the Child" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value})}/>
                        <div className="errors">{formError.name}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSchool">
                        <Form.Label>School</Form.Label>
                        <Form.Select aria-label="Default select example" className='form_select' onChange={(e) => setForm({ ...form, school: e.target.value})}>
                            <option>Select School</option>
                            {school.map((data)=>{
                                    console.log(data)
                                            return  (
                                                <option value={data.id}>{data.name}</option>
                                                    )
                            })}
                            
                            </Form.Select>
                            <div className="errors">{formError.school}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>DOB</Form.Label>
                        <Form.Control type="date" placeholder="Enter Age" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value})}/>
                        <div className="errors">{formError.dob}</div>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicLocation">
                        <Form.Label>Pickup Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter Pickup Location" />
                    </Form.Group>

                    {/* <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: setValue,
        }}
      /> */}
                  
                    <div class="d-flex justify-content-center">
                    <Button className='btn-primary w-50 centering' type="submit" onClick={submitDetails}>
                        Submit
                    </Button>
                    </div>
                    </Container>
                </div>
            </Container>
    </Container>
    
    </>
  );
}

export default AddChild;
