import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Screenshots from "@/components/Screenshots";
import VideoDemo from "@/components/VideoDemo";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <VideoDemo />
        <Benefits />
        <Screenshots />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
