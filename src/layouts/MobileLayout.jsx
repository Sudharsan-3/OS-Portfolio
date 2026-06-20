import React from "react";
import { useWindow } from "../context/WindowContext";

// Apps
import AboutApp from "../apps/About/AboutApp";
import ProjectsApp from "../apps/Projects/ProjectsApp";
import ContactApp from "../apps/Contact/ContactApp";
import ResumeApp from "../apps/Resume/ResumeApp";
import HireApp from "../apps/Hire/HireApp";
import StartHere from "../apps/StartHere/StartHere";

const MobileLayout = () => {
  const { activeWindow, openWindow, closeWindow } = useWindow();

  const apps = [
    { name: "About", icon: "🧑‍💻" },
    { name: "Projects", icon: "📁" },
    { name: "Resume", icon: "📄" },
    { name: "Contact", icon: "📞" },
    { name: "Hire Me", icon: "💼" },
  ];

  const renderApp = () => {
    switch (activeWindow) {
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
      case "StartHere":
        return <StartHere />;
      default:
        return null;
    }
  };

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col">
      
      {/* Home Screen */}
      {!activeWindow && (
        <div className="flex-1 grid grid-cols-3 gap-6 p-6">
          {apps.map((app, index) => (
            <div
              key={index}
              onClick={() => openWindow(app.name)}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="text-4xl mb-2">{app.icon}</div>
              <span className="text-sm text-center">{app.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* App Screen */}
      {activeWindow && (
        <div className="flex-1 bg-white text-black p-4 overflow-y-auto">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">{activeWindow}</h2>
            <button
              onClick={closeWindow}
              className="text-red-500 font-bold"
            >
              Back
            </button>
          </div>

          {renderApp()}
        </div>
      )}

    </div>
  );
};

export default MobileLayout;