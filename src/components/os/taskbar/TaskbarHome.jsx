import React from "react";
import { House } from "lucide-react";
import { useWindow } from "../../../context/WindowContext";

const TaskbarHome = () => {
  const {
    activeWindow,
    windows,
    openWindow,
    restoreWindow,
    minimizeWindow,
  } = useWindow();

  const homeWindow = windows.find(
    (window) => window.name === "StartHere"
  );

  const isActive =
    activeWindow === "StartHere" &&
    homeWindow &&
    !homeWindow.minimized;

  const handleHomeClick = () => {
    if (!homeWindow) {
      openWindow("StartHere");
      return;
    }

    if (isActive) {
      minimizeWindow("StartHere");
      return;
    }

    restoreWindow("StartHere");
  };

  return (
    <button
      onClick={handleHomeClick}
      title="Home"
      aria-label="Home"
      className={`
        pointer-events-auto
        flex
        items-center
        justify-center
        w-10
        h-10
        rounded-full
        border
        text-white
        shadow-lg
        transition-all
        hover:scale-105
        active:scale-95
        ${
          isActive
            ? "bg-blue-500 border-blue-400 shadow-blue-500/30"
            : "bg-white/10 border-white/15 hover:bg-white/20"
        }
      `}
    >
      <House size={19} />
    </button>
  );
};

export default TaskbarHome;