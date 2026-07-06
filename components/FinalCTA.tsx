import Image from "next/image";
import type { Dictionary } from "@/lib/getDictionary";
import { images } from "@/assets/images"

type Props = {
  dictionary: Dictionary;
};

export default function FinalCTA({ dictionary }: Props) {
  return (
    <section className="mx-auto max-w-screen-xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#084B8A] px-8 py-16 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.35)] sm:px-12">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
          <Image
            src={images.appLogo}
            alt="SellerResponder logo background"
            style={{ width: '220px', height: 'auto' }}
            className="object-contain"
          />
        </div>
        <div className="relative mx-auto max-w-3xl text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">
            {dictionary.finalCta.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {dictionary.finalCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200/80">
            {dictionary.finalCta.description}
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.idmasoft.robotrespondermsg"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-[1.5rem] bg-white px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition duration-200 hover:bg-slate-100 sm:w-auto"
          >
            <Image
              src={images.playLogo}
              alt="Google Play logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            {dictionary.finalCta.downloadButton}
          </a>
        </div>
      </div>
    </section>
  );
}
