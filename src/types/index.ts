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

export type HomespaceStatus = "Draft" | "Published" | "Archived";

export interface Homespace {
  name: string;
  description: string;
  features: string[];
  tags: string[];
  category: string;
  city: string;
  state: string;
  country: string;
  status: HomespaceStatus;
  createdAt?: string;
  updatedAt?: string;
  media?: Media[];
}

export interface Media {
  id: string;
  url: string;
  mediaType: "Image" | "Video";
}
