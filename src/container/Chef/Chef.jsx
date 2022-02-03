import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img_reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title='Chef,s Word' />
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='P__opensans' style={{ color: 'white' }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,</p>
        </div>
        <p className='P__opensans' style={{ color: 'white' }}>dolor sit amet consectetur adipisicing elit. Laudantium aspernatur, sit doloribus, inventore deserunt similique maxime eveniet cupiditate necessitatibus optio modi cumque minus consectetur ut, magnam labore. Dolore, eligendi tempora?</p>
      </div>
      <div className='app__chef-sign'>
        <p className='headtext__cormorant'>Raich Uddin</p>
        <p className='P__Open Sans' style={{ color: 'white' }}>CEO & FOUNDER</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
