import { SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-lg text-center">
        <SearchX className="mx-auto h-24 w-24 text-[#084B8A]" />

        <h1 className="mt-8 text-5xl font-bold text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-800">
          Page not found
        </h2>

        <p className="mt-4 text-slate-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/en"
          className="mt-8 inline-flex rounded-xl bg-[#084B8A] px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}