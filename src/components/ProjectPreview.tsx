import React from 'react';
// import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../Data/ProjectsData';

const ProjectPreview: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="project-preview" className="py-20 px-4 sm:px-6 lg:px-8 mx-40 bg-inner-background text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row justify-between ">
          <div className="text-center flex flex-row gap-8 w-4/5">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              <span className="text-word-background">#</span>projects
            </h2>
            <hr className="w-2/3 mt-5 border-b-2 border-word-background" />
          </div>

          {/* View All button */}

          <div className="">
            {/* <Link
              to="/projects"
              className="hover:text-word-background text-white font-semibold"
            >
              View All -{'>'}
            </Link> */}
            <a
              href="/projects"
              className="hover:text-word-background text-white font-semibold"
            >
              View All -{'>'}
            </a>
          </div>
        </div>
        {/* Responsive grid for the project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectPreview;
