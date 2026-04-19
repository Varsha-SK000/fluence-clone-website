import { useEffect, useRef, useState } from "react";

const lines = [
  { text: "Fluence AI", highlight: true },
  { text: "is crafted to" },
  { text: "elevate how businesses" },
  { text: "showcase their AI solutions." },
  { text: "With a focus on" },
  { text: "clean design, it helps brands" },
  { text: "engage and convert." },
];

export default function About() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const height = sectionRef.current.offsetHeight;

      const raw =
        (-rect.top + window.innerHeight * 0.5) / (height * 0.7);

      setProgress(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 overflow-hidden rounded-2xl mx-4 md:mx-6 my-6"
      style={{ background: "#0a0a0a" }}
    >
      {/* Glow background (softer like Framer) */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute w-[520px] h-[520px] top-[25%] left-[10%] bg-purple-500/6 blur-3xl rounded-full" />
        <div className="absolute w-[420px] h-[420px] top-[15%] right-[10%] bg-pink-500/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Badge (Framer-style pill) */}
        <div className="mb-10">
          <span className="badge">ABOUT</span>
        </div>

        {/* Animated text */}
        <h2
          className="flex flex-wrap"
          style={{
            fontWeight: 600,
            fontSize: "clamp(24px, 3.2vw, 48px)",
            lineHeight: 1.35,
            letterSpacing: "-0.02em",
          }}
        >
          {lines.map((line, i) => {
            const threshold = i / (lines.length + 1);
            const active = progress > threshold;

            return (
              <span
                key={i}
                style={{
                  marginRight: "0.35em",
                  display: "inline-block",
                  opacity: active ? 1 : 0.08,
                  filter: active ? "blur(0px)" : "blur(4px)",
                  transform: active ? "translateY(0)" : "translateY(6px)",
                  transition:
                    "opacity 0.8s ease, filter 0.8s ease, transform 0.8s ease",
                  color: active
                    ? line.highlight
                      ? "#ffffff"
                      : "#cfcfcf"
                    : "#2a2a2a",
                }}
              >
                {line.text}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}