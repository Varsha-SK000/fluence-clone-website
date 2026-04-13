import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Fluence AI has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making.",
    name: "Sarah J.",
    role: "Data Analyst, TechCorp",
    avatar: "https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png",
  },
  {
    quote: "The automation features in Fluence AI have made our workflows so much more efficient. We're now able to focus on high-priority tasks while the system handles the rest.",
    name: "Mark L.",
    role: "Operations Manager, GrowthTech",
    avatar: "https://framerusercontent.com/images/yIREXkwAthEgTDhWj0Imj3yZ9JA.png",
  },
  {
    quote: "Thanks to Fluence AI, we now make data-driven decisions in real time. The predictive analytics have helped us forecast trends and stay ahead of the competition.",
    name: "Emily R.",
    role: "Marketing Director, InnovateCo",
    avatar: "https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png",
  },
];

const stats = [
  { number: 80, suffix: "+", label: "Businesses are Happy" },
  { number: 4980, suffix: "+", label: "Data-driven decisions" },
  { number: 80, suffix: "%", label: "Customer Satisfied" },
];

function CountUp({ target, suffix, start }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const steps = 60;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 1500 / steps);
    return () => clearInterval(timer);
  }, [start, target]);
  return (
    <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 44, fontWeight: 800, color: "#0a0a0a", margin: 0 }}>
      {count.toLocaleString()}{suffix}
    </h3>
  );
}

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [startStats, setStartStats] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setIndex(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStartStats(true); }, { threshold: 0.4 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="testimonial"
      className="relative overflow-hidden rounded-3xl mx-4 md:mx-6 my-6 py-28 text-center"
    >
      {/* Background */}
      <img
        src="https://framerusercontent.com/images/vkYLURkIQB3wgCJUD4m2MGdbKg.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/50" />

      <div className="relative z-10 px-6 flex flex-col items-center">
        {/* Header */}
        <div className="mb-10">
          <span className="badge">Wall of Love</span>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 800, marginTop: 16, color: "#0a0a0a", letterSpacing: "-0.02em",
          }}>
            What they're saying
          </h2>
        </div>

        {/* Testimonial slider */}
        <div className="relative max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 130, damping: 22 }}
              className="bg-white/92 backdrop-blur-xl rounded-2xl shadow-xl p-10"
            >
              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                "{testimonials[index].quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[index].avatar}
                  className="w-12 h-12 rounded-full object-cover"
                  alt={testimonials[index].name}
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{testimonials[index].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next */}
          <div className="flex justify-between mt-5">
            {[["Prev", (p) => p === 0 ? testimonials.length - 1 : p - 1], ["Next", (p) => (p + 1) % testimonials.length]].map(([label, fn]) => (
              <button
                key={label}
                onClick={() => setIndex(fn)}
                className="px-5 py-2 bg-white/80 rounded-full shadow text-sm font-medium hover:bg-white transition"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-gray-800" : "w-2 bg-gray-400/60"}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl w-full"
        >
          {stats.map((s, i) => (
            <div key={i}>
              <CountUp target={s.number} suffix={s.suffix} start={startStats} />
              <p className="text-gray-600 mt-2 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
