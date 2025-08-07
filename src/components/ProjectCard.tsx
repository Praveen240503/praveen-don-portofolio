import React from 'react';
import { type Project } from '../types/Projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for links

// Define the props interface for the ProjectCard component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-transparent rounded-lg shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105">
      <img
        src={project.imageUrl}
        alt={`Screenshot of ${project.title}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-start space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
              className="flex items-center gap-2 text-white bg-word-background px-4 py-2 rounded-lg hover:bg-purple-500 transition-colors duration-300"
            >
              <FaExternalLinkAlt />
              Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source code for ${project.title}`}
              className="flex items-center gap-2 text-gray-300 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
