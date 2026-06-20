import React from "react";
import { useWindow } from "../../context/WindowContext";
import { motion } from "framer-motion";

const Icon = ({ name, icon }) => {
  const { openWindow } = useWindow();

  const handleClick = () => {
    openWindow(name);
  };

  return (
    <motion.div
    whileHover={{
      scale: 1.08,
    }}
    whileTap={{
      scale: 0.95,
    }}
      onClick={handleClick}
      className="
flex flex-col
items-center
justify-center
cursor-pointer
select-none
group
transition-all
duration-200
hover:scale-110
"
    >
      {/* Icon */}
      <div
        className="
  text-4xl
  mb-2
  transition-all
  duration-200
  group-hover:drop-shadow-lg
"
      >
        {icon}
      </div>

      {/* Label */}
      <span className="text-white text-sm text-center bg-black/40 px-2 py-1 rounded group-hover:bg-blue-500/70">
        {name}
      </span>
    </motion.div>
  );
};

export default Icon;