import {Link} from 'react-router-dom';
import React, { useState,useEffect} from 'react';
import './OwnerNavbar.css';
import '../../components/Navbar.css';
import apiClient from '../../Services/ApiClient'

const logo = require('../../assests/logo.png');
const profile = require('../../assests/avatar7.png');
const bell = require('../../assests/bell_icon.png');

function OwnerNavbar() {
  const [click, setClick] = useState(false);
  const [clickDropdown, setClickDropdown] = useState(false);
  const [fetchImage,setFetchImage] = useState ("")
  const handleClick = () => setClick(!click);
  const handleClickDropdown = () => setClickDropdown(!clickDropdown);
  const closeMobileMenu = () => setClick(false);
  const closeDropdownMenu = () => setClickDropdown(false);

//   useEffect(() => {
//     async function getownerdetails() { 
//         const{dataresponse,error} = await apiClient.loadownerDetails()
//         console.log(dataresponse)
//         // console.log("dilshi")
//         setFetchImage(dataresponse.result.image)
//     }
//     getownerdetails();
// }, []);

//   window.onclick = function (event) {
//     if (document.getElementsByClassName('menu-dropdown-icon')[0].contains(event.target)) {
//         document.getElementById('menu-dropdown-list')
//             .style.display = "flex";
//     } else {
//       document.getElementById('menu-dropdown-list')
//             .style.display = "none";
//             closeDropdownMenu();
//     }
// }

  return (
    <>
    <nav className='navbar fixed-top'>
      <div className='navbar-container'>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <div className='nav-logo'>
        <img src={logo} className="logo" style={{
            height:'64px',
            width:'64px',
            }} alt="Logo"/>
        </div>
        <div className='nav-menu-items'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='navbar-item-o'><Link to='/dashboard' className='navbar-links' onClick={closeMobileMenu}>Dashboard</Link></li>
          <li className='navbar-item-o'><Link to='/owneradvertisements' className='navbar-links' onClick={closeMobileMenu}>Advertisements</Link></li>
          <li className='navbar-item-o'><Link to='/ownerschoolvans' className='navbar-links' onClick={closeMobileMenu}>School vans</Link></li>
          <li className='navbar-item-o'><Link to='/ownercomplaints' className='navbar-links' onClick={closeMobileMenu}>Complaints</Link></li>
          <li className='navbar-item-o'><Link to='/ownerreviews' className='navbar-links' onClick={closeMobileMenu}>Reviews</Link></li>

        </ul>
        <div class="profile">
            <img src={bell} style={{height:'30px', width:'30px'}} alt=""/>
            <img src={fetchImage} alt="" class="rounded-circle"/>
            <div className='menu-dropdown-icon' onClick={handleClickDropdown}>
            <i class='fa fa-caret-down'></i>
            </div>
        </div>
        </div>
        <div className='menu-dropdown' id='menu-dropdown-list'>
          <ul className={clickDropdown ? 'card p-3 dropdown-active' : 'dropdown-hide'}>
            <li className='dropdown-list-item'><Link to='/ownerprofile' className='dropdown-links' onClick={closeDropdownMenu}>Profile</Link></li>
            <li className='dropdown-list-item'><Link to='/ownerpayments' className='dropdown-links' onClick={closeDropdownMenu}>Payments</Link></li>
            {/* <li className='dropdown-list-item'><Link to='/OwnerRequests' className='dropdown-links' onClick={closeDropdownMenu}>Requests</Link></li> */}
            {/* <li className='dropdown-list-item'><Link to='/OwnerReviews' className='dropdown-links' onClick={closeDropdownMenu}>Reviews</Link></li> */}
            <li class="dropdown-list-item"><hr></hr></li>
            <li className='dropdown-list-item'><a href='log-in' className='dropdown-links' onClick={closeDropdownMenu}>Log Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default OwnerNavbar