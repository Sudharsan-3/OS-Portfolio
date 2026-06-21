import React, { useState } from "react";
import BootScreen from "./components/BootScreen";
import DesktopLayout from "./layouts/DesktopLayout";
import WelcomePopup from "./components/WelcomePopup";

function App() {
  const [booted, setBooted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <>
      {!booted ? (
        <BootScreen
          onFinish={() => {
            setBooted(true);

            // show popup AFTER boot
            setTimeout(() => {
              setShowWelcome(true);
            }, 500);
          }}
        />
      ) : (
        <>
          <DesktopLayout />

          {showWelcome && (
            <WelcomePopup
              onClose={() => setShowWelcome(false)}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;