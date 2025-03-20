"use client";

import axiosPrivate from "@/services/axiosInstance";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (creds: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axiosPrivate.get("/api/auth/me");
        if (response && response.data) {
          setUser({ ...response.data, isAuthenticated: true });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("not authenticated", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  const login = async (creds: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      const response = await axiosPrivate.post("/api/auth/login", creds);
      if (response && response.status == 204) {
        try {
          const response = await axiosPrivate.get("/api/auth/me");
          if (response && response.data) {
            setUser({ ...response.data, isAuthenticated: true });
            router.push("/");
          } else {
            setUser(null);
          }
        } catch (error) {
          console.warn("error getting user after authentication");
        }
      }
    } catch (error) {
      console.warn("error login in: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axiosPrivate.get("/api/auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth is being used outside a AuthProvider context");
  }
  return context;
};
