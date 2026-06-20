import React from "react";
import { useWindow } from "../../context/WindowContext";
import { motion } from "framer-motion";

const Window = ({ windowData, children }) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
  } = useWindow();

  const { name, maximized, data } = windowData;

  const isProjectWindow =
    name === "ProjectDetails";

  const title =
    isProjectWindow
      ? data?.title
      : name;

  return (
    <motion.div
      style={{ x: "-50%" }}
      initial={{
        opacity: 0,
        scale: 0.97,
      }}

      animate={{
        opacity: 1,
        scale: 1,
      }}

      transition={{
        duration: 0.18,
        ease: "easeOut",
      }}
      className={`
    bg-white shadow-2xl absolute flex flex-col
    ${maximized
          ? "top-0 left-0 w-screen h-screen rounded-none"
          : `
top-20 left-1/2
${isProjectWindow
            ? "w-[95%] lg:w-[1100px]"
            : "w-[90%] sm:w-[600px] lg:w-[800px]"
          }
rounded-xl
`
        }
  `}
    >
      {/* Title Bar */}
      <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2">

        <span className="font-medium">
          {title}
        </span>

        <div className="flex gap-2">

          {/* Minimize */}
          <button
            onClick={() => minimizeWindow(name)}
            className="w-8 h-8 rounded bg-yellow-500 hover:bg-yellow-600"
          >
            −
          </button>

          {/* Maximize */}
          <button
            onClick={() => maximizeWindow(name)}
            className="w-8 h-8 rounded bg-green-500 hover:bg-green-600"
          >
            □
          </button>

          {/* Close */}
          <button
            onClick={() => closeWindow(name)}
            className="w-8 h-8 rounded bg-red-500 hover:bg-red-600"
          >
            ✕
          </button>

        </div>
      </div>

      {/* Content */}
      <div
        className={`
    p-4 overflow-y-auto pb-24
    ${maximized
            ? "h-[calc(100vh-96px)]"
            : isProjectWindow
              ? "h-[75vh]"
              : "h-[60vh]"
          }
  `}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Window;