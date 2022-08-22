import React, { Component } from 'react';
import "./SearchItem.css";
import { Link} from "react-router-dom";
const homeImage = require('../assests/schoolbus.png');


const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src={homeImage}
        alt="School Van"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Piliyandala Transport Service</h1>
        <span className="siDistance">School Van</span>
        <span className="siTaxiOp">10 Seats Available</span>
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
          <span className="siPrice">Rs.4500</span>
          {/* <span className="siTaxOp">Includes taxes and fees</span> */}
          <button className="siCheckButton"> <Link to="/VehicleView">See More Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;