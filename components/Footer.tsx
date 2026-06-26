export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 text-center text-sm text-slate-500 sm:px-8 lg:px-12">
        <p className="font-semibold text-slate-950">© {new Date().getFullYear()} SellerResponder</p>
        <p>Developed by IdmaSoft</p>
      </div>
    </footer>
  );
}
