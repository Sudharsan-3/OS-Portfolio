import { useEffect, useState } from "react";
import BootScreen from "./components/BootScreen";
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import WelcomePopup from "./components/WelcomePopup";

function App() {
  const [booted, setBooted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // detect device AFTER boot
  useEffect(() => {
    if (!booted) return;

    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, [booted]);

  return (
    <>
      {!booted ? (
        <BootScreen
          onFinish={() => {
            setBooted(true);

            setTimeout(() => {
              setShowWelcome(true);
            }, 500);
          }}
        />
      ) : (
        <>
          {/* DEVICE SWITCH HERE */}
          {isMobile ? <MobileLayout /> : <DesktopLayout />}

          {/* WELCOME POPUP (same for both) */}
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