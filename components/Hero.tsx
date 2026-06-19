export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Never miss a buyer again
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Respond faster to Facebook Marketplace buyers.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            SellerResponder helps Marketplace sellers automate replies, save time and improve response speed so they can convert more buyers before they move on.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.idmasoft.robotrespondermsg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Download on Google Play
            </a>
            <a
              href="#video"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Watch Demo
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              ✓ Automatic Replies
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              ✓ Custom Templates
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              ✓ Android App
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              ✓ Easy Setup
            </span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_40px_80px_-35px_rgba(15,23,42,0.2)] sm:p-8">
          <div className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Fast response preview
            </p>
            <div className="mt-8 space-y-6">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200/70">
                <p className="text-sm font-semibold text-slate-950">New message from buyer</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A buyer asks about availability on Marketplace, and SellerResponder sends an instant first reply so the conversation keeps moving.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-100 p-6">
                <p className="text-sm font-semibold text-slate-950">Automated follow-up</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Messages stay timely even when you are away, so you do not lose the sale because of a late response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
