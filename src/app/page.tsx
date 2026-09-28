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
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-bg-primary pointer-events-none z-10" />
        </section>

        <section id="services" className="relative w-full py-4 sm:py-8">
          <Services />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-glass-border to-transparent pointer-events-none" />
        </section>

        <section id="about" className="relative w-full py-4 sm:py-8">
          <About />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-glass-border to-transparent pointer-events-none" />
        </section>

        <section id="portfolio" className="relative w-full py-4 sm:py-8">
          <Portfolio />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-glass-border to-transparent pointer-events-none" />
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