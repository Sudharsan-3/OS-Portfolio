import React, { useEffect, useState } from "react";
import { useWindow } from "../../context/WindowContext";
import { Home } from "lucide-react";

const Taskbar = () => {
  const [time, setTime] = useState("");
  const { activeWindow, windows, restoreWindow, openWindow } = useWindow();

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
      fixed bottom-3 left-1/2 -translate-x-1/2
      h-14 px-4 rounded-2xl
      bg-black/50 backdrop-blur-xl
      border border-white/10 shadow-lg
      flex items-center justify-between
      text-white w-[95%] max-w-6xl z-50
    ">

      {/* LEFT */}
      <div className="flex items-center gap-2">

        {/* START */}
        <button
          onClick={() => openWindow("StartHere")}
          className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition hover:scale-105"
        >
          <Home size={18} />
        </button>

        {/* WINDOWS */}
        {windows.map((window) => (
          <button
            key={window.name}
            onClick={() => restoreWindow(window.name)}
            className={`
              px-3 py-1 rounded-lg text-sm transition
              hover:scale-105 active:scale-95
              ${
                activeWindow === window.name
                  ? "bg-blue-500/90 text-white shadow-md"
                  : "bg-white/10 text-gray-200 hover:bg-white/20"
              }
            `}
          >
            {window.name === "ProjectDetails"
              ? window.data?.title || "Project"
              : window.name}
          </button>
        ))}
      </div>

      {/* RIGHT */}
      <div className="text-sm text-gray-200">
        {time}
      </div>
    </div>
  );
};

export default Taskbar;