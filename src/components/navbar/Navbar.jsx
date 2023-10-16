import React from 'react';
import './navbar.css';

import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <div className='aff_navbar animate__animated animate__fadeInDown'>
      <div className='aff_logo'>
        <a href='home'><img src={logo} alt='logo'/></a>
      </div>
      <div className='aff_contact'>
        <button className='aff_contact_button'>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar
