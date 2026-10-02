import { useEffect, useState } from "react";

import BootScreen from "./components/BootScreen";
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import WelcomePopup from "./components/WelcomePopup";

function App() {
  const firstVisit =
    localStorage.getItem("osPortfolioVisited") !== "true";

  const [booted, setBooted] = useState(!firstVisit);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      if (mobile) {
        setShowWelcome(false);
      }
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  const handleBootFinish = () => {
    localStorage.setItem("osPortfolioVisited", "true");

    setBooted(true);

    // Windows welcome popup only on first desktop visit
    if (window.innerWidth >= 768) {
      setTimeout(() => {
        setShowWelcome(true);
      }, 400);
    }
  };

  return (
    <>
      {!booted ? (
        <BootScreen onFinish={handleBootFinish} />
      ) : (
        <>
          {isMobile ? <MobileLayout /> : <DesktopLayout />}

          {!isMobile && showWelcome && (
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