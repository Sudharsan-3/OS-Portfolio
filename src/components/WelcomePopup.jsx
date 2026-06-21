import React, { useEffect } from "react";
import { X } from "lucide-react";

const WelcomePopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // auto close after 5 sec

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
  
      {/* popup window */}
      <div
        className="relative w-[320px] bg-white rounded-xl shadow-2xl p-5 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
  
        {/* content */}
        <h2 className="text-lg font-bold mb-2">
          Welcome 👋
        </h2>
  
        <p className="text-sm text-gray-600">
          This is Sudharsan’s OS Portfolio.<br />
          Explore projects, resume, and contact from the Start Menu.
        </p>
  
        <div className="mt-4 text-xs text-gray-400">
          Click anywhere to continue
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;