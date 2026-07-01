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
    if (segments.length > 1 && LOCALES.some((o) => o.locale === (segments[1] as Locale))) {
      return `/${segments.slice(2).join("/")}`;
    }
    return pathname ?? "/";
  }, [pathname]);

  const current = LOCALES.find((o) => o.locale === locale);

  return (
    <div className="group relative">
      <button className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-950">
        {current?.label}
        <svg className="h-3.5 w-3.5" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="pointer-events-none absolute right-0 mt-2 min-w-[80px] rounded-xl border border-slate-200 bg-white py-1 shadow-lg opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 transition-opacity">
        {LOCALES.map((option) => (
          <a
            key={option.locale}
            href={`/${option.locale}${currentPath}`}
            className={`block px-4 py-2 text-sm font-medium hover:bg-slate-50 ${
              option.locale === locale ? "text-slate-950 font-semibold" : "text-slate-500"
            }`}
          >
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
}