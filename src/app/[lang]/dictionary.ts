// lib/dictionary.ts
import "server-only";
import { Dictionary } from "./dictionaries/dictionary";
import { Language } from "@/types";

// Dynamically import the JSON files for each locale
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
} as Record<Language, () => Promise<Dictionary>>; // Updated type

export const getDictionary = async (locale: Language): Promise<Dictionary> => {
  return dictionaries[locale]();
};
