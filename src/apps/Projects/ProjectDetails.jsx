import React, { useState } from "react";

const ProjectDetails = ({ project }) => {
  if (!project) return null;
  const [selectedImage, setSelectedImage] = useState(
    project.screenshots?.[0] || project.thumbnail
  );

  return (
    <div className="space-y-6 text-gray-900">

      {/* HERO IMAGE */}
      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <div className="space-y-3">
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
            <img
              src={selectedImage}
              alt={project.title}
              className="w-full h-72 object-cover"
            />
          </div>

          {project.screenshots?.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {project.screenshots.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`
            rounded-lg overflow-hidden border-2
            ${selectedImage === image
                      ? "border-blue-500"
                      : "border-gray-200"
                    }
          `}
                >
                  <img
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    className="w-24 h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* TITLE + DESCRIPTION */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {project.title}
        </h2>

        <p className="mt-2 text-gray-600 leading-relaxed text-[15px]">
          {project.fullDescription}
        </p>
        <div className="grid grid-cols-2 gap-3">

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
            <p className="text-xs text-gray-500">
              Project Type
            </p>

            <p className="font-medium">
              Full Stack Application
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
            <p className="text-xs text-gray-500">
              Technologies
            </p>

            <p className="font-medium">
              {project.tech.length} Used
            </p>
          </div>

        </div>
      </div>

      {/* TECH STACK */}
      <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Tech Stack
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200
hover:bg-gray-100 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">
          Key Features
        </h3>

        <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="text-blue-500 mt-[2px]">▹</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-200" />

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-3 pt-2">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
        px-4 py-2 rounded-lg
        bg-gray-900 text-white
        hover:scale-[1.02]
        active:scale-[0.98]
        transition
      "
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="
        px-4 py-2 rounded-lg
        bg-blue-600 text-white
        hover:scale-[1.02]
        active:scale-[0.98]
        transition
      "
          >
            Live Demo
          </a>
        )}

      </div>

    </div>
  );
};

export default ProjectDetails;