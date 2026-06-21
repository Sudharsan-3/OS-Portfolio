import React, { useState } from "react";
import { useWindow } from "../../context/WindowContext";

const Window = ({ windowData, children }) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    moveWindow,
    activeWindow,
  } = useWindow();

  const {
    name,
    maximized,
    data,
    position = { x: 100, y: 80 },
    zIndex,
  } = windowData;

  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const title =
    name === "ProjectDetails" ? data?.title : name;

  // START DRAG
  const handleMouseDown = (e) => {
    if (maximized) return;

    focusWindow(name);
    setDragging(true);

    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  // DRAG MOVE
  const handleMouseMove = (e) => {
    if (!dragging || maximized) return;

    moveWindow(name, {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  // STOP DRAG
  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        position: maximized ? "fixed" : "absolute",
        top: maximized ? 0 : position.y,
        left: maximized ? 0 : position.x,
        width: maximized ? "100vw" : "800px",
        height: maximized ? "100vh" : "70vh",maxHeight: "90vh",
        zIndex: zIndex || 10,
      }}
      className={`flex flex-col bg-white shadow-2xl rounded-xl overflow-hidden ${
        activeWindow === name ? "ring-2 ring-blue-500" : ""
      }`}
    >
      {/* TITLE BAR */}
      <div
        onMouseDown={handleMouseDown}
        className="flex justify-between items-center bg-gray-900 text-white px-4 py-2 cursor-move select-none"
      >
        <span className="font-medium">{title}</span>

        <div className="flex gap-2">
          <button
            onClick={() => minimizeWindow(name)}
            className="w-7 h-7 bg-yellow-500 rounded"
          >
            −
          </button>

          <button
            onClick={() => maximizeWindow(name)}
            className="w-7 h-7 bg-green-500 rounded"
          >
            □
          </button>

          <button
            onClick={() => closeWindow(name)}
            className="w-7 h-7 bg-red-500 rounded"
          >
            ✕
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 min-h-0">
        {children}
      </div>
    </div>
  );
};

export default Window;