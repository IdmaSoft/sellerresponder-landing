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

export default function FAQ() {
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
          Frequently asked questions
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Everything Marketplace sellers need to know.
        </h2>
      </div>

      <div className="mt-12 space-y-4">
        {faqItems.map((item, index) => (
          <details
            key={item.question}
            ref={(el) => { detailsRefs.current[index] = el; }}
            className="w-full rounded-[1.5rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/40 transition hover:border-slate-300"
          >
            <summary
              className="flex cursor-pointer items-center justify-between gap-4 rounded-[1.5rem] p-6 text-left outline-none list-none marker:hidden"
              onClick={() => {
                detailsRefs.current.forEach((el, i) => {
                  if (i !== index && el && el.open) {
                    el.removeAttribute("open");
                  }
                });
              }}
            >
              <span className="text-base font-semibold text-slate-950">{item.question}</span>
              <span className="faq-plus text-slate-500">+</span>
              <span className="faq-minus text-slate-500">−</span>
            </summary>
            <div className="px-6 pb-6 pt-0 text-slate-600">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
