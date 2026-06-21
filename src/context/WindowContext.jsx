import React, { createContext, useContext, useState } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

  // OPEN WINDOW
  const openWindow = (name, data = null) => {
    setWindows((prev) => {
      const exists = prev.find((w) => w.name === name);

      if (exists) {
        return prev.map((w) =>
          w.name === name
            ? { ...w, minimized: false }
            : w
        );
      }

      const maxZ = prev.length
        ? Math.max(...prev.map((w) => w.zIndex || 10))
        : 10;

      return [
        ...prev,
        {
          name,
          data,
          minimized: false,
          maximized: false,
          position: { x: 100, y: 80 },
          zIndex: maxZ + 1,
        },
      ];
    });

    setActiveWindow(name);
  };

  // CLOSE
  const closeWindow = (name) => {
    setWindows((prev) => prev.filter((w) => w.name !== name));
  };

  // MINIMIZE
  const minimizeWindow = (name) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.name === name ? { ...w, minimized: true } : w
      )
    );
  };

  // MAXIMIZE
  const maximizeWindow = (name) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.name === name
          ? { ...w, maximized: !w.maximized }
          : w
      )
    );
  };

  // RESTORE
  const restoreWindow = (name) => {
    setActiveWindow(name);

    setWindows((prev) =>
      prev.map((w) =>
        w.name === name
          ? { ...w, minimized: false }
          : w
      )
    );
  };

  // FOCUS WINDOW (FIXED)
  const focusWindow = (name) => {
    setActiveWindow(name);

    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.zIndex || 10));

      return prev.map((w) =>
        w.name === name
          ? { ...w, zIndex: maxZ + 1 }
          : w
      );
    });
  };

  // MOVE WINDOW
  const moveWindow = (name, position) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.name === name
          ? { ...w, position }
          : w
      )
    );
  };

  return (
    <WindowContext.Provider
      value={{
        windows,
        activeWindow,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        restoreWindow,
        focusWindow,
        moveWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => useContext(WindowContext);