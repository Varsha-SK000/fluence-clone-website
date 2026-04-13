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
      const raw = (-rect.top + window.innerHeight * 0.45) / (height * 0.65);
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
      className="relative py-32 overflow-hidden rounded-3xl mx-4 md:mx-6 my-6"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] top-[30%] left-[10%] bg-purple-500/8 blur-3xl rounded-full" />
        <div className="absolute w-[400px] h-[400px] top-[20%] right-[10%] bg-pink-500/6 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-start mb-12">
          <span className="badge">About</span>
        </div>

        {/* Animated text */}
        <h2
          className="flex flex-wrap"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 5.5vw, 72px)",
            lineHeight: 1.18,
            letterSpacing: "-0.03em",
          }}
        >
          {lines.map((line, i) => {
            const threshold = i / (lines.length + 1);
            const active = progress > threshold;
            return (
              <span
                key={i}
                style={{
                  marginRight: "0.32em",
                  display: "inline-block",
                  opacity: active ? 1 : 0.07,
                  filter: active ? "blur(0px)" : "blur(6px)",
                  transform: active ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.65s ease, filter 0.65s ease, transform 0.65s ease",
                  color: active
                    ? line.highlight ? "#ffffff" : "#d1d1d1"
                    : "#1a1a1a",
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
