// components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, link, image, code }) => {
  return (
    <div className="bg-[#e2e8f0] shadow-md rounded-lg p-4 m-2 relative">
      <img src={image} alt={code} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#31456a] text-shadow-3d">{title}</h2>
        <p className="text-[#31456a]">{description}</p>
        <div className="mt-4 flex space-x-4">
          <a 
            href={link} 
            className="inline-block px-6 py-2 bg-gray-200 text-[#31456a] font-semibold rounded-lg shadow-neomorphism transform transition-transform duration-300 ease-in-out hover:scale-95 active:scale-90 active:bg-gray-300"
          >
            View Project
          </a>
          <a 
            href="https://wa.me/+6285157965632" 
            className="inline-block px-6 py-2 bg-[#31456a] text-gray-200 font-semibold rounded-lg shadow-neomorphism transform transition-transform duration-300 ease-in-out hover:scale-95 active:scale-90 active:bg-[#253a5a]"
          >
            Order
          </a>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 text-gray-500 text-sm">
        code: {code}
      </div>
    </div>
  );
};

export default ProjectCard;