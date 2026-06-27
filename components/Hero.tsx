import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-6 py-3 text-white sm:px-8 lg:px-12 sm:py-4 lg:py-5"
      style={{
        backgroundImage:
          'linear-gradient(135deg, #000 0%, #000 10%, #030370 70%, #0A66C2 100%)',
      }}
    >
      <div className="relative mx-auto max-w-screen-xl">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="space-y-3 lg:space-y-5 xl:pr-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300 text-center lg:text-left">
                Never miss a buyer again
              </p>
              <h1 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-left lg:text-5xl">
                Respond faster to Facebook Marketplace buyers.
              </h1>
              <p className="mx-auto max-w-xl text-center text-lg leading-8 text-slate-300 lg:mx-0 lg:text-left">
                SellerResponder helps Marketplace sellers automate replies, save time and improve response speed so they can convert more buyers before they move on.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start sm:items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.idmasoft.robotrespondermsg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-[#0A66C2]/20 transition duration-200 hover:bg-[#084B8A]"
                >
                  <Image
                    src="/images/logos/google-play-logo.svg"
                    alt="Google Play logo"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  Download on Google Play
                </a>
                <a
                  href="#video"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-white/15"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
                ✓ Automatic Replies
              </span>
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
                ✓ Custom Templates
              </span>
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
                ✓ Android App
              </span>
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-100">
                ✓ Easy Setup
              </span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative mx-auto w-[90%] max-w-[280px] aspect-[9/16] rounded-[1.5rem] top-8">
              <div className="relative z-20 h-[90%] w-[90%] mx-auto overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/screenshots/sellerresponder-chat.png"
                  alt="SellerResponder desktop response screenshot"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
