import React, { useEffect, useState } from "react";
import { Battery, Wifi, Signal } from "lucide-react";

const MobileStatusBar = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

    //   setDate(
    //     now.toLocaleDateString([], {
    //       weekday: "short",
    //       month: "short",
    //       day: "numeric",
    //     })
    //   );
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-5 pt-4 text-white">
      <div className="flex justify-between items-center">
        <span className="font-semibold">
          {time}
        </span>

        <div className="flex items-center gap-2">
          <Signal size={14} />
          <Wifi size={14} />

          <div className="flex items-center gap-1">
            <Battery size={16} />
            <span className="text-xs">
              69%
            </span>
          </div>
        </div>
      </div>

      <p className="text-xs text-white/70 mt-1">
        {date}
      </p>
    </div>
  );
};

export default MobileStatusBar;