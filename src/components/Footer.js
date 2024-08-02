import React from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTiktok, FaStore } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="flex justify-between items-center">
        <p>&copy; 2024 Digital Kreatif. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} />
          </a>
          <a href="mailto:digitalkreatif@digif.site" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@your-username" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={24} />
          </a>
          <a href="https://shopee.co.id/your-store" target="_blank" rel="noopener noreferrer">
            <FaStore size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
