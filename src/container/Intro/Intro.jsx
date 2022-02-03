import React, { useRef, useState } from 'react';
import { meal } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';

const Intro = () => {
  const [state, setState] = useState();
  const vidRef = useRef();

  const handleVideo = () => {
    setState((prevPlayVideo) => !prevPlayVideo);

    if (state) {
      vidRef.current.pause();
    }
    else {
      vidRef.current.play();
    }
  }
  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div className='app_video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {state
            ? <BsPauseFill color='#fff' fontSize={30} />
            : <BsFillPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div>
    </div>
  );
}


export default Intro;
