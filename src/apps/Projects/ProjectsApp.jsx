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
    <div className="h-full text-gray-900 p-2">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Projects Explorer
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Click a project to open details
        </p>
      </div>

      {/* Grid */}
      <div className="
        grid gap-4
        sm:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3
      ">
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