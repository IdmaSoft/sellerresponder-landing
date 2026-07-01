"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";

type LocaleOption = {
  label: string;
  locale: "en" | "es";
};

const LOCALES: LocaleOption[] = [
  { label: "EN", locale: "en" },
  { label: "ES", locale: "es" },
];

const LOCALE_COOKIE_NAME = "NEXT_LOCALE";
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type Props = {
  locale: "en" | "es";
};

export default function LocaleSwitcher({ locale }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const currentPath = useMemo(() => {
    const segments = pathname?.split("/") ?? [];
    if (segments.length > 1 && (segments[1] === "en" || segments[1] === "es")) {
      return `/${segments.slice(2).join("/")}`;
    }
    return pathname ?? "/";
  }, [pathname]);

  const handleLocaleChange = (selectedLocale: "en" | "es") => {
    const destination = selectedLocale === "en" ? `/en${currentPath}` : `/es${currentPath}`;
    document.cookie = `${LOCALE_COOKIE_NAME}=${selectedLocale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`;
    router.push(destination);
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1">
      {LOCALES.map((option) => (
        <button
          key={option.locale}
          type="button"
          onClick={() => handleLocaleChange(option.locale)}
          className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
            option.locale === locale
              ? "bg-slate-950 text-white"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
