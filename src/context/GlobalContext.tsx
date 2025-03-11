"use client";
import { Dictionary } from "@/app/[lang]/dictionaries/dictionary";
import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

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
  dictionary: Dictionary;
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider = ({
  children,
  dictionary,
}: {
  children: ReactNode;
  dictionary: Dictionary;
}) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

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
      dictionary,
    }),
    [isNavOpen, dictionary]
  );

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export const useDictionary = () => {
  const context = useGlobalContext();
  return context.dictionary;
};
