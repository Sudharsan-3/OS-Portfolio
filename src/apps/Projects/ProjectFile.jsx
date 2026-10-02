import React from "react";
import { motion } from "framer-motion";

const ProjectFile = ({ project, onOpen }) => {
  const technologies = project.tech || [];

  return (
    <motion.div
      onClick={() => onOpen(project)}
      whileHover={{ y: -5, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        hover:shadow-lg
        active:scale-[0.98]
        transition-shadow
      "
    >
      {/* IMAGE */}
      <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
            pointer-events-none
          "
        />

        {/* Project type badge */}
        <span
          className="
            absolute
            top-3
            left-3
            rounded-full
            bg-white/90
            backdrop-blur-sm
            px-2.5
            py-1
            text-[10px]
            font-semibold
            text-gray-700
            shadow-sm
          "
        >
          Project
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        {/* Title */}
        <h3
          className="
            text-base
            sm:text-lg
            font-bold
            tracking-tight
            text-gray-900
            group-hover:text-blue-600
            transition-colors
          "
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-1.5
            text-xs
            sm:text-sm
            leading-5
            text-gray-500
            line-clamp-2
          "
        >
          {project.shortDescription}
        </p>

        {/* TECH STACK */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-gray-200
                  bg-gray-50
                  px-2.5
                  py-1
                  text-[10px]
                  font-medium
                  text-gray-600
                "
              >
                {tech}
              </span>
            ))}

            {technologies.length > 3 && (
              <span
                className="
                  rounded-full
                  border
                  border-blue-100
                  bg-blue-50
                  px-2.5
                  py-1
                  text-[10px]
                  font-medium
                  text-blue-600
                "
              >
                +{technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* FOOTER */}
        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            border-t
            border-gray-100
            pt-3
          "
        >
          <span className="text-[11px] text-gray-400">
            View project
          </span>

          <span
            className="
              inline-flex
              items-center
              gap-1
              text-xs
              font-semibold
              text-blue-600
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          >
            Explore
            <span className="text-sm">
              →
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFile;