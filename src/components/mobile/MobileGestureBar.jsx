import React, { useEffect, useState } from "react";

const MobileGestureBar = ({ onHome }) => {
    const [highlight, setHighlight] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setHighlight(false);
      }, 1500);
    
      return () => clearTimeout(timer);
    }, []);

  return (
    <div
    onClick={onHome}
    className={`
      fixed
      bottom-3
      left-1/2
      -translate-x-1/2
      w-28
      h-1.5
      rounded-full
      cursor-pointer
      transition-all duration-1000
      z-50
      ${
        highlight
          ? "bg-black"
          : "bg-white/70"
      }
    `}
  />
  );
};

export default MobileGestureBar;