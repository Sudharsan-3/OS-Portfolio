import React from "react";

const Window = ({ title, children, onClose }) => {
  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[500px] lg:w-[700px] bg-white rounded-xl shadow-2xl overflow-hidden">
      
      {/* Title Bar */}
      <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2">
        <span className="font-medium">{title}</span>

        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm"
        >
          ✕
        </button>
      </div>

      {/* Content Area */}
      <div className="p-4 max-h-[70vh] overflow-y-auto">
        {children}
      </div>

    </div>
  );
};

export default Window;