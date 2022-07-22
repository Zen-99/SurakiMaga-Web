import {Link} from 'react-router-dom'
import React, { useState} from 'react';
import './OwnerNavbar.css';
import '../../components/Navbar.css';

const logo = require('../../assests/logo.png');
const profile = require('../../assests/profile.png');

function OwnerNavbar() {
  const [click, setClick] = useState(false);
  const [clickDropdown, setClickDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClickDropdown = () => setClickDropdown(!clickDropdown);
  const closeMobileMenu = () => setClick(false);
  const closeDropdownMenu = () => setClickDropdown(false);

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
            height:'84px',
            width:'84px',
            }} alt="Logo"/></Link>
        </div>
        <div className='nav-menu-items'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>  
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Advertiestments</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>My School vans</Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>complaints & reviews</Link>
          </li>
        </ul>
        <div class="profile">
            <img src={profile} alt=""/>
            <div className='menu-dropdown-icon' onClick={handleClickDropdown}>
            <i class={clickDropdown ? 'fas fa-times-circle' : 'fas fa-chevron-circle-down'}></i>
            </div>
        </div>
        </div>
        <div className='menu-dropdown'>
          <ul className={clickDropdown ? 'dropdown-active' : 'dropdown-hide'}>
          <li className='dropdown-item' onClick={handleClickDropdown}>
              <i class="fas fa-chevron-circle-up"></i>
            </li>
            <li className='dropdown-item'>
              <Link to='/' className='dropdown-links' onClick={closeDropdownMenu}>Profile</Link>
            </li>
            <li className='dropdown-item'>
              <Link to='/' className='dropdown-links' onClick={closeDropdownMenu}>Payments</Link>
            </li>
            <li className='dropdown-item'>
              <Link to='/' className='dropdown-links' onClick={closeDropdownMenu}>settings</Link>
            </li>
            <li className='dropdown-item'>
              <Link to='/' className='dropdown-links' onClick={closeDropdownMenu}>Feedbacks</Link>
            </li>
            <li className='dropdown-item'>
              <a href='/' className='dropdown-links' onClick={closeDropdownMenu}>Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default OwnerNavbar