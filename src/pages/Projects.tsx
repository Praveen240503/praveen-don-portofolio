import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../Data/ProjectsData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 mx-40 px-4 sm:px-6 lg:px-8 bg-inner-background text-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-white mb-12">
          <span className="text-word-background">#</span>projects
        </h2>
        
        {/* Responsive grid for the project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
