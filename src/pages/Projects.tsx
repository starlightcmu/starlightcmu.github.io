import React from 'react';
import { ExternalLink } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const { projects } = projectsData;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent mb-4">Research Projects</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Exploring the frontiers of AI through innovative research projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-amber-900 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center text-amber-600 hover:text-amber-800"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Learn More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;