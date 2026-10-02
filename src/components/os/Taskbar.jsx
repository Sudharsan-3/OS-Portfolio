import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import TaskbarWeather from "./taskbar/TaskbarWeather";
import TaskbarWindows from "./taskbar/TaskbarWindows";
import TaskbarHome from "./taskbar/TaskbarHome";
import TaskbarControls from "./taskbar/TaskbarControls";
import useTaskbarOrder from "./taskbar/useTaskbarOrder";
import { useWindow } from "../../context/WindowContext";
import { useTaskbar } from "../../context/TaskbarContext";

const Taskbar = () => {
  const { windows } = useWindow();
  const {
    mode,
    setMode,
    visible,
    setVisible,
  } = useTaskbar();

  const appNames = windows
    .filter((window) => window.name !== "StartHere")
    .map((window) => window.name);

  const { order, moveIcon } =
    useTaskbarOrder(appNames);

  const [hovered, setHovered] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (mode !== "auto-hide") return;

    const handleMouseMove = (event) => {
      const fromBottom =
        window.innerHeight - event.clientY;

      if (fromBottom <= 32) {
        setVisible(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, [mode, setVisible]);

  useEffect(() => {
    if (mode !== "auto-hide" || hovered) {
      return;
    }

    timer.current = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer.current);
  }, [mode, hovered, setVisible]);

  const showTaskbar = () => {
    clearTimeout(timer.current);
    setHovered(true);
    setVisible(true);
  };

  const hideTaskbar = () => {
    setHovered(false);
  };

  const leftIcons = order.filter(
    (_, index) => index % 2 === 0
  );

  const rightIcons = order.filter(
    (_, index) => index % 2 !== 0
  );

  return (
    <>
      {/* Hidden taskbar trigger */}
      {mode === "auto-hide" && !visible && (
        <div
          onMouseEnter={showTaskbar}
          className="
            fixed
            bottom-0
            left-0
            w-full
            h-4
            z-[1000]
            pointer-events-auto
          "
        />
      )}
  
      <div
        onMouseEnter={showTaskbar}
        onMouseLeave={hideTaskbar}
      className={`
        fixed
        bottom-0
        left-0
        w-full
        h-14
        rounded-t-2xl
        border-t border-white/15
        bg-white/[0.07]
        backdrop-blur-2xl
        backdrop-saturate-150
        shadow-[0_-8px_32px_rgba(0,0,0,0.18)]
        z-[999]
        transition-all
        duration-300
        ease-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }
      `}
    >
      <div
        className="
          relative
          h-full
          w-full
          px-5
        "
      >
        {/* Weather */}
        <div className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
        ">
          <TaskbarWeather />
        </div>

        {/* Center dock */}
        <div className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
        ">
          <div className="
            grid
            grid-cols-[1fr_auto_1fr]
            items-center
            w-[58%]
            max-w-2xl
          ">
            <div className="flex justify-end pr-2">
              <TaskbarWindows
                names={leftIcons}
                moveIcon={moveIcon}
              />
            </div>

            <TaskbarHome />

            <div className="flex justify-start pl-2">
              <TaskbarWindows
                names={rightIcons}
                moveIcon={moveIcon}
              />
            </div>
          </div>
        </div>

        {/* Right controls */}
        <div className="
          absolute
          right-5
          top-1/2
          -translate-y-1/2
        ">
          <TaskbarControls
            taskbarMode={mode}
            setTaskbarMode={setMode}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Taskbar;