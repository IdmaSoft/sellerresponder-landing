import Image from "next/image";

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
];

export default function Screenshots() {
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

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {screenshots.map((screenshot) => (
          <figure key={screenshot.src} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/40">
            <div className="relative aspect-[4/6] bg-slate-100">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
              {screenshot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
