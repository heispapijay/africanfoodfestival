import React from 'react';
import Marquee from 'react-fast-marquee';
import './landingview.css';

import logo2 from '../../assets/logo2.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

function Landingview() {
  return (
    <div className='aff_main'>
    <div  className='aff_logo2 animate__animated animate__fadeInUp'> <img className='logo2' src={logo2} alt='logo'/></div>
      <Marquee className='aff_comingsoon' direction="left" speed={100}>
        <p>&nbsp;  Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon  |    Coming Soon   |</p>
        <p>&nbsp;  Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon   |   Coming Soon  |    Coming Soon   |</p>
      </Marquee>
      <div className='aff_title animate__animated animate__fadeInDown'> <h1 className='aff_maintext'>
      AFRICAN FOOD FESTIVAL 2024
      </h1>
      </div>

      <div className='aff_socials_container animate__animated animate__fadeInUpBig'>
        <a href='#home' className='aff_socials'>
          <button className='aff_socials_button'>
            <img src={facebook} alt='facebook logo' />
          </button>
        </a>

        <a href='#home' className='aff_socials'>
          <button className='aff_socials_button'>
            <img src={instagram} alt='instagram logo' />
          </button>
        </a>

        
      </div>
    </div>
  )
}

export default Landingview;
