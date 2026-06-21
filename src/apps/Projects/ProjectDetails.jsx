import React from "react";

const ProjectDetails = ({ project }) => {
  if (!project) return null;

  return (
    <div className="space-y-6 text-gray-900">

      {/* HERO IMAGE */}
      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* TITLE + DESCRIPTION */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {project.title}
        </h2>

        <p className="mt-2 text-gray-600 leading-relaxed text-[15px]">
          {project.fullDescription}
        </p>
      </div>

      {/* TECH STACK */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          Tech Stack
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200
hover:bg-gray-100 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          Key Features
        </h3>

        <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="text-blue-500 mt-[2px]">▹</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 pt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:scale-[1.02] active:scale-[0.98]  transition"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:scale-[1.02] active:scale-[0.98] transition"
        >
          Live Demo
        </a>
      </div>

    </div>
  );
};

export default ProjectDetails;