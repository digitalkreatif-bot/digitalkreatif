// src/App.js
import React, { useState } from 'react';
import './styles/Styles.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';
import Pagination from './components/Pagination';
import usePagination from './hooks/usePagination';
import { projects } from './utils/projects';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { currentPage, totalPages, nextPage, prevPage, goToPage, currentItems } = usePagination(projects, 6);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <BackgroundVideo isDarkMode={isDarkMode} />
      <Header toggleMode={toggleMode} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="flex-grow container mx-auto p-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
              code={project.code}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
          goToPage={goToPage}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;