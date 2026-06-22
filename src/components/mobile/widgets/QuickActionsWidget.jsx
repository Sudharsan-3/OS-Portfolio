import React from "react";

const QuickActionsWidget = ({ onNavigate }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white">
      <h3 className="text-sm font-semibold mb-3">
        ⚡ Quick Actions
      </h3>

      <div className="flex flex-col gap-2 text-xs">
        <button onClick={() => onNavigate("projects")}>
          📁 View Projects
        </button>

        <button onClick={() => onNavigate("resume")}>
          📄 Open Resume
        </button>

        <button onClick={() => onNavigate("contact")}>
          📬 Contact Me
        </button>
      </div>
    </div>
  );
};

export default QuickActionsWidget;