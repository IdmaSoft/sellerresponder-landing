"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const screenshots = [
  {
    src: "/images/screenshots/screenshot1.png",
    alt: "SellerResponder dashboard screenshot",
    caption: "SellerResponder dashboard.",
  },
  {
    src: "/images/screenshots/screenshot2.png",
    alt: "SellerResponder templates screenshot",
    caption: "Custom message templates for faster answers.",
  },
  {
    src: "/images/screenshots/screenshot3.png",
    alt: "SellerResponder automation screenshot",
    caption: "Automatic greeting and response flow.",
  },
  {
    src: "/images/screenshots/screenshot4.png",
    alt: "SellerResponder setup screenshot",
    caption: "Easy Android setup and app controls.",
  },
  {
    src: "/images/screenshots/screenshot5.png",
    alt: "SellerResponder sales screenshot",
    caption: "Performance and chat tools in one view.",
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
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
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
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scroll-smooth"
        >
          {screenshots.map((screenshot) => (
            <figure
              key={screenshot.src}
              className="snap-start flex-shrink-0 w-[220px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/40 md:w-[240px]"
            >
              <div className="relative aspect-[4/6] bg-slate-100">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 220px, 240px"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
                {screenshot.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? "bg-slate-950" : "bg-slate-300"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
