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
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>What we do</Link>
          </li>
          <li className='nav-item'>
            <Link to='/FAQ' className='nav-links' onClick={closeMobileMenu}>FAQ</Link>
          </li>
          <li className='nav-item'>
            <Link to='/log-in' className='nav-links' onClick={closeMobileMenu}>Log in</Link>
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