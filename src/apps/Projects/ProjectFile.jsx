import React from "react";
import { motion } from "framer-motion";

const ProjectFile = ({ project, onOpen }) => {
  return (
    <motion.div
      onClick={() => onOpen(project)}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="
        group cursor-pointer
        bg-white
        border border-gray-200
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        transition-all duration-200
      "
    >
      {/* IMAGE */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="
            w-full h-full object-cover
            group-hover:scale-105
            transition-transform duration-300
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <h3 className="font-semibold text-gray-900 text-base">
          {project.title}
        </h3>

        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-1 mt-3">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="
                text-[10px]
                px-2 py-[2px]
                rounded-full
                bg-blue-50
                text-blue-700
                border border-blue-100
              "
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectFile;