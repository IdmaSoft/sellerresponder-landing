export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm font-semibold text-slate-950">SellerResponder</p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <a href="#" className="transition hover:text-slate-950">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:text-slate-950">
            Terms
          </a>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} SellerResponder. All rights reserved.</p>
      </div>
    </footer>
  );
}
