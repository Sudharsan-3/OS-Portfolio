import React, { useState } from "react";
import BootScreen from "./components/BootScreen";
import DesktopLayout from "./layouts/DesktopLayout";

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted ? (
        <BootScreen onFinish={() => setBooted(true)} />
      ) : (
        <DesktopLayout />
      )}
    </>
  );
}

export default App;