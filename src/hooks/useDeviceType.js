import { useEffect, useState } from "react";

const getDeviceType = (width) => {
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

const useDeviceType = () => {
  const [device, setDevice] = useState(getDeviceType(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};

export default useDeviceType;