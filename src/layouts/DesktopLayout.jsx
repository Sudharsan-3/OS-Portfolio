import React from "react";
import Desktop from "../components/os/Desktop";
import Taskbar from "../components/os/Taskbar";
import Window from "../components/os/Window";
import { useWindow } from "../context/WindowContext";
import { useEffect } from "react";

// Apps
import AboutApp from "../apps/About/AboutApp";
import ProjectsApp from "../apps/Projects/ProjectsApp";
import ContactApp from "../apps/Contact/ContactApp";
import ResumeApp from "../apps/Resume/ResumeApp";
import HireApp from "../apps/Hire/HireApp";
import StartHere from "../apps/StartHere/StartHere";

const DesktopLayout = () => {
  const { activeWindow, closeWindow, openWindow } = useWindow();

useEffect(() => {
  if (!activeWindow) {
    openWindow("StartHere");
  }
}, []);
  

  const renderApp = () => {
    switch (activeWindow) {
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
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black relative">

      {/* Desktop */}
      <Desktop />

      {/* Taskbar */}
      <Taskbar />

      {/* Window */}
      {activeWindow && (
        <Window title={activeWindow} onClose={closeWindow}>
          {renderApp()}
        </Window>
      )}

    </div>
  );
};

export default DesktopLayout;