// src/components/BackgroundMusic.js
import React, { useState, useRef, useEffect } from 'react';
import musicFile from '../assets/music.mp3'; // Ganti dengan path ke file musik

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Memulai audio setelah komponen dimuat
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

    playAudio();
  }, []);

  return (
    <div className="music-controls">
      <audio
        ref={audioRef}
        autoPlay
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
