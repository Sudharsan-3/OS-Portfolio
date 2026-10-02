import React, {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  
  const TaskbarContext = createContext(null);
  
  export const TaskbarProvider = ({ children }) => {
    const [mode, setMode] = useState(
      () => localStorage.getItem("taskbarMode") || "static"
    );
  
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      localStorage.setItem("taskbarMode", mode);
  
      if (mode === "static") {
        setVisible(true);
      }
    }, [mode]);
  
    return (
      <TaskbarContext.Provider
        value={{
          mode,
          setMode,
          visible,
          setVisible,
        }}
      >
        {children}
      </TaskbarContext.Provider>
    );
  };
  
  export const useTaskbar = () => {
    const context = useContext(TaskbarContext);
  
    if (!context) {
      throw new Error(
        "useTaskbar must be used inside TaskbarProvider"
      );
    }
  
    return context;
  };