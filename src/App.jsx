import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BuildSection from "./components/BuildSection";
import Features from "./components/Features";
import AutomationTicker from "./components/AutomationTicker";
import About from "./components/About";
import Keybenefits from "./components/Keybenefits";
import Testimonial from "./components/Testimonial";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import RequestDemoTicker from "./components/RequestDemoTicker";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import NotFound from "./components/Notfound";
import Contact from "./components/Contact";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <BuildSection />
      <Features />
      <AutomationTicker />
      <About />
      <Keybenefits />
      <Testimonial />
      <Process />
      <Pricing />
      <RequestDemoTicker />
      <FAQ />
      <Blog />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
