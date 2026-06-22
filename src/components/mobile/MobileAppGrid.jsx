import React from "react";
import {
  User,
  FolderOpen,
  FileText,
  Mail,
} from "lucide-react";

const MobileAppGrid = ({ setScreen }) => {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-y-10
        gap-x-6
        mt-20
        justify-items-center
      "
    >
      {/* ABOUT */}
      <button
        onClick={() => setScreen("about")}
        className="flex flex-col items-center gap-2"
      >
        <div
          className="
            w-16 h-16
            rounded-2xl
            bg-white/20
            backdrop-blur-md
            border border-white/20
            shadow-lg
            flex items-center justify-center
          "
        >
          <User size={28} />
        </div>

        <span className="text-sm text-white font-medium">
          About
        </span>
      </button>

      {/* PROJECTS */}
      <button
        onClick={() => setScreen("projects")}
        className="flex flex-col items-center gap-2"
      >
        <div
          className="
            w-16 h-16
            rounded-2xl
            bg-white/20
            backdrop-blur-md
            border border-white/20
            shadow-lg
            flex items-center justify-center
          "
        >
          <FolderOpen size={28} />
        </div>

        <span className="text-sm text-white font-medium">
          Projects
        </span>
      </button>

      {/* RESUME */}
      <button
        onClick={() => setScreen("resume")}
        className="flex flex-col items-center gap-2"
      >
        <div
          className="
            w-16 h-16
            rounded-2xl
            bg-white/20
            backdrop-blur-md
            border border-white/20
            shadow-lg
            flex items-center justify-center
          "
        >
          <FileText size={28} />
        </div>

        <span className="text-sm text-white font-medium">
          Resume
        </span>
      </button>

      {/* CONTACT */}
      <button
        onClick={() => setScreen("contact")}
        className="flex flex-col items-center gap-2"
      >
        <div
          className="
            w-16 h-16
            rounded-2xl
            bg-white/20
            backdrop-blur-md
            border border-white/20
            shadow-lg
            flex items-center justify-center
          "
        >
          <Mail size={28} />
        </div>

        <span className="text-sm text-white font-medium">
          Contact
        </span>
      </button>
    </div>
  );
};

export default MobileAppGrid;