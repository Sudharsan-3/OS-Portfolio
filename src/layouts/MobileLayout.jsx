import React, { useState } from "react";

import AboutApp from "../apps/About/AboutApp";
import ProjectsApp from "../apps/Projects/ProjectsApp";
import ResumeApp from "../apps/Resume/ResumeApp";
import ContactApp from "../apps/Contact/ContactApp";
import ProjectDetails from "../apps/Projects/ProjectDetails";

import wallpaper from "../assets/images/mobile-wallpaper.jpg";

import MobileStatusBar from "../components/mobile/MobileStatusBar";
import MobileWidget from "../components/mobile/widgets/MobileWidget";
import MobileDock from "../components/mobile/MobileDock";
import MobileGestureBar from "../components/mobile/MobileGestureBar";

const MobileLayout = () => {
  const [screen, setScreen] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
    setScreen("project");
  };

  const goHome = () => {
    setScreen("home");
    setSelectedProject(null);
  };

  const goProjects = () => {
    setScreen("projects");
  };

  const renderScreen = () => {
    switch (screen) {
      case "about":
        return (
          <div className="min-h-full pb-20">
            <AboutApp />
          </div>
        );

      case "projects":
        return (
          <div className="min-h-full pb-20">
            <ProjectsApp onOpenProject={openProject} />
          </div>
        );

      case "resume":
        return (
          <div className="min-h-full pb-20">
            <ResumeApp />
          </div>
        );

      case "contact":
        return (
          <div className="min-h-full pb-20">
            <ContactApp />
          </div>
        );

      case "project":
        return (
          <div className="relative min-h-full p-4 pb-20">
            <ProjectDetails project={selectedProject} />

            {/* Back to Projects */}
            <button
              onClick={goProjects}
              aria-label="Back to Projects"
              className="
                fixed
                bottom-6
                left-5
                z-50
                text-2xl
                text-gray-900
                drop-shadow-lg
                active:scale-90
                transition-transform
              "
            >
              ◀
            </button>
          </div>
        );

      default:
        return (
          <div
            className="
              min-h-full
              bg-cover
              bg-center
              bg-no-repeat
              text-white
              overflow-hidden
            "
            style={{
              backgroundImage: `url(${wallpaper})`,
            }}
          >
            <MobileStatusBar />

            <MobileWidget />

            <MobileDock setScreen={setScreen} />
          </div>
        );
    }
  };

  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col overflow-hidden">
      {/* Mobile Screen */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {renderScreen()}
      </div>

      {/* Home Gesture Bar */}
      {screen !== "home" && (
        <MobileGestureBar onHome={goHome} />
      )}
    </div>
  );
};

export default MobileLayout;