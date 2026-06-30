"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const screenshots = [
  {
    src: "/images/screenshots/screenshot1.png",
    alt: "SellerResponder dashboard screenshot",
    caption: "Everything you need, all in one place.",
  },
  {
    src: "/images/screenshots/screenshot2.png",
    alt: "SellerResponder add title screenshot",
    caption: "Add or edit the exact title of your Marketplace listing.",
  },
  {
    src: "/images/screenshots/screenshot3.png",
    alt: "SellerResponder view, copy, edit screenshot",
    caption: "View, copy, edit, or delete your saved post titles.",
  },
  {
    src: "/images/screenshots/screenshot4.png",
    alt: "SellerResponder questions and responses screenshot",
    caption: "Turn common questions into automatic responses.",
  },
  {
    src: "/images/screenshots/screenshot5.png",
    alt: "SellerResponder view, copy, edit replies screenshot",
    caption: "View, copy, edit, or delete your automatic replies.",
  },
    {
    src: "/images/screenshots/screenshot6.png",
    alt: "SellerResponder test screenshot",
    caption: "Test your automatic replies before going live.",
  },
  {
    src: "/images/screenshots/screenshot7.png",
    alt: "SellerResponder setup screenshot",
    caption: "Customize how automatic replies work.",
  },
];

export default function Screenshots() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    const item = carousel?.children[index] as HTMLElement | undefined;
    if (!carousel || !item) return;
    carousel.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(screenshots.length - 1, activeIndex + 1));
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateIndex = () => {
      const scrollLeft = carousel.scrollLeft;
      const children = Array.from(carousel.children) as HTMLElement[];
      const nearest = children.reduce(
        (closest, child, index) => {
          const diff = Math.abs(child.offsetLeft - scrollLeft);
          return diff < closest.diff ? { index, diff } : closest;
        },
        { index: 0, diff: Infinity }
      );
      setActiveIndex(nearest.index);
    };

    updateIndex();
    carousel.addEventListener("scroll", updateIndex, { passive: true });
    return () => carousel.removeEventListener("scroll", updateIndex);
  }, []);

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
          Screenshots
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          See how SellerResponder looks on Android.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Real app screens for Marketplace sellers, focused on fast replies and easy access to the templates you use every day.
        </p>
      </div>

      <div className="mt-12">
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scroll-smooth scrollbar-none"
          >
            {screenshots.map((screenshot) => (
              <figure
                key={screenshot.src}
                className="relative snap-start flex-shrink-0 w-[220px] overflow-hidden rounded-[1.75rem] border border-white/10 backdrop-blur-xl shadow-[0_10px_15px_rgba(15,23,42,0.12)] md:w-[240px]"
                style={{
                  backgroundColor:
                    'color-mix(in oklab, lab(37 38.27 -107.24) 20%, #084b8a)',
                }}
              >
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-[#0A66C2]/20 blur-2xl" />
                <div className="relative aspect-[4/6] bg-slate-900/10">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 220px, 240px"
                  />
                </div>
                <figcaption className="relative px-5 py-4 text-sm leading-6 text-slate-100 bg-gradient-to-b from-white/10 via-[#0A66C2]/15 to-black/60 backdrop-blur-md border-t border-white/10">
                  {screenshot.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#0A66C2] p-3 text-lg text-white shadow-xl shadow-slate-200/40 transition hover:bg-[#084B8A]"
            aria-label="Previous screenshot"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#0A66C2] p-3 text-lg text-white shadow-xl shadow-slate-200/40 transition hover:bg-[#084B8A]"
            aria-label="Next screenshot"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
