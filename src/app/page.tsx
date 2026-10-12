import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import About from "@/src/components/About";
import Portfolio from "@/src/components/Portfolio";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import ScrollTop from "@/src/components/ScrollTop";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-bg-primary text-foreground overflow-x-hidden selection:bg-cyan-500 selection:text-white dark:selection:bg-cyan-400 dark:selection:text-slate-950">
      <main className="flex flex-col w-full relative z-10 space-y-4 sm:space-y-8">
        <section id="hero" className="relative w-full">
          <Hero />
        </section>

        <section id="services" className="relative w-full py-4 sm:py-8">
          <Services />
        </section>

        <section id="about" className="relative w-full py-4 sm:py-8">
          <About />
        </section>

        <section id="portfolio" className="relative w-full py-4 sm:py-8">
          <Portfolio />
        </section>

        <section id="contact" className="relative w-full pt-4 sm:pt-8 pb-8 sm:pb-12">
          <Contact />
        </section>
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
}