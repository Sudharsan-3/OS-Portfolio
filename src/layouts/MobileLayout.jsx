import React, { useState } from "react";

import AboutApp from "../apps/About/AboutApp";
import ProjectsApp from "../apps/Projects/ProjectsApp";
import ResumeApp from "../apps/Resume/ResumeApp";
import ContactApp from "../apps/Contact/ContactApp";
import ProjectDetails from "../apps/Projects/ProjectDetails";
import wallpaper from "../assets/images/mobile-wallpaper.jpg";
import profileImg from "../assets/images/profile.jpg";
import MobileStatusBar from "../components/mobile/MobileStatusBar";
import MobileWidget from "../components/mobile/widgets/MobileWidget";
import MobileAppGrid from "../components/mobile/MobileAppGrid";
import MobileDock from "../components/mobile/MobileDock";
import MobileGestureBar from "../components/mobile/MobileGestureBar";



const MobileLayout = () => {
  const [screen, setScreen] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    console.log("PROJECT CLICKED", project);

    setSelectedProject(project);
    setScreen("project");
  };

  const renderScreen = () => {
    switch (screen) {
      case "about":
        return <AboutApp />;

      case "projects":
        return (
          <ProjectsApp onOpenProject={openProject} />
        );

      case "resume":
        return <ResumeApp />;

      case "contact":
        return <ContactApp />;

        case "project":
          return (
            <div className="p-4 pb-16">
              <ProjectDetails project={selectedProject} />
        
              <button
                onClick={() => setScreen("projects")}
                className="
                  fixed
                  bottom-6
                  left-5
                  text-white
                  text-2xl
                  drop-shadow-lg
                  z-50
                "
              >
                ◀
              </button>
            </div>
          );

      default:
        return (
          <div
            className="min-h-full bg-cover bg-center text-white"
            style={{
              backgroundImage: `url(${wallpaper})`,
            }}
          >
            <MobileStatusBar />

            <MobileWidget />


            {/* App Grid */}
            {/* <MobileAppGrid setScreen={setScreen} /> */}

            <MobileDock setScreen={setScreen} />
          </div>
        );
    }
  };

  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col">

      {/* SCREEN */}
      <>
        <div className="flex-1 overflow-y-auto">
          {renderScreen()}
        </div>

        {screen !== "home" && (
          <MobileGestureBar
            onHome={() => setScreen("home")}
          />
        )}
      </>


    </div>
  );
};

export default MobileLayout;