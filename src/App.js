import './App.css';
//import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import OwnerAdvertiestments from './pages/school-van-owner/OwnerAdvertiestments';
import OwnerProfile from './pages/school-van-owner/OwnerProfile';
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
          <Route path='/OwnerAdvertiestments' element={<OwnerAdvertiestments />}/>
          <Route path='/OwnerProfile' element={<OwnerProfile />}/>
        </Routes>
    </BrowserRouter>
    </>      
  );
}

export default App;
