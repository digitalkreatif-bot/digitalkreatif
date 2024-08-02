// src/components/BackgroundVideo.js
import React from 'react';
import light from '../assets/light.mp4';
import dark from '../assets/dark.mp4';

const BackgroundVideo = ({ isDarkMode }) => {
  console.log('Dark Mode:', isDarkMode);

  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        key="light"
        className={`transition-opacity duration-1000 ${!isDarkMode ? 'visible' : ''}`}
      >
        <source src={light} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        autoPlay
        loop
        muted
        key="dark"
        className={`transition-opacity duration-1000 ${isDarkMode ? 'visible' : ''}`}
      >
        <source src={dark} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
