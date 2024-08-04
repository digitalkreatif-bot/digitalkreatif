// src/components/Header.js
import React, { useState, useEffect } from 'react';
import logo from '../assets/dk.png';
import { FaSun, FaMoon } from 'react-icons/fa';
import BackgroundMusic from './BackgroundMusic';

const Header = ({ toggleMode, isDarkMode, setIsDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const startMusic = () => {
    setMusicStarted(true);
  };

  const toggleMute = () => {
    setIsMuted(prevMuted => !prevMuted);
  };

  const handleButtonClick = () => {
    setShowButton(false);
    setIsDarkMode(true);
    startMusic();
  };

  return (
    <>
      <header className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-2 z-20 transition-all duration-300 ${scrolled ? 'bg-[#e2e8f0]/30 backdrop-blur-lg w-full rounded-none' : 'bg-[#e2e8f0] w-11/12 rounded-b-lg'}`}>
        <nav className="container mx-auto flex justify-between items-center font-montserrat">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-1" />
            <div className="text-3xl font-bold text-gray-900">Digif.</div>
          </div>
          <div className="flex items-center space-x-4">
            {showButton ? (
              <button 
                onClick={handleButtonClick}
                className="text-gray-900 hover:text-gray-600 focus:outline-none"
              >
                Click Me
              </button>
            ) : (
              <>
                <button 
                  onClick={toggleMode}
                  className="text-gray-900 hover:text-gray-600 focus:outline-none"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                </button>
                {musicStarted && (
                  <BackgroundMusic isMuted={isMuted} toggleMute={toggleMute} /> // Pass props to BackgroundMusic
                )}
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;