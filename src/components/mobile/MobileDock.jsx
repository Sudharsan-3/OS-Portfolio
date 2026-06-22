import React from "react";
import {
  User,
  FolderOpen,
  FileText,
  Phone,
} from "lucide-react";

const MobileDock = ({ setScreen }) => {
  return (
    <div
      className="
        fixed
        bottom-5
        left-1/2
        -translate-x-1/2
        w-[90%]
        max-w-sm
        h-20
        rounded-3xl
        bg-black/25
        flex
        items-center
        justify-around
        z-50
      "
    >
        <button
        onClick={() => setScreen("contact")}
        className="flex flex-col items-center text-white"
      >
        <Phone size={22} />
        <span className="text-xs mt-1">
          Contact
        </span>
      </button>
      <button
        onClick={() => setScreen("about")}
        className="flex flex-col items-center text-white"
      >
        <User size={22} />
        <span className="text-xs mt-1">
          About
        </span>
      </button>

      <button
        onClick={() => setScreen("projects")}
        className="flex flex-col items-center text-white"
      >
        <FolderOpen size={22} />
        <span className="text-xs mt-1">
          Projects
        </span>
      </button>

      <button
        onClick={() => setScreen("resume")}
        className="flex flex-col items-center text-white"
      >
        <FileText size={22} />
        <span className="text-xs mt-1">
          Resume
        </span>
      </button>

      
    </div>
  );
};

export default MobileDock;