import React, { createContext, useContext, useState } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);

  const focusWindow = (name) => {
    setWindows((prev) => {
      const target = prev.find((w) => w.name === name);
  
      if (!target) return prev;
  
      const others = prev.filter((w) => w.name !== name);
  
      return [...others, target];
    });
  };

  const openWindow = (name, data = null) => {
    setWindows((prev) => {
      const existing = prev.find(
        (w) =>
          w.name === name &&
          JSON.stringify(w.data) === JSON.stringify(data)
      );
  
      if (existing) {
        const others = prev.filter(
          (w) =>
            !(
              w.name === name &&
              JSON.stringify(w.data) === JSON.stringify(data)
            )
        );
      
        return [
          ...others,
          {
            ...existing,
            minimized: false,
          },
        ];
      }
  
      return [
        ...prev,
        {
          name,
          data,
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
    setWindows((prev) => {
      const target = prev.find((w) => w.name === name);
  
      if (!target) return prev;
  
      const others = prev.filter((w) => w.name !== name);
  
      return [
        ...others,
        {
          ...target,
          minimized: false,
        },
      ];
    });
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
        focusWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => useContext(WindowContext);