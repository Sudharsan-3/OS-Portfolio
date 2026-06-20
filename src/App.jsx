import React from "react";
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import useDeviceType from "./hooks/useDeviceType";

const App = () => {
  const device = useDeviceType();

  if (device === "mobile") {
    return <MobileLayout />;
  }

  // tablet + desktop use same layout (simplified desktop)
  return <DesktopLayout />;
};

export default App;