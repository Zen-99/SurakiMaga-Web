import React from "react";
import "./dashboard.css";
import ParentNavbar from "../../components/ParentNavbar";
import SearchItem from "../../components/SearchItem";


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
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>School</label>
              <input placeholder='Enter School' type="text" />
            </div>
            <div className="lsItem">
            </div>
            <div className="lsItem">
            </div>
            <button>Search</button>
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