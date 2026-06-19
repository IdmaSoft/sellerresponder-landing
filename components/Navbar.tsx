import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3">
        <Image src="/logo.svg" alt="SellerResponder" width={32} height={32} />
        <span className="text-lg font-semibold tracking-tight text-slate-950">
            SellerResponder
        </span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#video"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Watch Demo
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.idmasoft.robotrespondermsg"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
