import React, { useEffect } from "react";
import { X } from "lucide-react";

const WelcomePopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white border border-gray-200 shadow-xl rounded-xl p-4 animate-fade-in">

      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-900">
          Welcome 👋
        </h2>

        <button onClick={onClose}>
          <X size={16} />
        </button>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        Explore my OS-style portfolio — Projects, Resume, and Experience are ready for you.
      </p>

      <div className="mt-3 flex gap-2 text-xs text-gray-500">
        <span>💡 Click icons on desktop</span>
      </div>
    </div>
  );
};

export default WelcomePopup;