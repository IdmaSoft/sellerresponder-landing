import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="max-w-2xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Never miss a buyer again
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Respond faster to Facebook Marketplace buyers.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              SellerResponder helps Marketplace sellers automate replies, save time and improve response speed so they can convert more buyers before they move on.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.idmasoft.robotrespondermsg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[1.5rem] bg-[#0A66C2] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#0A66C2]/20 transition duration-200 hover:bg-[#084B8A]"
              >
                <Image
                  src="/google-play-logo.svg"
                  alt="Google Play logo"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                Download on Google Play
              </a>
              <a
                href="#video"
                className="inline-flex items-center justify-center rounded-[1.5rem] border border-[#084B8A] bg-white px-6 py-3 text-sm font-semibold text-[#084B8A] transition duration-200 hover:border-[#0A66C2] hover:bg-slate-50"
              >
                Watch Demo
              </a>
            </div>
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

        <div className="rounded-[2rem] lg:flex lg:flex-col lg:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Fast response preview
          </p>
          <div className="mt-4 rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/40 lg:flex-1">
            <div className="hidden lg:block relative mx-auto w-[80%] max-w-[560px] max-h-[420px] aspect-[9/16] rounded-[1.5rem] overflow-hidden">
              <Image
                src="/sellerresponder-chat-web.png"
                alt="SellerResponder desktop response screenshot"
                fill
                className="object-contain"
              />
            </div>
            <div className="block lg:hidden relative mx-auto w-[90%] max-w-[360px] aspect-[9/16] rounded-[1.5rem] overflow-hidden">
              <Image
                src="/sellerresponder-chat.png"
                alt="SellerResponder app response screenshot"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
