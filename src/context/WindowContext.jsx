import React, { createContext, useContext, useState } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [activeWindow, setActiveWindow] = useState(null);

  const openWindow = (name) => {
    setActiveWindow(name);
  };

  const closeWindow = () => {
    setActiveWindow(null);
  };

  return (
    <WindowContext.Provider
      value={{
        activeWindow,
        openWindow,
        closeWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => useContext(WindowContext);