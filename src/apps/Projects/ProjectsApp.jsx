import React from "react";
import { projects } from "../../data/projects";
import ProjectFile from "./ProjectFile";
import { useWindow } from "../../context/WindowContext";

const ProjectsApp = ({ onOpenProject }) => {
  const { openWindow } = useWindow();

  const handleOpenProject = (project) => {
    if (onOpenProject) {
      onOpenProject(project);
    } else {
      openWindow("ProjectDetails", project);
    }
  };

  return (
    <div className="h-full text-gray-900 px-4 pb-4">
      {/* HEADER */}
      <div className="mb-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              My Work
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
              Projects
            </h2>

            <p className="text-sm text-gray-500 leading-5 mt-2 max-w-xl">
              A collection of web applications and full-stack projects
              built while exploring modern development.
            </p>
          </div>

          {/* Project Count */}
          <div
            className="
              shrink-0
              rounded-xl
              border border-gray-200
              bg-gray-50
              px-3
              py-2
              text-center
            "
          >
            <p className="text-lg font-bold text-gray-900 leading-none">
              {projects.length}
            </p>

            <p className="text-[10px] text-gray-500 mt-1">
              Projects
            </p>
          </div>
        </div>
      </div>

      {/* SECTION DIVIDER */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium text-gray-500">
          Featured Work
        </span>

        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectFile
            key={project.id}
            project={project}
            onOpen={handleOpenProject}
          />
        ))}
      </div>

      {/* EMPTY STATE */}
      {projects.length === 0 && (
        <div
          className="
            rounded-2xl
            border border-dashed border-gray-300
            bg-gray-50
            px-6 py-10
            text-center
          "
        >
          <p className="font-medium text-gray-900">
            No projects available
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Projects will appear here once they are added.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsApp;