import React, { createContext, useContext, useState } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);

  const openWindow = (name) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.name === name);

      if (existing) {
        return prev.map((w) =>
          w.name === name
            ? {
                ...w,
                minimized: false,
              }
            : w
        );
      }

      return [
        ...prev,
        {
          name,
          minimized: false,
          maximized: false,
        },
      ];
    });
  };

  const closeWindow = (name) => {
    setWindows((prev) => prev.filter((w) => w.name !== name));
  };

  const minimizeWindow = (name) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.name === name
          ? {
              ...w,
              minimized: true,
            }
          : w
      )
    );
  };

  const maximizeWindow = (name) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.name === name
          ? {
              ...w,
              maximized: !w.maximized,
            }
          : w
      )
    );
  };

  const restoreWindow = (name) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.name === name
          ? {
              ...w,
              minimized: false,
            }
          : w
      )
    );
  };

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        restoreWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => useContext(WindowContext);