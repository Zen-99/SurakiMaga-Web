import './App.css';
//import Navbar from './components/Navbar';
import Home from './pages/Home';
import * as React from 'react';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import OwnerAdvertiestments from './pages/school-van-owner/OwnerAdvertiestments';
import OwnerProfile from './pages/school-van-owner/OwnerProfile';
import OwnerEditProfile from './pages/school-van-owner/OwnerEditProfile'
import Signup from './pages/Signup';
import ParentDashboard from './pages/Parent/dashboard';
import OwnerDashboard from './pages/school-van-owner/OwnerDashboard';
import MyChildren from './pages/Parent/children';
import AddChild from './pages/Parent/AddChild'
import ParentNavbar from './components/ParentNavbar';
import VehicleView from './pages/Parent/VehicleView';

import Dashboard from './pages/Admin/Dashboard';
import Complaints from './pages/Admin/Complaints';
import Requests from './pages/Admin/Requests';

import RouteChild from './pages/Parent/RouteChild';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import OwnerSchoolVans from './pages/school-van-owner/OwnerSchoolVans';
import OwnerAddNewVehicle from './pages/school-van-owner/OwnerAddNewVehicle';
import OwnerComplaints from './pages/school-van-owner/OwnerComplaints';
import OwnerPayments from './pages/school-van-owner/OwnerPayments';
import OwnerRequests from './pages/school-van-owner/OwnerRequests';
import OwnerReviews from './pages/school-van-owner/OwnerReviews';
import OwnerDriverProfile from './pages/school-van-owner/OwnerDriverProfile';

import AdminNavbar from './pages/Admin/AdminNavbar'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/FAQ' element={<FAQ />}/>
          <Route path='/log-in' element={<Login />}/>
          <Route path='/OwnerAdvertiestments' element={<OwnerAdvertiestments />}/>
          <Route path='/OwnerSchoolVans' element={<OwnerSchoolVans />}/>
          <Route path='/OwnerProfile' element={<OwnerProfile />}/>
          <Route path='/OwnerEditProfile' element={<OwnerEditProfile/>}/>
          <Route path='/OwnerAddNewVehicle' element={<OwnerAddNewVehicle />}/>
          <Route path='/OwnerComplaints' element={<OwnerComplaints />}/>
          <Route path='/OwnerReviews' element={<OwnerReviews />}/>
          <Route path='/OwnerPayments' element={<OwnerPayments />}/>
          <Route path='/OwnerRequests' element={<OwnerRequests />}/>
          <Route path='/OwnerDriverProfile' element={<OwnerDriverProfile />}/>
          <Route path='/OwnerDadhboard' element={<OwnerDashboard/>}/>
          <Route path='/sign-up' element={<Signup />}/>
          <Route path='/OwnerDashboard' element={<OwnerDashboard />}/>
          <Route path='/ParentDashboard' element={<ParentDashboard />}/>
          <Route path='/MyChildren' element={<MyChildren/>}/>
          <Route path='/AddChild' element={<AddChild/>}/>
          <Route path='/ParentNavbar' element={<ParentNavbar/>}/>
          <Route path='/VehicleView' element={<VehicleView/>}/>

          <Route  path="/Dashboard" element={<Dashboard />}  />
          <Route path="/Requests" element={<Requests/>}/>
          <Route path="/Complaints" element={<Complaints />} />
          <Route path='/AdminNavbar' element={<AdminNavbar/>}/>

          <Route path='/RouteChild' element={<RouteChild/>}/>


        </Routes>
    </BrowserRouter>
    </>      
  );
}

export default App;
