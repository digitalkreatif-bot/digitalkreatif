// src/components/BackgroundMusic.js
import React, { useRef, useEffect } from 'react';
import musicFile from '../assets/music.mp3';

const BackgroundMusic = ({ isMuted, toggleMute }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    };

    if (!isMuted) {
      playAudio();
    }
  }, [isMuted]);

  return (
    <div className="music-controls">
      <audio
        ref={audioRef}
        loop
        src={musicFile}
        muted={isMuted}
      />
      <button onClick={toggleMute} className="mute-toggle" aria-label={isMuted ? 'Unmute' : 'Mute'}>
        {isMuted ? (
          <span role="img" aria-label="unmute">🔊</span>
        ) : (
          <span role="img" aria-label="mute">🔇</span>
        )}
      </button>
    </div>
  );
};

export default BackgroundMusic;