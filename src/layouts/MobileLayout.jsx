import React, { useState } from "react";

import AboutApp from "../apps/About/AboutApp";
import ProjectsApp from "../apps/Projects/ProjectsApp";
import ResumeApp from "../apps/Resume/ResumeApp";
import ContactApp from "../apps/Contact/ContactApp";
import ProjectDetails from "../apps/Projects/ProjectDetails";

import {
  Home,
  User,
  FolderOpen,
  FileText,
  Mail,
} from "lucide-react";

const MobileLayout = () => {
  const [screen, setScreen] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
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
          <div className="p-4">
            <button
              onClick={() => setScreen("projects")}
              className="text-blue-600 text-sm mb-4"
            >
              ← Back
            </button>

            <ProjectDetails project={selectedProject} />
          </div>
        );

      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold">
              OS Portfolio
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Full Stack Developer
            </p>

            {/* ANDROID STYLE GRID */}
            <div className="grid grid-cols-2 gap-4 mt-6">

              <button
                onClick={() => setScreen("about")}
                className="p-4 bg-white border rounded-2xl shadow-sm"
              >
                <User />
                <p className="text-sm mt-2">About</p>
              </button>

              <button
                onClick={() => setScreen("projects")}
                className="p-4 bg-white border rounded-2xl shadow-sm"
              >
                <FolderOpen />
                <p className="text-sm mt-2">Projects</p>
              </button>

              <button
                onClick={() => setScreen("resume")}
                className="p-4 bg-white border rounded-2xl shadow-sm"
              >
                <FileText />
                <p className="text-sm mt-2">Resume</p>
              </button>

              <button
                onClick={() => setScreen("contact")}
                className="p-4 bg-white border rounded-2xl shadow-sm"
              >
                <Mail />
                <p className="text-sm mt-2">Contact</p>
              </button>

            </div>
          </div>
        );
    }
  };

  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col">

      {/* SCREEN */}
      <div className="flex-1 overflow-y-auto">
        {renderScreen()}
      </div>

      {/* ANDROID BOTTOM BAR */}
      {screen !== "home" && (
        <div className="h-14 border-t bg-white flex justify-around items-center">

          <button onClick={() => setScreen("home")}>
            <Home size={20} />
          </button>

          <button onClick={() => setScreen("about")}>
            <User size={20} />
          </button>

          <button onClick={() => setScreen("projects")}>
            <FolderOpen size={20} />
          </button>

          <button onClick={() => setScreen("resume")}>
            <FileText size={20} />
          </button>

          <button onClick={() => setScreen("contact")}>
            <Mail size={20} />
          </button>

        </div>
      )}

    </div>
  );
};

export default MobileLayout;