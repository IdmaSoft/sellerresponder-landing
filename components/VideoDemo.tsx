export default function VideoDemo() {
  return (
    <section id="video" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
          See it in action
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Watch how SellerResponder keeps Messenger conversations moving.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          A quick demo of the Android app showing automated buyer replies, reusable templates and the best Marketplace workflow for busy sellers.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-xl shadow-slate-900/10">
        <div className="aspect-video">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/cv76Frm0itM?si=v28m54SrMN9SYP2X"
            title="SellerResponder demo video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
