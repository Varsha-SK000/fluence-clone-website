import { motion } from "framer-motion";
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

export default function FluenceFooter() {
  return (
    <footer
      className="relative overflow-hidden font-inter bg-black text-white"
      style={{
        borderRadius: 10,
        margin: "0 16px 16px",
        padding: "96px 64px 40px",
      }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(120,70,255,0.14), transparent 50%), radial-gradient(circle at 10% 90%, rgba(255,0,150,0.07), transparent 55%)",
        }}
      />

      {/* Watermark */}
      <div
        className="absolute select-none pointer-events-none"
        style={{
          bottom: -100, left: 0,
          fontSize: "clamp(100px, 16vw, 220px)",
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 900, color: "rgba(255,255,255,0.04)",
          whiteSpace: "nowrap", letterSpacing: "-0.04em", lineHeight: 1,
        }}
      >
        Fluence Ai
      </div>

      {/* Rotating cube */}
      <div className="absolute top-10 right-14 z-0 pointer-events-none hidden lg:block">
        <motion.img
          src="https://framerusercontent.com/images/3D34QUQAuR6kMLNTtzm7mEgCmuE.png"
          style={{ width: 260, height: 260 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          alt=""
        />
      </div>

      {/* CTA */}
      <section className="relative z-10 flex items-start justify-between mb-24">
        <div className="max-w-2xl">
          <span className="badge">JOIN THE AI REVOLUTION</span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.03em",
              marginTop: 24, marginBottom: 36, color: "#fff",
            }}
          >
            Ready to Launch your AI<br />Agents with us?
          </h2>
          <div className="flex gap-4 flex-wrap">
            <AnimatedButton
              text="Get Started"
              href="/contact"
              className="bg-black border border-white/15 text-white hover:bg-white hover:text-black"
            />
            <AnimatedButton
              text="Book a Demo"
              href="mailto:someone@yoursite.com"
              className="bg-white text-black hover:bg-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.09)", marginBottom: 56 }} />

      {/* Footer grid */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Brand */}
        <div>
          <div className="flex items-start gap-3 mb-5">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center rounded-[10px] flex-shrink-0">
              <span className="text-white font-bold text-sm">✦</span>
            </div>
            <div>
              <p
                style={{
                  fontSize: 28, lineHeight: 1.2, fontWeight: 600,
                  fontFamily: "'Bricolage Grotesque', sans-serif", color: "#fff", margin: 0,
                }}
              >
                Fluence Ai
              </p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>
                Manage AI effortlessly
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-2.5 mt-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-[10px] transition"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                <img
                  src={`/icons/${s.name}.png`}
                  alt={s.name}
                  className="w-4 h-4 opacity-60 hover:opacity-100 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4
            style={{
              marginBottom: 20, fontSize: 11, textTransform: "uppercase",
              letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)", fontWeight: 600,
            }}
          >
            Use Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {links.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  style={{
                    fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4
            style={{
              marginBottom: 20, fontSize: 11, textTransform: "uppercase",
              letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)", fontWeight: 600,
            }}
          >
            Company
          </h4>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            105 North 1st Street, #28,<br />San Jose, CA 94748
          </p>
          <a
            href="mailto:hello@fluence.ai"
            style={{
              display: "block", marginTop: 14, fontSize: 14,
              color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
          >
            hello@fluence.ai
          </a>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.09)", margin: "48px 0 24px" }} />

      {/* Bottom bar */}
      <div className="relative z-10 flex flex-wrap justify-between items-center gap-4"
        style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
        <div>© 2025 Fluence AI. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
            Privacy Policy
          </a>
          <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
