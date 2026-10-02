import React, { useRef, useState } from "react";
import {
  AppWindow,
  BriefcaseBusiness,
  FileText,
  FolderOpen,
  Mail,
  PanelsTopLeft,
  UserRound,
} from "lucide-react";
import { useWindow } from "../../../context/WindowContext";

const icons = {
  About: UserRound,
  Projects: FolderOpen,
  Resume: FileText,
  Contact: Mail,
  Hire: BriefcaseBusiness,
  ProjectDetails: PanelsTopLeft,
};

const labels = {
  About: "About Me",
  Projects: "Projects",
  Resume: "Resume",
  Contact: "Contact",
  Hire: "Hire Me",
  ProjectDetails: "Project Details",
};

const TaskbarWindows = ({ names, moveIcon }) => {
    const {
        activeWindow,
        windows,
        restoreWindow,
        minimizeWindow,
      } = useWindow();

  const [dragging, setDragging] = useState(null);

  const holdTimer = useRef(null);
  const startX = useRef(0);
  const lastX = useRef(0);
  const didDrag = useRef(false);

  const startHold = (event, name) => {
    startX.current = event.clientX;
    lastX.current = event.clientX;
    didDrag.current = false;

    holdTimer.current = setTimeout(() => {
      setDragging(name);
      event.currentTarget.setPointerCapture?.(
        event.pointerId
      );
    }, 450);
  };

  const move = (event, name) => {
    if (dragging !== name) return;

    const distance = event.clientX - lastX.current;

    if (Math.abs(distance) < 30) return;

    const direction = distance > 0 ? "right" : "left";

    moveIcon(name, direction);

    lastX.current = event.clientX;
    didDrag.current = true;
  };

  const finish = (event) => {
    clearTimeout(holdTimer.current);

    if (dragging) {
      event.currentTarget.releasePointerCapture?.(
        event.pointerId
      );
    }

    setDragging(null);
  };

  const handleClick = (name) => {
    if (didDrag.current) {
      didDrag.current = false;
      return;
    }
  
    const window = windows.find(
      (item) => item.name === name
    );
  
    if (!window) {
      return;
    }
  
    if (activeWindow === name && !window.minimized) {
      minimizeWindow(name);
      return;
    }
  
    restoreWindow(name);
  };

  return (
    <div className="flex items-center gap-1.5 pointer-events-auto">
      {names.map((name) => {
        const window = windows.find(
          (item) => item.name === name
        );

        if (!window) return null;

        const Icon = icons[name] || AppWindow;

        const label =
          name === "ProjectDetails"
            ? window.data?.title || labels.ProjectDetails
            : labels[name] || name;

        const active = activeWindow === name;

        return (
          <button
            key={name}
            title={label}
            aria-label={label}
            onPointerDown={(event) =>
              startHold(event, name)
            }
            onPointerMove={(event) =>
              move(event, name)
            }
            onPointerUp={finish}
            onPointerCancel={finish}
            onClick={() => handleClick(name)}
            className={`
              relative
              shrink-0
              flex
              items-center
              justify-center
              w-9
              h-9
              rounded-xl
              border
              transition-all
              select-none
              ${
                active
                  ? "bg-blue-500 border-blue-400 text-white shadow-md"
                  : "bg-white/8 border-white/5 text-white/70 hover:bg-white/15 hover:text-white"
              }
              ${
                dragging === name
                  ? "scale-110 cursor-grabbing"
                  : "cursor-grab"
              }
            `}
          >
            <Icon size={17} />

            {active && (
              <span className="
                absolute
                -bottom-1
                left-1/2
                -translate-x-1/2
                w-1
                h-1
                rounded-full
                bg-blue-300
              " />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TaskbarWindows;