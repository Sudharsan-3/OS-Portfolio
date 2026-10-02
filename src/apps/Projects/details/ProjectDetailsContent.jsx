import React from "react";

const ProjectDetailsContent = ({ project }) => {
  const tech = project.tech || [];
  const features = project.features || [];

  return (
    <>
      {/* OVERVIEW */}
      <section>
        <h2 className="text-lg font-semibold">
          About This Project
        </h2>

        <p className="mt-2 text-sm sm:text-[15px] leading-6 text-gray-600">
          {project.fullDescription ||
            "Project description is not available yet."}
        </p>
      </section>

      {/* QUICK INFO */}
      <div className="grid grid-cols-2 gap-3">
        <InfoCard
          label="Project Type"
          value={project.type || "Not specified"}
        />

        <InfoCard
          label="Technologies"
          value={
            tech.length
              ? `${tech.length} Used`
              : "Not specified"
          }
        />
      </div>

      {/* TECH STACK */}
      <section>
        <h2 className="text-lg font-semibold">
          Tech Stack
        </h2>

        {tech.length ? (
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  px-3 py-1.5 rounded-full
                  bg-white border border-gray-200
                  text-xs font-medium text-gray-700
                "
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-gray-400">
            Technology details are not available yet.
          </p>
        )}
      </section>

      {/* FEATURES */}
      <section>
        <h2 className="text-lg font-semibold">
          Key Features
        </h2>

        {features.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="
                  flex items-start gap-2.5
                  rounded-xl border border-gray-200
                  bg-gray-50 px-3.5 py-3
                "
              >
                <span className="text-blue-500 text-sm mt-0.5">
                  ✓
                </span>

                <span className="text-sm leading-5 text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-gray-400">
            Feature details are not available yet.
          </p>
        )}
      </section>
    </>
  );
};

const InfoCard = ({ label, value }) => (
  <div className="rounded-xl border border-gray-200 bg-gray-50 p-3.5">
    <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
      {label}
    </p>

    <p className="mt-1 text-sm font-semibold text-gray-900">
      {value}
    </p>
  </div>
);

export default ProjectDetailsContent;