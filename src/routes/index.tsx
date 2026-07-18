import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#0f0b07] text-[#f5efe8] antialiased">
      <Navbar />
      <Hero />
      <About />
      <RecentWorks />
      <Services />
      <Footer />
    </main>
  );
}
