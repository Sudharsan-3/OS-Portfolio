import React from "react";
import { motion } from "framer-motion";

const ProjectFile = ({ project, onOpen }) => {
  return (
    <motion.div
      onClick={() => onOpen(project)}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="
        group cursor-pointer
        rounded-xl overflow-hidden
       border border-gray-200
bg-white backdrop-blur-xl
        hover:bg-white/10
        transition-all
      "
    >
      {/* IMAGE */}
      <div className="h-40 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="
            w-full h-full object-cover
            group-hover:scale-110
            transition-transform duration-300
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-3">
        <h3 className="font-semibold text-gray-900">
          {project.title}
        </h3>

        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-1 mt-3">
          {project.tech?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="
                text-[10px]
                px-2 py-[2px]
                rounded-full
               bg-gray-100 text-gray-700
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