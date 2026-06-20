import React from "react";
import { useWindow } from "../../context/WindowContext";

const Window = ({ windowData, children }) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
  } = useWindow();

  const { name, maximized } = windowData;

  return (
    <div
      className={`
        bg-white shadow-2xl overflow-hidden absolute
        ${
          maximized
            ? "top-0 left-0 w-screen h-screen rounded-none"
            : "top-20 left-1/2 -translate-x-1/2 w-[90%] sm:w-[600px] lg:w-[800px] rounded-xl"
        }
      `}
    >
      {/* Title Bar */}
      <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2">

        <span className="font-medium">
          {name}
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
          p-4 overflow-y-auto
          ${maximized ? "h-[calc(100vh-48px)]" : "max-h-[70vh]"}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Window;