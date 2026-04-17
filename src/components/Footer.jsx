import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedButton from "./AnimatedButton";

const links = [
  { name: "Feature", href: "#feature" },
  { name: "About", href: "#about" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "facebook", href: "https://facebook.com" },
  { name: "twitter", href: "https://x.com" },
  { name: "instagram", href: "https://instagram.com" },
  { name: "linkedin", href: "https://linkedin.com" },
];

// Add this above your component
const ctaContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const ctaItem = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FluenceFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="relative font-inter bg-black text-white rounded-xl mx-4 mb-4 px-5 md:px-45 py-14 md:py-16">
      {/* Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_10%,rgba(120,70,255,0.14),transparent_50%),radial-gradient(circle_at_10%_90%,rgba(255,0,150,0.07),transparent_55%)]" />

      {/* Watermark FIX (no cutting) */}
      <div className="absolute left-4px-6 md:px-10 py-14 md:py-16 bottom-[-10px] text-[14vw] font-black opacity-[0.03] whitespace-nowrap pointer-events-none">
        Fluence Ai
      </div>

      {/* Cube (FIXED for mobile) */}
      <div className="absolute top-15 right-30 sm:right-30 md:right-30">
        <motion.img
          src="https://framerusercontent.com/images/3D34QUQAuR6kMLNTtzm7mEgCmuE.png"
          className="w-60 h-60 sm:w-60 sm:h-60 md:w-60 md:h-60"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        />
      </div>

      {/* CTA FIX */}
      <section
        ref={ref}
        className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 text-left"
      >
        <motion.div
          className="max-w-xl"
          variants={ctaContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Badge */}
          <motion.span className="badge inline-block" variants={ctaItem}>
            JOIN THE AI REVOLUTION
          </motion.span>

          {/* Heading */}
          <h2 className="mt-6 mb-8 text-3xl md:text-5xl font-bold leading-tight text-white flex flex-wrap gap-x-2">
            {["Ready", "to", "Launch", "your", "AI", "Agents", "with", "us?"].map(
              (word, i) => (
                <motion.span key={i} variants={ctaItem} className="inline-block">
                  {word}
                </motion.span>
              )
            )}
          </h2>

          {/* Buttons */}
          <motion.div className="flex gap-4 flex-wrap" variants={ctaItem}>
            <AnimatedButton
              text="Get Started"
              href="/contact"
              className="bg-black border border-white/20 text-white hover:bg-white hover:text-black"
            />
            <AnimatedButton
              text="Book a Demo"
              href="mailto:someone@yoursite.com"
              className="bg-white text-black hover:bg-gray-200"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-white/10 mb-10" />

      {/* Grid FIX */}
      <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 md:gap-x-4 text-left">
        {/* Brand */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              ✦
            </div>
            <div>
              <p className="text-xl font-semibold">Fluence Ai</p>
              <p className="text-sm text-white/60">Manage AI effortlessly</p>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 hover:border-white/40 transition"
              >
                <img
                  src={`/icons/${s.name}.png`}
                  alt={s.name}
                  className="w-4 h-4 opacity-60 hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mb-8 md:mb-0">
          <h4 className="mb-4 text-xs uppercase tracking-widest text-white md:text-white">
            Use Links
          </h4>

          <ul className="flex flex-col gap-3">
            {links.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-sm text-white/60 hover:text-white transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-widest text-white md:text-white">
            Company
          </h4>

          <p className="text-sm text-white md:text-white/60 leading-relaxed">
            105 North 1st Street, #28,<br />San Jose, CA 94748
          </p>

          <a
            href="mailto:hello@fluence.ai"
            className="block mt-4 text-sm text-white/60 hover:text-white transition"
          >
            hello@fluence.ai
          </a>
        </div>
      </section>

      {/* Bottom */}
      <div className="h-px bg-white/10 my-10" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40 text-center md:text-left">
        <div>© 2025 Fluence AI. All rights reserved.</div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}