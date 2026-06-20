import React from "react";

const ProjectDetails = ({ project }) => {
  if (!project) return null;

  return (
    <div className="space-y-6">

      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full rounded-lg border"
      />

      <div>
        <h2 className="text-2xl font-bold">
          {project.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {project.fullDescription}
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">
          Tech Stack
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">
          Features
        </h3>

        <ul className="list-disc ml-6">
          {project.features.map((feature) => (
            <li key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white px-4 py-2 rounded"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Live Demo
        </a>
      </div>

    </div>
  );
};

export default ProjectDetails;