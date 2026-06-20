import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      
      <h3 className="text-lg font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 text-xs px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-green-500 hover:underline"
        >
          Live Demo
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;