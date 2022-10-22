import React, {useState,useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import apiClient from '../Services/ApiClient';
import { Link} from "react-router-dom";

export default function RequestVan (props) {
  const [Requestschools,setRequestschools]=useState([]);

  useEffect(() => {
    async function getRequestSchools() {
        const{dataresponse,error} = await apiClient.getrequestSchools({
            vanid : props.vanid
        })
        console.log(dataresponse)
        setRequestschools(dataresponse.result)
        
    }
        getRequestSchools();   
    
    }, [props.vanid]);

 
 return (
    <Modal {...props} centered>
    <Modal.Header closeButton>
      <Modal.Title className='text-center'>Request Vehicle</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <ListGroup variant="flush">
        {/* <ListGroup.Item className='my-2 p-3 fw-bold bg-secondary bg-light border-bottom'>Roshan Senevirathne</ListGroup.Item>
        <ListGroup.Item className='p-3 fw-bold bg-secondary bg-light'>Dilshi Navodya</ListGroup.Item> */}
        {Requestschools.map((child)=>{
                        // console.log(data)
                        return  (
                            <li>{child.fullname}</li>
                        )
                    })}
      </ListGroup>
    </Modal.Body>
    <Modal.Footer className='d-flex flex-row gap-5 justify-content-center'>

  </Modal.Footer>
  </Modal>
  
  
  )
}
