"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Does SellerResponder work with Facebook Marketplace?",
    answer:
      "Yes. SellerResponder is designed for Marketplace sellers and helps you reply faster to buyer messages from Facebook Marketplace.",
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
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
          Frequently asked questions
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Everything Marketplace sellers need to know.
        </h2>
      </div>

      <div className="mt-12 space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              key={item.question}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full rounded-[1.5rem] border border-slate-200 bg-white p-6 text-left shadow-sm shadow-slate-200/40 transition hover:border-slate-300"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-semibold text-slate-950">{item.question}</span>
                <span className="text-slate-500">{isOpen ? "−" : "+"}</span>
              </div>
              {isOpen && <p className="mt-4 text-slate-600">{item.answer}</p>}
            </button>
          );
        })}
      </div>
    </section>
  );
}
