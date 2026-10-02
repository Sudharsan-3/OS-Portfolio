import React, { useEffect, useRef, useState } from "react";

const MobileWidget = () => {
  const slides = [
    {
      type: "welcome",
      title: "👋 Welcome Back",
      text:
        "🏠 Home always takes you back to the home screen.\n" +
        "◀ Projects has a bottom-left back button.\n\n" +
        "Explore the portfolio like a real mobile OS.",
    },
    {
      type: "fact",
      title: "💡 Tech Fun Fact",
      text: "",
    },
    {
      type: "insight",
      title: "⚡ Developer Insight",
      text:
        "You don't need to memorize everything.\n\n" +
        "Great developers know how to search, understand, adapt, and build.",
    },
  ];

  const facts = [
    "JavaScript was created in just 10 days in 1995.",
    "Git was created by Linus Torvalds in 2005.",
    "The first website went live in 1991.",
    "HTML stands for HyperText Markup Language.",
    "React was originally created at Facebook.",
    "CSS was first proposed in 1994.",
    "HTTP is how browsers communicate with web servers.",
    "console.log() is one of the most common JavaScript debugging tools.",
    "Vite is built for fast modern frontend development.",
    "GitHub helps developers collaborate on code worldwide.",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [factIndex, setFactIndex] = useState(0);

  const pointerStartX = useRef(null);
  const pointerCurrentX = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const handlePointerDown = (event) => {
    pointerStartX.current = event.clientX;
    pointerCurrentX.current = event.clientX;

    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (pointerStartX.current === null) {
      return;
    }

    pointerCurrentX.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (
      pointerStartX.current === null ||
      pointerCurrentX.current === null
    ) {
      return;
    }

    const distance =
      pointerStartX.current - pointerCurrentX.current;

    if (Math.abs(distance) >= 50) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    pointerStartX.current = null;
    pointerCurrentX.current = null;

    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  const handlePointerCancel = (event) => {
    pointerStartX.current = null;
    pointerCurrentX.current = null;

    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  // Automatically change widget
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Rotate facts while the fact slide is active
  useEffect(() => {
    if (currentSlide !== 1) {
      return;
    }

    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % facts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const activeSlide = slides[currentSlide];

  return (
    <div className="px-4 mt-4">
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        className="
          relative
          h-[205px]
          rounded-3xl
          border border-white/20
          bg-black/20
          backdrop-blur-lg
          shadow-lg
          px-5
          py-4
          select-none
          overflow-hidden
          touch-pan-y
          cursor-grab
          active:cursor-grabbing
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/50">
              Portfolio Widget
            </p>

            <h2 className="text-base font-semibold text-white mt-0.5">
              {activeSlide.title}
            </h2>
          </div>

          <span className="text-[10px] text-white/50">
            {currentSlide + 1}/{slides.length}
          </span>
        </div>

        {/* Content */}
        <div className="h-[115px] mt-3 flex items-start">
          <p className="text-xs leading-5 text-white/90 whitespace-pre-line">
            {activeSlide.type === "fact"
              ? facts[factIndex]
              : activeSlide.text}
          </p>
        </div>

        {/* Fact label */}
        <div className="absolute bottom-8 left-5">
          {activeSlide.type === "fact" && (
            <p className="text-[9px] text-white/40">
              Local fact • No API
            </p>
          )}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          <div className="flex items-center gap-1.5">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`
                  h-1.5 rounded-full transition-all duration-300
                  ${
                    currentSlide === index
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/35"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileWidget;