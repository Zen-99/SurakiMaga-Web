import './App.css';
//import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ParentDashboard from './pages/Parent/dashboard';
import OwnerDashboard from './pages/school-van-owner/OwnerDashboard';
import MyChildren from './pages/Parent/children';
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
          <Route path='/sign-up' element={<Signup />}/>
          <Route path='/OwnerDashboard' element={<OwnerDashboard />}/>
          <Route path='/ParentDashboard' element={<ParentDashboard />}/>
          <Route path='/MyChildren' element={<MyChildren/>}/>
        </Routes>
    </BrowserRouter>
    </>      
  );
}

export default App;
