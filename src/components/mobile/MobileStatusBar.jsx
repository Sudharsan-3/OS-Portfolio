import React, { useEffect, useState } from "react";
import { Battery, Wifi, Signal } from "lucide-react";

const MobileStatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-5 pt-4 text-white">
      <div className="flex items-center justify-between">
        {/* Time */}
        <span className="font-semibold tracking-wide">
          {time}
        </span>

        {/* Status icons */}
        <div className="flex items-center gap-2">
          <Signal size={14} strokeWidth={2} />
          <Wifi size={14} strokeWidth={2} />

          <div className="flex items-center gap-1">
            <Battery size={16} strokeWidth={2} />
            <span className="text-xs font-medium">
              69%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStatusBar;