import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

const projects = [
  {
    title: 'Project One',
    description: 'Description for project one.',
    link: 'https://www.youtube.com/'
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    link: '#'
  },
  // Tambahkan lebih banyak proyek di sini
];

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
