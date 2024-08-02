// components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <a href={link} className="text-blue-500">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;