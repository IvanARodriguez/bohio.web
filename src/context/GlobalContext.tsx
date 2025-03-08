"use client";

import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

// Define types
interface App {
  header: {
    nav: {
      isOpen: boolean;
      setNavOpen: (isOpen: boolean) => void;
    };
  };
}

interface GlobalState {
  app: App;
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

// Provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo<GlobalState>(
    () => ({
      app: {
        header: {
          nav: {
            isOpen: isNavOpen,
            setNavOpen: setIsNavOpen,
          },
        },
      },
    }),
    [isNavOpen]
  );

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

// Custom hook for using context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
