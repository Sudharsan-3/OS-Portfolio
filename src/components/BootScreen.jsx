import React, { useEffect, useState } from "react";

const BootScreen = ({ onFinish }) => {
  const [text, setText] = useState("Starting OS Portfolio...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [
      "Starting OS Portfolio...",
      "Loading Window Engine...",
      "Initializing Projects...",
      "Preparing Workspace...",
      "Welcome, Sudharsan 👋",
    ];

    let i = 0;

    const interval = setInterval(() => {
      i++;

      setProgress((i / steps.length) * 100);

      if (i < steps.length) {
        setText(steps[i]);
      } else {
        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 700);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white">

      {/* LOGO */}
      <h1 className="text-4xl font-bold tracking-widest">
        OS PORTFOLIO
      </h1>

      {/* SUB TEXT */}
      <p className="mt-4 text-gray-400 text-sm animate-pulse">
        {text}
      </p>

      {/* PROGRESS BAR */}
      <div className="w-72 h-1 bg-gray-800 mt-6 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* PERCENT */}
      <p className="text-xs text-gray-500 mt-2">
        {Math.round(progress)}%
      </p>
    </div>
  );
};

export default BootScreen;