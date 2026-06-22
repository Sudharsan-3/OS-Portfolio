import React from "react";

const WelcomeWidget = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white">
      <h3 className="text-sm font-semibold mb-2">
        👋 Welcome
      </h3>

      <p className="text-xs text-white/90 leading-relaxed">
        Welcome to Sudharsan’s OS Portfolio.{"\n"}
        Tap apps below to explore projects, resume, and contact.
        {"\n\n"}
        💡 Tip: Use bottom navigation anytime to go home.
      </p>
    </div>
  );
};

export default WelcomeWidget;