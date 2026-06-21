import React from "react";

const ProjectDetails = ({ project }) => {
  if (!project) return null;

  return (
    <div className="space-y-6 text-gray-900">

      {/* HERO */}
      <div className="rounded-2xl overflow-hidden border shadow-sm">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-60 object-cover"
        />
      </div>

      {/* TITLE */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          {project.title}
        </h2>

        <p className="text-gray-600 mt-2">
          {project.fullDescription}
        </p>
      </div>

      {/* TECH */}
      <div className="p-4 rounded-xl border bg-gray-50">
        <h3 className="font-semibold mb-2">Tech Stack</h3>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                text-xs px-3 py-1 rounded-full
                bg-white border
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="p-4 rounded-xl border bg-gray-50">
        <h3 className="font-semibold mb-2">Key Features</h3>

        <ul className="space-y-2 text-sm text-gray-700">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span>▹</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="
            px-4 py-2 rounded-lg
            bg-black text-white
            hover:opacity-90
            transition
          "
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="
            px-4 py-2 rounded-lg
            bg-blue-600 text-white
            hover:bg-blue-700
            transition
          "
        >
          Live Demo
        </a>
      </div>

    </div>
  );
};

export default ProjectDetails;