import './App.css';
import * as React from 'react';
import {useState,useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import apiClient from './Services/ApiClient';
//import Navbar from './components/Navbar';

//Landing pages
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Signup from './pages/Signup';

//OwnerComponents

import OwnerAdvertisements from './pages/school-van-owner/OwnerAdvertisements';
import OwnerProfile from './pages/school-van-owner/OwnerProfile';
import OwnerEditProfile from './pages/school-van-owner/OwnerEditProfile'
import OwnerDashboard from './pages/school-van-owner/OwnerDashboard';
import OwnerSchoolVans from './pages/school-van-owner/OwnerSchoolVans';
import OwnerAddNewVehicle from './pages/school-van-owner/OwnerAddNewVehicle';
import OwnerComplaints from './pages/school-van-owner/OwnerComplaints';
import OwnerPayments from './pages/school-van-owner/OwnerPayments';
import OwnerRequests from './pages/school-van-owner/OwnerRequests';
import OwnerReviews from './pages/school-van-owner/OwnerReviews';
import OwnerDriverProfile from './pages/school-van-owner/OwnerDriverProfile';
import OwnerDriverEditProfile from './pages/school-van-owner/OwnerDriverEditProfile';

import AdminNavbar from './pages/Admin/AdminNavbar'

//ParentComponents
import ParentDashboard from './pages/Parent/dashboard';
import ParentRouteChild from './pages/Parent/RouteChild';
import ParentMyChildren from './pages/Parent/children';
import ParentAddChild from './pages/Parent/AddChild'
import ParentVehicleView from './pages/Parent/VehicleView';
import NewChildren from './pages/Parent/Childrennovan';

//Admin Components
import AdminDashboard from './pages/Admin/Dashboard';
import AdminComplaints from './pages/Admin/Complaints';
import AdminRequests from './pages/Admin/Requests';



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userrole, setUserrole] = useState({});
  const [id, setId] = useState(null);

  const setAuth = (Boolean) => {
    setIsAuthenticated(Boolean);
  };

  async function isAuth() {
    const token = apiClient.getToken();
    if (token) {
    try {
      const { dataresponse, error } = await apiClient.isVerify ({
      });
      console.log(dataresponse);
      // setId(dataresponse.payload);
      setUserrole(dataresponse.result);

      dataresponse.status === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  }
  // async function getUser(userid) {
  //   const { dataresponse, error } = await apiClient.getUsertype ({
  //     username:userid,
  //   });
  //   setUserrole(dataresponse);
  // }

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <>
    <BrowserRouter>
        <Routes>
            {/*Landing Pages */}
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/FAQ' element={<FAQ />}/>
          <Route path='/log-in' element={<Login />}/>

          <Route path='/sign-up' element={<Signup />}/>

       
          


          {/* <Route path='/OwnerAdvertisetments' element={<OwnerAdvertisetments />}/>

          <Route path='/OwnerAdvertisements' element={<OwnerAdvertisements />}/>


          <Route path='/OwnerSchoolVans' element={<OwnerSchoolVans />}/>
          <Route path='/OwnerProfile' element={<OwnerProfile />}/>
          <Route path='/OwnerEditProfile' element={<OwnerEditProfile/>}/>
          <Route path='/OwnerAddNewVehicle' element={<OwnerAddNewVehicle />}/>
          <Route path='/OwnerComplaints' element={<OwnerComplaints />}/>
          <Route path='/OwnerReviews' element={<OwnerReviews />}/>
          <Route path='/OwnerPayments' element={<OwnerPayments />}/>
          <Route path='/OwnerRequests' element={<OwnerRequests />}/> */}

          {/* <Route path='/OwnerDriverProfile' element={<Owner_DriverProfile />}/> */}
          
          {/* <Route path='/OwnerDashboard' element={<OwnerDashboard />}/>

          <Route path='/OwnerDriverProfile' element={<OwnerDriverProfile />}/> */}
          {/* <Route path='/OwnerDashboard' element={<OwnerDashboard/>}/> */}
          {/* <Route path='/OwnerDriverEditProfile' element={<OwnerDriverEditProfile />}/>

          <Route path='/sign-up' element={<Signup />}/>

          <Route path='/ParentDashboard' element={<ParentDashboard />}/>
          <Route path='/MyChildren' element={<ParentMyChildren/>}/>
          <Route path='/AddChild' element={<ParentAddChild/>}/>
          <Route path='/VehicleView' element={<ParentVehicleView/>}/>
          <Route path='/NewChildren' element={<NewChildren/>}/>

          <Route  path="/Dashboard" element={<Dashboard />}  />
          <Route path="/Requests" element={<Requests/>}/>
          <Route path="/Complaints" element={<Complaints />} />

          <Route path='/RouteChild' element={<ParentRouteChild/>}/> */}

        {/* Login routes */}
        <Route
          path="/dashboard"
          element={
            userrole === "Admin" ? (
              <AdminDashboard />
            ) : userrole === "Parent" ? (
              <ParentDashboard />
            ) : userrole === "Owner" ? (
              <OwnerDashboard />
            ) : (
              <Login />
            )
          }
        />

        {/*Admin pages */}
        
        <Route
          exact
          path="/adminrequests"
          element={
            isAuthenticated && userrole === "am" ? (
              <AdminRequests />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/adminrequests"
          element={
            isAuthenticated && userrole === "Admin" ? (
              <AdminComplaints />
            ) : (
              <Login />
            )
          }
        />

        {/*Parent pages */}
        <Route
          exact
          path="/parentvehicleview"
          element={
            isAuthenticated && userrole === "Parent" ? (
              <ParentVehicleView />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/parentmychildren"
          element={
            isAuthenticated && userrole === "Parent" ? (
              <ParentMyChildren />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/parentaddchildren"
          element={
            isAuthenticated && userrole === "Parent" ? (
              <ParentAddChild />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/parentroute"
          element={
            isAuthenticated && userrole === "Parent" ? (
              <ParentRouteChild />
            ) : (
              <Login />
            )
          }
        />

        {/* Owner Pages*/}
        <Route
          exact
          path="/owneradvertisements"
          element={
            isAuthenticated && userrole === "Owner" ? (
              <OwnerAdvertisements />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/ownerschoolvans"
          element={
            isAuthenticated && userrole === "Owner" ? (
              <OwnerSchoolVans />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/ownerprofile"
          element={
            isAuthenticated && userrole === "Owner" ? (
              <OwnerProfile />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/owneraddnewvehicle"
          element={
            isAuthenticated && userrole === "Owner" ? (
              <OwnerAddNewVehicle />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/ownercomplaints"
          element={
            isAuthenticated && userrole === "Owner" ? (
              <OwnerComplaints />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/ownerreviews"
          element={
            isAuthenticated && userrole === "Owner" ? (
              <OwnerReviews />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/ownerpayments"
          element={
            isAuthenticated && userrole === "Owner" ? (
              <OwnerPayments />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/ownerrequests"
          element={
            isAuthenticated && userrole === "Owner" ? (
              <OwnerRequests />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/ownerdriverprofile"
          element={
            isAuthenticated && userrole === "Owner" ? (
              <OwnerDriverProfile />
            ) : (
              <Login />
            )
          }
        />



          {/* <Route  path="/Dashboard" element={<Dashboard />}  />
          <Route path="/Requests" element={<Requests/>}/>
          <Route path="/Complaints" element={<Complaints />} />
          <Route path='/AdminNavbar' element={<AdminNavbar/>}/> */}


        </Routes>
    </BrowserRouter>
    </>      
  );
}

export default App;
