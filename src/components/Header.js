// src/components/Header.js
import React, { useState, useEffect } from 'react';
import logo from '../assets/dk.png';
import { FaSun, FaMoon } from 'react-icons/fa';
import BackgroundMusic from './BackgroundMusic'; // Import komponen musik

const Header = ({ toggleMode, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

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

  return (
    <header className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-2 z-20 transition-all duration-300 ${scrolled ? 'bg-white/30 backdrop-blur-lg w-full rounded-none' : 'bg-white w-11/12 rounded-b-lg'}`}>
      <nav className="container mx-auto flex justify-between items-center font-montserrat">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-1" />
          <div className="text-3xl font-bold text-gray-900">Digif.</div>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => {
              toggleMode();
              startMusic(); // Mulai musik saat mode diubah
            }}
            className="text-gray-900 hover:text-gray-600 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
          </button>
          {musicStarted && <BackgroundMusic />} {/* Tampilkan kontrol musik setelah interaksi */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
