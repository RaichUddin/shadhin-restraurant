import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{ marginTop: '3rem' }}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='P__opensans' style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus quidem nostrum, quos reprehenderit saepe.</p>
        <p className='P__opensans' style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className='P__opensans' style={{ color: 'white' }}>Mon-FRI: 10.00 am -02.00am</p>
        <p className='P__opensans' style={{ color: 'white' }}>SAT-SUN: 10.00 am -02.00am</p>
        <button type='button' className='custom__button' style={{ marginTop: '2rem' }}>View More </button>
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="find" />
    </div>

  </div>
);

export default FindUs;
