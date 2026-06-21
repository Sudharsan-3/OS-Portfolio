import React, { useEffect, useState } from "react";

const BootScreen = ({ onFinish }) => {
  const [text, setText] = useState("Starting OS Portfolio...");

  useEffect(() => {
    const steps = [
      "Starting OS Portfolio...",
      "Loading Windows Engine...",
      "Loading Projects...",
      "Preparing Workspace...",
      "Welcome, Sudharsan 👋",
    ];

    let i = 0;

    const interval = setInterval(() => {
      i++;

      if (i < steps.length) {
        setText(steps[i]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onFinish(); // move to desktop
        }, 500);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white">
      
      {/* Logo / Title */}
      <h1 className="text-3xl font-bold tracking-widest">
        OS PORTFOLIO
      </h1>

      {/* Loading Text */}
      <p className="mt-6 text-gray-300 text-sm animate-pulse">
        {text}
      </p>

      {/* Loading Bar */}
      <div className="w-64 h-1 bg-gray-700 mt-6 rounded overflow-hidden">
        <div className="h-full bg-blue-500 animate-pulse w-full"></div>
      </div>

    </div>
  );
};

export default BootScreen;