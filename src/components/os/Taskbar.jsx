import React, { useEffect, useState } from "react";
import { useWindow } from "../../context/WindowContext";

const Taskbar = () => {
  const [time, setTime] = useState("");
  const { openWindow } = useWindow();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-black/70 backdrop-blur-md flex items-center justify-between px-4 text-white">
      
      {/* Left - Start */}
      <div className="flex gap-3">
    <span
      onClick={() => openWindow("Projects")}
      className="cursor-pointer hover:scale-110"
    >
      📁
    </span>

    <span
      onClick={() => openWindow("Resume")}
      className="cursor-pointer hover:scale-110"
    >
      📄
    </span>

    <span
      onClick={() => openWindow("Contact")}
      className="cursor-pointer hover:scale-110"
    >
      📞
    </span>
  </div>

      {/* Right - Time */}
      <div className="text-sm">
        {time}
      </div>

    </div>
  );
};

export default Taskbar;