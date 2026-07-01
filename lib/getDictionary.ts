import { en } from "@/dictionaries/en";
import { es } from "@/dictionaries/es";

export const dictionaries = {
  en,
  es,
} as const;

export type Dictionary = typeof en;
export type Locale = keyof typeof dictionaries;

export const LOCALES = [
  { label: "EN", locale: "en" },
  { label: "ES", locale: "es" },
] as const;

export type LocaleOption = (typeof LOCALES)[number];

export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE_NAME = "NEXT_LOCALE";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isValidLocale(locale: string | null | undefined): locale is Locale {
  return typeof locale === "string" && locale in dictionaries;
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export async function getLocaleFromCookie(): Promise<Locale | undefined> {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  const locale = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  if (isValidLocale(locale)) {
    return locale;
  }
  return undefined;
}
