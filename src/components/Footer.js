import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const logo = require('../assests/logo.png');
// const Appstore = require('../assests/Appstore.webp')
const googlestore = require('../assests/googlestore.webp')

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/About'>What we do</Link>
            <Link to='/FAQ'>FAQ</Link>
            <Link to='/'>Help</Link>
            <Link to='/'>Privacy policy</Link>
            <Link to='/'>Terms and Conditions</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <div className='address'><i class="fas fa-home"></i><div>
              <p>UCSC Building Complex,</p><p>35 Reid Ave,</p><p> Colombo 00700</p>
              </div></div>
            <a href='/'><i class="fas fa-phone-alt"></i><div>041-2233444</div></a>
            <a href='/'><i class="fas fa-envelope-open"></i><div>SurakiMaga@gmail.com</div></a>
          </div>
            
          <div class='footer-link-items'>
            <div className='footer-link-app'>
            <h5>Parents</h5>
            {/* <a href='/'><img src={Appstore}  alt=""></img></a> */}
            <a href='/'><img src={googlestore} alt=""></img></a>
            </div>
            <div className='footer-link-app'>
            <h5>Drivers</h5>
            {/* <a href='/'><img src={Appstore} alt=""></img></a> */}
            <a href='/'><img src={googlestore} alt=""></img></a>
            </div>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <img src={logo} style={{
            height:'84px',
            width:'84px',
            }} alt="Logo"/>
          </div>
          <small class='website-rights'>SURAKI MAGA © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'>
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'>
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'>
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;