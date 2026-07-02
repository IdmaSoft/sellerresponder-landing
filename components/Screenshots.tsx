"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/getDictionary";

type Props = {
  dictionary: Dictionary;
};

export default function Screenshots({ dictionary }: Props) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = dictionary.screenshots.items.length;

  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    const item = carousel?.children[index] as HTMLElement | undefined;
    if (!carousel || !item) return;
    carousel.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
  };

  const handlePrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const handleNext = () => scrollToIndex(Math.min(total - 1, activeIndex + 1));

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
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-white pointer-events-none" />
      
      <div className="relative mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            {dictionary.screenshots.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {dictionary.screenshots.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500">
            {dictionary.screenshots.description}
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-14 relative">

          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-100/80 to-transparent sm:w-24" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-100/80 to-transparent sm:w-24" />

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8 scroll-smooth scrollbar-none px-4"
          >
            {dictionary.screenshots.items.map((screenshot, i) => (
              <figure
                key={screenshot.src}
                className={`
                  group relative snap-center flex flex-col flex-shrink-0
                  w-[200px] md:w-[224px] xl:w-[248px]
                  overflow-hidden rounded-[2.5rem]
                  border border-slate-200/60
                  bg-white
                  shadow-[0_2px_8px_rgba(15,23,42,0.08)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_4px_16px_rgba(15,23,42,0.12)]
                `}
              >
                {/* Top glow accent */}
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#0A66C2]/8 blur-3xl" />

                {/* Image area */}
                <div className="relative overflow-hidden rounded-t-[2.5rem]">
                  <div className="aspect-[4/6]">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 200px, 248px"
                    />
                  </div>
                </div>

                {/* Caption */}
                <figcaption className="relative px-5 py-4 bg-white border-t border-slate-100">
                  <p className="text-sm leading-6 text-slate-600 font-medium line-clamp-3">
                    {screenshot.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Desktop nav buttons */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="hidden sm:flex absolute left-2 top-[45%] z-20 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-md transition hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous screenshot"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === total - 1}
            className="hidden sm:flex absolute right-2 top-[45%] z-20 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-md transition hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next screenshot"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
