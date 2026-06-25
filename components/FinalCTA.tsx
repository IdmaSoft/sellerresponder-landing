import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2rem] bg-[#084B8A] px-8 py-16 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.35)] sm:px-12">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">
            Ready to respond faster?
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Start Responding Faster Today
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200/80">
            Download SellerResponder and avoid missing potential buyers because of slow response times.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.idmasoft.robotrespondermsg"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-[1.5rem] bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm shadow-slate-950/10 transition duration-200 hover:bg-slate-100"
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
        </div>
      </div>
    </section>
  );
}
