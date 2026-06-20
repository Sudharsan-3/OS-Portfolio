import React from "react";

const ProjectFile = ({ project, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(project)}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer border"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-16 h-16 object-cover rounded"
      />

      <div>
        <h3 className="font-semibold">
          {project.title}
        </h3>

        <p className="text-sm text-gray-500">
          {project.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectFile;