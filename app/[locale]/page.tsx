import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Screenshots from "@/components/Screenshots";
import VideoDemo from "@/components/VideoDemo";
import { getDictionary } from "@/lib/getDictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "es" }>;
}) {
  const { locale } = await params;

  const dictionary = await getDictionary(locale);

  return (
    <div className="bg-slate-50 text-slate-950">
      <Navbar dictionary={dictionary} />
      <main>
        <Hero dictionary={dictionary} />
        <VideoDemo dictionary={dictionary} />
        <Benefits dictionary={dictionary} />
        <Screenshots dictionary={dictionary} />
        <FAQ dictionary={dictionary} />
        <FinalCTA dictionary={dictionary} />
      </main>
      <Footer dictionary={dictionary} />
    </div>
  );
}
