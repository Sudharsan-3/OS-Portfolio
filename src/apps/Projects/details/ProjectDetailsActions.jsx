import React from "react";

const ProjectDetailsActions = ({ project }) => {
  const hasGithub = Boolean(project.github);
  const hasDemo = Boolean(project.demo);

  return (
    <section className="pt-1 pb-2">
      <div className="border-t border-gray-200 pt-5">
        <p className="text-sm font-medium text-gray-900 mb-3">
          Explore Project
        </p>

        {(hasGithub || hasDemo) ? (
          <div className="flex flex-col sm:flex-row gap-3">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex-1 inline-flex items-center justify-center
                  rounded-xl bg-gray-900 px-4 py-2.5
                  text-sm font-medium text-white
                  hover:bg-black active:scale-[0.98] transition
                "
              >
                GitHub ↗
              </a>
            )}

            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  flex-1 inline-flex items-center justify-center
                  rounded-xl bg-blue-600 px-4 py-2.5
                  text-sm font-medium text-white
                  hover:bg-blue-700 active:scale-[0.98] transition
                "
              >
                Live Demo ↗
              </a>
            )}
          </div>
        ) : (
          <p className="text-sm text-gray-400">
            Project links are not available yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailsActions;