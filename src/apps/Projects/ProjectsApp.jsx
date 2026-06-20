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
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Projects Explorer
      </h2>

      <div className="space-y-3">
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