import React, { useEffect, useState } from "react";

const BootScreen = ({ onFinish }) => {
  const steps = [
    "Starting OS Portfolio...",
    "Loading Interface...",
    "Initializing Projects...",
    "Preparing Workspace...",
    "Welcome, Sudharsan 👋",
  ];

  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        const next = prev + 1;

        if (next >= steps.length) {
          clearInterval(interval);

          setProgress(100);

          setTimeout(() => {
            onFinish();
          }, 500);

          return prev;
        }

        setProgress((next / (steps.length - 1)) * 100);

        return next;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [onFinish, steps.length]);

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#0b0f19]
        text-white
      "
    >
      {/* Background details */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        />
      </div>

      {/* Center content */}
      <div className="relative w-full max-w-md px-6 text-center">

        {/* Logo */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
          <div className="text-3xl font-bold tracking-tight">
            OS
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-[0.18em]">
          OS PORTFOLIO
        </h1>

        <p className="mt-2 text-sm text-white/40">
          Sudharsan S • Full Stack Developer
        </p>

        {/* Startup message */}
        <div className="mt-10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/60">
              {steps[step]}
            </span>

            <span className="text-white/35">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Progress */}
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="
                h-full
                rounded-full
                bg-blue-500
                transition-all
                duration-500
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-white/20">
          Personal Developer Workspace
        </p>
      </div>
    </div>
  );
};

export default BootScreen;