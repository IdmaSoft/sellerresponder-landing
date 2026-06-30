"use client";

import { useRef } from "react";

const faqItems = [
  {
    question: "Does SellerResponder work with Facebook Marketplace?",
    answer:
      "Yes. SellerResponder is designed for Marketplace sellers and helps you reply faster to buyer messages from Facebook Marketplace.",
  },
  {
    question: "Is SellerResponder affiliated with Facebook or Meta?",
    answer:
      "No. SellerResponder is an independent app for Marketplace sellers and is not affiliated with, sponsored by, or endorsed by Facebook or Meta.",
  },
  {
    question: "Can I customize automatic replies?",
    answer:
      "Absolutely. Create and edit your own reply templates so every buyer gets the right message in the right tone.",
  },
  {
    question: "Is SellerResponder easy to set up?",
    answer:
      "Yes. The Android app guides you through a quick installation and setup so you can start responding faster in minutes.",
  },
  {
    question: "Does it work on Android?",
    answer:
      "SellerResponder is available for Android and built to run on devices used by Marketplace sellers.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No technical skills are required. The app is made for sellers, not developers.",
  },
  {
    question: "How can SellerResponder help me respond faster?",
    answer:
      "It sends instant replies, uses templates for common questions, and keeps your buyer conversations active so you don’t miss sales.",
  },
{
    question: "Can I send images in automatic replies?",
    answer:
      "No. SellerResponder sends replies through Messenger notifications, which do not support sending images directly.As an alternative, you can upload your photos to services like Google Drive, OneDrive, Dropbox, or any public image hosting service, then include the shareable link in your automatic reply. This lets customers easily view your product photos with a single tap.",
  },
];

const middle = Math.ceil(faqItems.length / 2);

const leftItems = faqItems.slice(0, middle);
const rightItems = faqItems.slice(middle);

function FAQColumn({
  items,
  startIndex,
  detailsRefs,
}: {
  items: typeof faqItems;
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

export default function FAQ() {
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

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
            Frequently asked questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything Marketplace sellers need to know.
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
