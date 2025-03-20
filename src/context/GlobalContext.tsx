"use client";
import { GlobalState, User } from "@/types";
import { Dictionary } from "@/types/dictionary";
import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

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
      user: {
        id: "",
        username: "",
        email: "",
        fullName: "",
        isAuthenticated: false,
        profilePictureUrl: null,
        roles: [],
        lastLogin: null,
        subscriptionStatus: null,
      },
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

export const useDictionary: () => Dictionary = () => {
  const context = useGlobalContext();
  return context.dictionary;
};
