"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/getDictionary";

type Props = {
  locale: Locale;
};

export default function LocaleSwitcher({ locale }: Props) {
  const pathname = usePathname();

  const currentPath = useMemo(() => {
    const segments = pathname?.split("/") ?? [];
    if (segments.length > 1 && LOCALES.some((option) => option.locale === (segments[1] as Locale))) {
      return `/${segments.slice(2).join("/")}`;
    }
    return pathname ?? "/";
  }, [pathname]);

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1">
      {LOCALES.map((option) => {
        const href = `/${option.locale}${currentPath}`;
        const isActive = option.locale === locale;

        return (
          <a
            key={option.locale}
            href={href}
            className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-slate-950 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {option.label}
          </a>
        );
      })}
    </div>
  );
}
