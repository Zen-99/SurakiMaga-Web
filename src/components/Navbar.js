import {Link} from 'react-router-dom'
import React, { useState} from 'react';
import './Navbar.css'

const logo = require('../assests/logo.png');

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times close-menu-btn' : 'fas fa-bars'} />
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
          <li className='navbar-item'>  
          </li>
          <li className='navbar-item'>
            <Link to='/' className='navbar-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/About' className='navbar-links' onClick={closeMobileMenu}>What we do</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/FAQ' className='navbar-links' onClick={closeMobileMenu}>FAQ</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/log-in' className='navbar-links' onClick={closeMobileMenu}>Log in</Link>
          </li>
        </ul>
        <Link to='/sign-up' className='signup-button'>Sign Up</Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar