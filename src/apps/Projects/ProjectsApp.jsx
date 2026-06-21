import React from "react";
import { projects } from "../../data/projects";
import ProjectFile from "./ProjectFile";
import { useWindow } from "../../context/WindowContext";

const ProjectsApp = () => {
  const { openWindow } = useWindow();

  const handleOpenProject = (project) => {
    openWindow("ProjectDetails", project);
  };

  return (
    <div className="h-full text-gray-900">

      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Projects Explorer
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Click a project to view details
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectFile
            key={project.id}
            project={project}
            onOpen={handleOpenProject}
          />
        ))}
      </div>

    </div>
  );
};

export default ProjectsApp;