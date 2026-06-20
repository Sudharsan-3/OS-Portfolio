import React, { useEffect, useState } from "react";
import { useWindow } from "../../context/WindowContext";
import {
  Home,
  FolderOpen,
  Moon,
} from "lucide-react";
const Taskbar = () => {
  const [time, setTime] = useState("");

  const {
    windows,
    restoreWindow,
    openWindow,
  } = useWindow();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="
fixed
bottom-3
left-1/2
-translate-x-1/2
h-14
px-4
rounded-2xl
bg-black/60
backdrop-blur-xl
border
border-white/10
flex
items-center
justify-between
text-white
w-[95%]
max-w-6xl
z-50
">

      {/* Left Side */}
      <div className="flex items-center gap-2">

        {/* Start Button */}
        <button
          onClick={() => openWindow("StartHere")}
          className="px-3 py-1 bg-white/10 rounded hover:bg-white/20"
        >
          <Home size={18} />
        </button>

        {/* Open Windows */}
        {windows.map((window) => (
          <button
            key={window.name}
            onClick={() => restoreWindow(window.name)}
            className={`
              px-3 py-1
rounded-lg
text-sm
transition-all
duration-200
hover:scale-105
              ${window.minimized
                ? "bg-gray-700"
                : "bg-blue-600"
              }
            `}
          >
            {
              window.name === "ProjectDetails"
                ? window.data?.title
                : window.name
            }
          </button>
        ))}
      </div>

      {/* Right Side */}
      <div className="text-sm">
        {time}
      </div>
    </div>
  );
};

export default Taskbar;