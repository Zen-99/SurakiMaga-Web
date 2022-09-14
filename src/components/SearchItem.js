import React, { Component } from 'react';
import { Link,useLocation} from "react-router-dom";
import "./SearchItem.css";
const homeImage = require('../assests/schoolbus.png');


function SearchItem(props){

  // const location = useLocation();
  // const data = location.state;
  // console.log(data);

  console.log(props.result)

  // console.log(props.id);


  return (
    <div className="searchItem">
      <img
        src={props.result.frontimage}
        alt="School Van"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{props.result.title}</h1>
        <span className="siDistance">{props.result.vehicletype}</span>
        <span className="siTaxiOp">Hey</span>
        <span className="siSubtitle">
          Hybrid Van with Air conditioning
        </span>
        <span className="siFeatures">
          Royal College • Thurstan College • D S Senanayake College
        </span>
        {/* <span className="siCancelOp">Rs.5000/Month</span> */}
        {/* <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span> */}
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{props.result.charge} per Km</span>
          {/* <span className="siTaxOp">Includes taxes and fees</span> */}
          <button className="siCheckButton"> <Link to="/parentvehicleview" state={props.result} >See More Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;