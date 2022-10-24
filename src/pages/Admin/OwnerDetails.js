import React ,{useEffect, useState} from 'react';
import AdminNavbar from './AdminNavbar'
import Table from 'react-bootstrap/Table';
import { Container,Button,Modal } from 'react-bootstrap';
import apiClient from '../../Services/ApiClient'


function OwnerDetails() {
    const [ownershow, setOwnerShow] = useState(false);
    const [owner, setOwner] = useState("");
    const handleOwner = (name) => {
    setOwner(name);
    setOwnerShow(true);
  };

//Function to get details of Owners
async function getOwners() {
    const{dataresponse,error} = await apiClient.getOwnersDetails();
    console.log(dataresponse.result)
    setOwner(dataresponse.result)
    
}

    useEffect(() => {   
        getOwners();
    }, []);


    return (
        <>
        <div className="home">
        <AdminNavbar/>
            <Container className="  mt-4">
                <h4>Owners</h4>
                <div className='p-3'>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Contact</th>
                            <th>Vans</th>
                            <th>Email</th>
                            <th>-</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>Doe</td>
                            <td><Button onClick={() => handleOwner('vanData')}>View More</Button></td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td>Doe</td>
                            <td><Button>View More</Button></td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td>Doe</td>
                            <td><Button>View More</Button></td>
                        </tr>
                        </tbody>
                    </table>
                
                {/* Modal to show the owner details */}
                    <Modal
                            data={owner}
                            show={ownershow}
                            onHide={() => setOwnerShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                            size="xl"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Custom Modal Styling
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex">
                        <div>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibuipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                        </div>
                        
                        </Modal.Body>
                    </Modal>
                </div>
            </Container>
      </div>

      </>
    );
  
}

export default OwnerDetails;