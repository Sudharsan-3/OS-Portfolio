import React from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsApp = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsApp;