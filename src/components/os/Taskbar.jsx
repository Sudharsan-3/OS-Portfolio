import React, { useEffect, useState } from "react";
import { useWindow } from "../../context/WindowContext";

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
    <div className="fixed bottom-0 left-0 w-full h-12 bg-black/70 backdrop-blur-md flex items-center justify-between px-4 text-white">

      {/* Left Side */}
      <div className="flex items-center gap-2">

        {/* Start Button */}
        <button
          onClick={() => openWindow("StartHere")}
          className="px-3 py-1 bg-white/10 rounded hover:bg-white/20"
        >
          Start
        </button>

        {/* Open Windows */}
        {windows.map((window) => (
          <button
            key={window.name}
            onClick={() => restoreWindow(window.name)}
            className={`
              px-3 py-1 rounded text-sm
              ${
                window.minimized
                  ? "bg-gray-700"
                  : "bg-blue-600"
              }
            `}
          >
            {window.name}
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