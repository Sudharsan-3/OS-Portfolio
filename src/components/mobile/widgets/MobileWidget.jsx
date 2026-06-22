import React, { useEffect, useState } from "react";

const MobileWidget = () => {
  const slides = [
    {
      title: "👋 Welcome",
      text:
        "Welcome to Sudharsan’s OS Portfolio.\n\n" +
        "🏠 Home button (●) always returns to home screen.\n" +
        "◀ In Projects, use bottom-left back button to return.\n" +
        "Explore apps using bottom navigation like a real mobile OS.",
    },
    {
      title: "💡 Fun Fact",
      text:
        "JavaScript was created in just 10 days and now powers most of the web.",
    },
    {
      title: "⚡ Developer Insight",
      text:
        "Great developers don’t memorize everything — they build systems, patterns, and speed.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // optional auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-3 mt-3">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white shadow-lg">

        {/* Title */}
        <h3 className="text-sm font-semibold mb-2">
          {slides[index].title}
        </h3>

        {/* Text */}
        <p className="text-xs text-white/90 whitespace-pre-line leading-relaxed">
          {slides[index].text}
        </p>

        {/* Controls */}
        <div className="flex justify-between items-center mt-4 text-xs text-white/70">
          <button onClick={prev} className="hover:text-white transition">
            ◀ Prev
          </button>

          <span>
            {index + 1}/{slides.length}
          </span>

          <button onClick={next} className="hover:text-white transition">
            Next ▶
          </button>
        </div>

      </div>
    </div>
  );
};

export default MobileWidget;