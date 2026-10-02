import React from "react";

const ProjectDetailsHeader = ({ project }) => {
  const type = project.type || "Project type not specified";
  const techCount = project.tech?.length || 0;
  const screenshotCount = project.screenshots?.length || 0;

  return (
    <div className="pt-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
        Project Details
      </p>

      <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
        {project.title}
      </h1>

      <p className="mt-2 max-w-2xl text-sm sm:text-[15px] leading-6 text-gray-600">
        {project.shortDescription ||
          "Project description not available yet."}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-xs font-medium">
          {type}
        </span>

        <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200 text-xs font-medium">
          {techCount
            ? `${techCount} Technologies`
            : "Technology details not available"}
        </span>

        {screenshotCount > 0 && (
          <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200 text-xs font-medium">
            {screenshotCount} Screenshot
            {screenshotCount !== 1 ? "s" : ""}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsHeader;