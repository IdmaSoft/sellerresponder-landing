import { en } from "@/dictionaries/en";
import { es } from "@/dictionaries/es";

export type Dictionary = typeof en;

const dictionaries = {
  en,
  es,
};

export function getDictionary(locale: "en" | "es"): Dictionary {
  return dictionaries[locale];
}