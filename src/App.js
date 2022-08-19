import './App.css';
//import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import OwnerAdvertiestments from './pages/school-van-owner/OwnerAdvertiestments';
import OwnerProfile from './pages/school-van-owner/OwnerProfile';
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

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/FAQ' element={<FAQ />}/>
          <Route path='/log-in' element={<Login />}/>
          {/* <Route path='/sign-up' element={<SignUp />}/> */}
          <Route path='/OwnerAdvertiestments' element={<OwnerAdvertiestments />}/>
          <Route path='/OwnerProfile' element={<OwnerProfile />}/>
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

          <Route path='/RouteChild' element={<RouteChild/>}/>

        </Routes>
    </BrowserRouter>
    </>      
  );
}

export default App;
