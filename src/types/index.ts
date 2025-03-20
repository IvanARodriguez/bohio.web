import { Dictionary } from "./dictionary";

export type Language = "en" | "es";

export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  profilePictureUrl: string | null;
  roles: string[];
  lastLogin: string | null;
  subscriptionStatus: string | null;
  isAuthenticated: boolean;
}

export interface App {
  header: {
    nav: {
      isOpen: boolean;
      setNavOpen: (isOpen: boolean) => void;
    };
  };
}

export interface GlobalState {
  app: App;
  dictionary: Dictionary;
  user: User;
}
