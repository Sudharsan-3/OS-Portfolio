import React, { useEffect, useState } from "react";
import { funFacts } from "../../../data/mobileWidgetSlides";

const FunFactsWidget = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % funFacts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white">
      <h3 className="text-sm font-semibold mb-2">
        💡 Fun Fact
      </h3>

      <p className="text-xs text-white/90">
        {funFacts[index]}
      </p>
    </div>
  );
};

export default FunFactsWidget;