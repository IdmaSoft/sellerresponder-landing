"use client";

import { useRef } from "react";
import type { Dictionary } from "@/lib/getDictionary";

type Props = {
  dictionary: Dictionary;
};

function FAQColumn({
  items,
  startIndex,
  detailsRefs,
}: {
  items: Dictionary["faqs"]["items"];
  startIndex: number;
  detailsRefs: React.MutableRefObject<(HTMLDetailsElement | null)[]>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const realIndex = startIndex + index;

        return (
          <details
            key={item.question}
            ref={(el) => {
              detailsRefs.current[realIndex] = el;
            }}
            className="rounded-3xl border border-slate-200 bg-white/30 shadow-sm transition hover:border-slate-300"
          >
            <summary
              className="flex cursor-pointer items-center justify-between gap-4 p-6 list-none"
              onClick={() => {
                detailsRefs.current.forEach((el, i) => {
                  if (i !== realIndex && el?.open) {
                    el.removeAttribute("open");
                  }
                });
              }}
            >
              <span className="font-semibold text-slate-900">
                {item.question}
              </span>

              <span className="faq-plus text-slate-500">+</span>
              <span className="faq-minus text-slate-500">−</span>
            </summary>

            <div className="px-6 pb-6 text-slate-600">
              {item.answer}
            </div>
          </details>
        );
      })}
    </div>
  );
}

export default function FAQ({ dictionary }: Props) {
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  const middle = Math.ceil(dictionary.faqs.items.length / 2);

  const leftItems = dictionary.faqs.items.slice(0, middle);
  const rightItems = dictionary.faqs.items.slice(middle);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-[26rem] font-black text-[#084B8A]/15 select-none">
          ?
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            {dictionary.faqs.title}
          </h2>

          <p className="mt-4 text-slate-600">
            {dictionary.faqs.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">

          <FAQColumn
            items={leftItems}
            startIndex={0}
            detailsRefs={detailsRefs}
          />

          <FAQColumn
            items={rightItems}
            startIndex={middle}
            detailsRefs={detailsRefs}
          />

        </div>

      </div>
    </section>
  );
}
