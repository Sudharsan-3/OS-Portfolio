import React from "react";
import { useWindow } from "../../context/WindowContext";


const StartHere = () => {
  const { openWindow, closeWindow } = useWindow();

  const handleNavigate = (app) => {
    closeWindow();
    setTimeout(() => openWindow(app), 100); // small delay for smooth UX
  };

  return (
    <div className="space-y-6 text-center">
      
      <h2 className="text-2xl font-bold">Welcome 👋</h2>

      <p className="text-gray-700 max-w-md mx-auto">
        Hi, I'm a Full Stack Developer. Explore my work, skills, and projects through this interactive portfolio.
      </p>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        
        <button
          onClick={() => handleNavigate("Projects")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Projects
        </button>

        <button
          onClick={() => handleNavigate("About")}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          About Me
        </button>

        <button
          onClick={() => handleNavigate("Resume")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Resume
        </button>

      </div>

    </div>
  );
};

export default StartHere;