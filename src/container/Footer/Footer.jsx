import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    {/* <FooterOverlay /> */}
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Bosila Garden City, Mohammadpur Dhaka</p>
        <p className='p__opensans'>+0001734364781</p>
        <p className='p__opensans'>+0001960181683</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="imag" />
        <p className='p__opensans'> The Bst way to find yourself is
          to lose yourself in the services of other
        </p>
        <img src={images.spoon} alt="spoons" style={{ mrginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>08:00 am- 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>07:00 am - 09:00 am</p>
      </div>

    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 RAICH UDDIN. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
