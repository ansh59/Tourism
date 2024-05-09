import { useState } from 'react';
import NavigationBar from './assets/NavigationBar'; // Assuming NavigationBar is the name of your component file
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='h-screen w-full '>
      <div className='relative h-4/5 w-full'><NavigationBar />
        <video
          id="fullscreen-video"
          autoPlay
          muted
          loop
          className="inset-0 object-cover w-full h-full"
        >
          <source
            src="https://videos.pexels.com/video-files/17791400/17791400-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="dancing-script absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-luminosity text-lime-950 text-8xl font-bold text-center z-10">
          DevBhoomi Himachal
        </div>
        <div  className='demon absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-luminosity text-lime-950 text-8xl font-bold text-center z-10'> Land of God and Goddess</div>
        <div style={{width: '100%', height: '100%',opacity:'50%', background: 'linear-gradient(180deg, #0A0D0A 7%, #C9D1DB 100%)'} }>jnkjk</div>  
      </div>
    </div>
  );
}

export default App;
