import React, {useState,useEffect,useMemo} from 'react'
import "./dashboard.css";
import ParentNavbar from "../../components/ParentNavbar";
import SearchItem from "../../components/SearchItem";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import apiClient from '../../Services/ApiClient'
import ReactPaginate from "react-paginate";


const ParentDashboard = () => {

  const [ad,setAd]=useState([]);

  const [pageNumber, setPageNumber] = useState(0);

  const adsPerPage = 3;
  const pagesVisited = pageNumber * adsPerPage;

  const displayads = ad
    .slice(pagesVisited, pagesVisited + adsPerPage)
    .map((schoolad) => {
      return (
        <SearchItem key='{data.id}' result={schoolad} />
      );
    });

  const pageCount = Math.ceil(ad.length / adsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  useEffect(() => {
    async function getSchoolAds() {
        const{dataresponse,error} = await apiClient.getSchoolAdvertisement()
        // console.log(dataresponse)
        setAd(dataresponse.result)
        
    }
    getSchoolAds();
}, []);

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
          </Form.Group>
            </div>
            <Button className="mt-2">Search</Button>
          </div>
          <div className="listResult">
          {/* {ad.map((schoolad)=>{
                        console.log(schoolad)
                        return  (
                          // <h1>{data.id}</h1>
                          <SearchItem key='{data.id}' result={schoolad} />
                          
                        )
              })}
             */}

{displayads}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;