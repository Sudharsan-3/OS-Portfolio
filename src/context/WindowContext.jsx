import React, { createContext, useContext, useState } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

  const openWindow = (name, data = null) => {
    setWindows((prev) => {
      const exists = prev.find((w) => w.name === name);

      if (exists) {
        const maxZ = prev.length
          ? Math.max(...prev.map((w) => w.zIndex || 10))
          : 10;
      
        return prev.map((w) =>
          w.name === name
            ? {
                ...w,
                minimized: false,
                zIndex: maxZ + 1,
                data: data ?? w.data,
              }
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

  const closeWindow = (name) => {
    setWindows((prev) => {
      const remaining = prev.filter((w) => w.name !== name);

      setActiveWindow((current) => {
        if (current !== name) return current;

        const next = remaining
          .filter((w) => !w.minimized)
          .sort((a, b) => b.zIndex - a.zIndex)[0];

        return next?.name ?? null;
      });

      return remaining;
    });
  };

  const minimizeWindow = (name) => {
    setWindows((prev) => {
      const updatedWindows = prev.map((w) =>
        w.name === name
          ? { ...w, minimized: true }
          : w
      );
  
      setActiveWindow((current) => {
        if (current !== name) {
          return current;
        }
  
        const nextWindow = updatedWindows
          .filter((w) => !w.minimized)
          .sort(
            (a, b) => (b.zIndex || 0) - (a.zIndex || 0)
          )[0];
  
        return nextWindow?.name ?? null;
      });
  
      return updatedWindows;
    });
  };

  const maximizeWindow = (name) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.name === name
          ? { ...w, maximized: !w.maximized }
          : w
      )
    );
  };

  const restoreWindow = (name) => {
    setWindows((prev) => {
      const maxZ = prev.length
        ? Math.max(...prev.map((w) => w.zIndex || 10))
        : 10;
  
      return prev.map((w) =>
        w.name === name
          ? {
              ...w,
              minimized: false,
              zIndex: maxZ + 1,
            }
          : w
      );
    });
  
    setActiveWindow(name);
  };

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

  const moveWindow = (name, position) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.name === name ? { ...w, position } : w
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