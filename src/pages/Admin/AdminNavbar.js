import {Link} from 'react-router-dom';
import React, { useState} from 'react';
import './AdminNavbar.css';
import '../../components/Navbar.css';

const logo = require('../../assests/logo.png');
const profile = require('../../assests/avatar7.png');
const bell = require('../../assests/bell_icon.png');

function OwnerNavbar() {
  const [click, setClick] = useState(false);
  const [clickDropdown, setClickDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClickDropdown = () => setClickDropdown(!clickDropdown);
  const closeMobileMenu = () => setClick(false);
  const closeDropdownMenu = () => setClickDropdown(false);

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
        <Link to='/' onClick={closeMobileMenu}>
        <img src={logo} className="logo" style={{
            height:'64px',
            width:'64px',
            }} alt="Logo"/></Link>
        </div>
        <div className='nav-menu-items'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='navbar-item-o'><Link to='/dashboard' className='navbar-links' onClick={closeMobileMenu}>Dashboard</Link></li>
          <li className='navbar-item-o'><Link to='/admincomplaints' className='navbar-links' onClick={closeMobileMenu}>Complaints</Link></li>
          <li className='navbar-item-o'><Link to='/adminrequests' className='navbar-links' onClick={closeMobileMenu}>Requests</Link></li>
          <li className='navbar-item-o'><Link to='/adminownerdetails' className='navbar-links' onClick={closeMobileMenu}>Owners</Link></li>
        </ul>
        <div class="profile">
            <img src={bell} style={{height:'30px', width:'30px'}} alt=""/>
            <img src={profile} alt="" class="rounded-circle"/>
            <div className='menu-dropdown-icon' onClick={handleClickDropdown}>
            <i class='fa fa-caret-down'></i>
            </div>
        </div>
        </div>
        <div className='menu-dropdown' id='menu-dropdown-list'>
          <ul className={clickDropdown ? 'card p-3 dropdown-active' : 'dropdown-hide'}>
            <li className='dropdown-list-item'><Link to='/OwnerProfile' className='dropdown-links' onClick={closeDropdownMenu}>Profile</Link></li>
            <li className='dropdown-list-item'><a href='/' className='dropdown-links' onClick={closeDropdownMenu}>Log Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default OwnerNavbar