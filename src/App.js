import './App.css';
//import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import OwnerDashboard from './pages/school-van-owner/OwnerDashboard';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

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
          <Route path='/OwnerDashboard' element={<OwnerDashboard />}/>
        </Routes>
    </BrowserRouter>
    </>      
  );
}

export default App;
