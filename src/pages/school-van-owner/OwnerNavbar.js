import {Link} from 'react-router-dom';
import React, { useState} from 'react';
import './OwnerNavbar.css';
import '../../components/Navbar.css';

const logo = require('../../assests/logo.png');
const profile = require('../../assests/profile.png');
const bell = require('../../assests/bell_icon.png');

function OwnerNavbar() {
  const [click, setClick] = useState(false);
  const [clickDropdown, setClickDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClickDropdown = () => setClickDropdown(!clickDropdown);
  const closeMobileMenu = () => setClick(false);
  const closeDropdownMenu = () => setClickDropdown(false);

  window.onclick = function (event) {
    if (document.getElementsByClassName('menu-dropdown-icon')[0].contains(event.target)) {
        document.getElementById('menu-dropdown-list')
            .style.display = "flex";
    } else {
      document.getElementById('menu-dropdown-list')
            .style.display = "none";
            closeDropdownMenu();
    }
}

  return (
    <>
    <nav className='navbar'>
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
          <li className='nav-item-o'>  </li>
          <li className='nav-item-o'><Link to='/OwnerAdvertiestments' className='nav-links' onClick={closeMobileMenu}>Advertiestments</Link></li>
          <li className='nav-item-o'><Link to='/' className='nav-links' onClick={closeMobileMenu}>My School vans</Link></li>
          <li className='nav-item-o'><Link to='/' className='nav-links' onClick={closeMobileMenu}>complaints & reviews</Link></li>
        </ul>
        <div class="profile">
            <img src={bell} style={{height:'30px', width:'30px'}} alt=""/>
            <img src={profile} alt=""/>
            <div className='menu-dropdown-icon' onClick={handleClickDropdown}>
            <i class={clickDropdown ? 'fas fa-times-circle' : 'fas fa-chevron-circle-down'}></i>
            </div>
        </div>
        </div>
        <div className='menu-dropdown' id='menu-dropdown-list'>
          <ul className={clickDropdown ? 'card p-3 dropdown-active' : 'dropdown-hide'}>
            <li className='dropdown-list-item' onClick={handleClickDropdown}><i class="fas fa-chevron-circle-up"></i></li>
            <li className='dropdown-list-item'><Link to='/OwnerProfile' className='dropdown-links' onClick={closeDropdownMenu}>Profile</Link></li>
            <li className='dropdown-list-item'><Link to='/' className='dropdown-links' onClick={closeDropdownMenu}>Payments</Link></li>
            <li className='dropdown-list-item'><Link to='/' className='dropdown-links' onClick={closeDropdownMenu}>Requests</Link></li>
            <li className='dropdown-list-item'><Link to='/' className='dropdown-links' onClick={closeDropdownMenu}>Feedbacks</Link></li>
            <li class="dropdown-list-item"><hr></hr></li>
            <li className='dropdown-list-item'><a href='/' className='dropdown-links' onClick={closeDropdownMenu}>Log Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default OwnerNavbar