import React from "react";
import { motion } from "framer-motion";

const ProjectFile = ({ project, onOpen }) => {
  return (
    <motion.div
      onClick={() => onOpen(project)}
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      whileTap={{ scale: 0.98 }}
      className="
        group cursor-pointer
        rounded-xl overflow-hidden
        border border-gray-200
        bg-white shadow-sm
        hover:shadow-xl
        transition-all
      "
    >

      {/* IMAGE */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="
            w-full h-full object-cover
            group-hover:scale-105
            transition-transform duration-300
          "
        />
        <div
          className="
    absolute inset-0
    bg-gradient-to-t
    from-black/20
    to-transparent
  "
        />
      </div>

      {/* CONTENT */}
      <div className="p-3">

        <h3 className="font-semibold text-gray-900">
          {project.title}
        </h3>

        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-1 mt-3">
          {project.tech?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="
                text-[10px]
                px-2 py-[2px]
                rounded-full
                bg-gray-50
                text-gray-600
                border border-gray-200
              "
            >
              {tech}
            </span>
          ))}
        </div>
        {project.tech.length > 3 && (
          <p className="text-xs text-gray-400 mt-2">
            +{project.tech.length - 3} more technologies
          </p>
        )}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">

          <span className="text-xs text-gray-400">
            Click to explore
          </span>

          <span className="text-sm font-medium text-blue-600">
            Open →
          </span>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectFile;