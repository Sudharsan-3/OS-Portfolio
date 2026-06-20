import React, { useEffect } from "react";

import Desktop from "../components/os/Desktop";
import Taskbar from "../components/os/Taskbar";
import Window from "../components/os/Window";

import { useWindow } from "../context/WindowContext";
import ProjectDetailsWindow from "../apps/Projects/ProjectDetailsWindow";

// Apps
import AboutApp from "../apps/About/AboutApp";
import ProjectsApp from "../apps/Projects/ProjectsApp";
import ContactApp from "../apps/Contact/ContactApp";
import ResumeApp from "../apps/Resume/ResumeApp";
import HireApp from "../apps/Hire/HireApp";
import StartHere from "../apps/StartHere/StartHere";

const DesktopLayout = () => {
  const { windows, openWindow } = useWindow();

  useEffect(() => {
    const alreadyOpen = windows.some(
      (window) => window.name === "StartHere"
    );

    if (!alreadyOpen) {
      openWindow("StartHere");
    }
  }, []);

  const renderApp = (window) => {
    switch (window.name) {
      case "StartHere":
        return <StartHere />;

      case "About":
        return <AboutApp />;

      case "Projects":
        return <ProjectsApp />;

      case "Contact":
        return <ContactApp />;

      case "Resume":
        return <ResumeApp />;

      case "Hire Me":
        return <HireApp />;
      case "ProjectDetails":
        return (
          <ProjectDetailsWindow
            project={window.data}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black relative">

      <Desktop />

      {windows
        .filter((window) => !window.minimized)
        .map((window) => (
          <Window
          key={`${window.name}-${window.data?.title || ""}`}
            windowData={window}
          >
            {renderApp(window)}
          </Window>
        ))}

      <Taskbar />
    </div>
  );
};

export default DesktopLayout;