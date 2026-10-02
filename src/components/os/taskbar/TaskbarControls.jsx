import React, { useEffect, useState } from "react";
import { Settings2 } from "lucide-react";

const TaskbarControls = ({
  taskbarMode,
  setTaskbarMode,
}) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      setDate(
        now.toLocaleDateString([], {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 60000);

    return () => clearInterval(interval);
  }, []);

  const changeMode = (mode) => {
    setTaskbarMode(mode);
    setShowSettings(false);
  };

  return (
    <div className="flex items-center gap-2 pointer-events-auto">

      {/* SETTINGS */}
      <div className="relative">
        <button
          onClick={() => setShowSettings((prev) => !prev)}
          title="Taskbar settings"
          aria-label="Taskbar settings"
          className="
            flex
            items-center
            justify-center
            w-9
            h-9
            rounded-xl
            bg-white/8
            text-white/70
            hover:bg-white/15
            hover:text-white
            transition
          "
        >
          <Settings2 size={16} />
        </button>

        {showSettings && (
          <div
            className="
              absolute
              bottom-12
              right-0
              w-44
              rounded-xl
              border border-white/10
              bg-[#171717]/95
              backdrop-blur-xl
              shadow-2xl
              p-2
            "
          >
            <p className="px-2 py-1.5 text-[10px] uppercase tracking-wider text-white/40">
              Taskbar
            </p>

            <button
              onClick={() => changeMode("static")}
              className={`
                w-full
                rounded-lg
                px-3
                py-2
                text-left
                text-xs
                ${
                  taskbarMode === "static"
                    ? "bg-blue-500/20 text-blue-300"
                    : "text-white/70 hover:bg-white/10"
                }
              `}
            >
              Always visible
            </button>

            <button
              onClick={() => changeMode("auto-hide")}
              className={`
                w-full
                rounded-lg
                px-3
                py-2
                text-left
                text-xs
                ${
                  taskbarMode === "auto-hide"
                    ? "bg-blue-500/20 text-blue-300"
                    : "text-white/70 hover:bg-white/10"
                }
              `}
            >
              Auto-hide
            </button>
          </div>
        )}
      </div>

      {/* DATE + TIME */}
      <div className="text-right leading-tight min-w-[68px]">
        <p className="text-sm font-medium text-white/90">
          {time}
        </p>

        <p className="text-[10px] text-white/45 mt-0.5">
          {date}
        </p>
      </div>
    </div>
  );
};

export default TaskbarControls;