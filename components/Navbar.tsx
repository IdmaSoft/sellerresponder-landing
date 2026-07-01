import Image from "next/image";
import type { Dictionary } from "@/lib/getDictionary";
import LocaleSwitcher from "./LocaleSwitcher";

type Props = {
  dictionary: Dictionary;
  locale: "en" | "es";
};

export default function Navbar({ dictionary, locale }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex items-center justify-between gap-2 px-4 py-3 sm:px-8 sm:gap-3 lg:px-12">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <Image src="/images/logos/sellerresponder-logo.svg" alt="SellerResponder" width={32} height={32} />
          <span className="text-base font-semibold tracking-tight text-slate-950 sm:text-lg whitespace-nowrap">
            SellerResponder
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <LocaleSwitcher locale={locale} />

          <a
            href="#video"
            className="hidden shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 sm:inline-flex"
          >
            {dictionary.navbar.watchDemoButton}
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.idmasoft.robotrespondermsg"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#084B8A]"
          >
            {dictionary.navbar.downloadButton}
          </a>
        </div>
      </div>
    </header>
  );
}
