// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const testimonials = [
//   {
//     quote: "Fluence AI has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making.",
//     name: "Sarah J.",
//     role: "Data Analyst, TechCorp",
//     avatar: "https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png",
//   },
//   {
//     quote: "The automation features in Fluence AI have made our workflows so much more efficient. We're now able to focus on high-priority tasks while the system handles the rest.",
//     name: "Mark L.",
//     role: "Operations Manager, GrowthTech",
//     avatar: "https://framerusercontent.com/images/yIREXkwAthEgTDhWj0Imj3yZ9JA.png",
//   },
//   {
//     quote: "Thanks to Fluence AI, we now make data-driven decisions in real time. The predictive analytics have helped us forecast trends and stay ahead of the competition.",
//     name: "Emily R.",
//     role: "Marketing Director, InnovateCo",
//     avatar: "https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png",
//   },
// ];

// const stats = [
//   { number: 80, suffix: "+", label: "Businesses are Happy" },
//   { number: 4980, suffix: "+", label: "Data-driven decisions" },
//   { number: 80, suffix: "%", label: "Customer Satisfied" },
// ];

// function CountUp({ target, suffix, start }) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let current = 0;
//     const steps = 60;
//     const increment = target / steps;
//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= target) { setCount(target); clearInterval(timer); }
//       else setCount(Math.floor(current));
//     }, 1500 / steps);
//     return () => clearInterval(timer);
//   }, [start, target]);
//   return (
//     <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 44, fontWeight: 800, color: "#0a0a0a", margin: 0 }}>
//       {count.toLocaleString()}{suffix}
//     </h3>
//   );
// }

// export default function Testimonial() {
//   const [index, setIndex] = useState(0);
//   const [startStats, setStartStats] = useState(false);
//   const statsRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => setIndex(p => (p + 1) % testimonials.length), 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStartStats(true); }, { threshold: 0.4 });
//     if (statsRef.current) obs.observe(statsRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section
//       id="testimonial"
//       className="relative overflow-hidden rounded-3xl mx-4 md:mx-6 my-6 py-28 text-center"
//     >
//       {/* Background */}
//       <img
//         src="https://framerusercontent.com/images/vkYLURkIQB3wgCJUD4m2MGdbKg.png"
//         className="absolute inset-0 w-full h-full object-cover"
//         alt=""
//         aria-hidden="true"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/50" />

//       <div className="relative z-10 px-6 flex flex-col items-center">
//         {/* Header */}
//         <div className="mb-10">
//           <span className="badge">Wall of Love</span>
//           <h2 style={{
//             fontFamily: "'Bricolage Grotesque', sans-serif",
//             fontSize: "clamp(28px, 3.5vw, 44px)",
//             fontWeight: 800, marginTop: 16, color: "#0a0a0a", letterSpacing: "-0.02em",
//           }}>
//             What they're saying
//           </h2>
//         </div>

//         {/* Prev / Next */}
//         {/* Background */}
//         <img
//           src="https://framerusercontent.com/images/vkYLURkIQB3wgCJUD4m2MGdbKg.png"
//           className="absolute inset-0 w-full h-full object-cover"
//           alt=""
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/50" />

//         <div className="relative z-10 px-6 flex flex-col items-center">

//           {/* Header */}
//           <div className="mb-10">
//             <span className="px-4 py-1 text-xs bg-white/60 rounded-full border">
//               Wall of Love
//             </span>

//             <h2 className="mt-4 text-3xl md:text-4xl font-bold text-black">
//               What they're saying
//             </h2>
//           </div>

//           {/* Slider */}
//           <div className="relative w-full max-w-3xl flex items-center justify-center gap-6">

//             {/* LEFT BUTTON */}
//             <button
//               onClick={prev}
//               className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white transition"
//             >
//               <img
//                 src="/icons/left.png"
//                 alt="prev"
//                 className="w-4 h-4"
//               />
//             </button>

//             {/* CARD */}
//             <div className="flex-1">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 60, scale: 0.96 }}
//                   animate={{ opacity: 1, x: 0, scale: 1 }}
//                   exit={{ opacity: 0, x: -60, scale: 0.96 }}
//                   transition={{ type: "spring", stiffness: 130, damping: 22 }}
//                   className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-10"
//                 >
//                   <p className="text-lg text-gray-800 mb-8 leading-relaxed">
//                     "{testimonials[index].quote}"
//                   </p>

//                   <div className="flex items-center justify-center gap-4">
//                     <img
//                       src={testimonials[index].avatar}
//                       className="w-12 h-12 rounded-full object-cover"
//                       alt={testimonials[index].name}
//                     />
//                     <div className="text-left">
//                       <h4 className="font-semibold text-gray-900">
//                         {testimonials[index].name}
//                       </h4>
//                       <p className="text-sm text-gray-500">
//                         {testimonials[index].role}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* RIGHT BUTTON */}
//             <button
//               onClick={next}
//               className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white transition"
//             >
//               <img
//                 src="/icons/next.png"
//                 alt="next"
//                 className="w-4 h-4"
//               />
//             </button>
//           </div>
//         </div>

//         {/* Stats */}
//         <div
//           ref={statsRef}
//           className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl w-full"
//         >
//           {stats.map((s, i) => (
//             <div key={i}>
//               <CountUp target={s.number} suffix={s.suffix} start={startStats} />
//               <p className="text-gray-600 mt-2 text-sm">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Fluence AI has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making.",
    name: "Sarah J.",
    role: "Data Analyst, TechCorp",
    avatar:
      "https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png",
  },
  {
    quote:
      "The automation features in Fluence AI have made our workflows so much more efficient. We're now able to focus on high-priority tasks while the system handles the rest.",
    name: "Mark L.",
    role: "Operations Manager, GrowthTech",
    avatar:
      "https://framerusercontent.com/images/yIREXkwAthEgTDhWj0Imj3yZ9JA.png",
  },
  {
    quote:
      "Thanks to Fluence AI, we now make data-driven decisions in real time. The predictive analytics have helped us forecast trends and stay ahead of the competition.",
    name: "Emily R.",
    role: "Marketing Director, InnovateCo",
    avatar:
      "https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png",
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
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1500 / steps);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <h3
      style={{
        fontFamily: "'Bricolage Grotesque', sans-serif",
        fontSize: 44,
        fontWeight: 800,
        color: "#0a0a0a",
        margin: 0,
      }}
    >
      {count.toLocaleString()}
      {suffix}
    </h3>
  );
}

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [startStats, setStartStats] = useState(false);
  const statsRef = useRef(null);

  // ❌ REMOVED AUTOPLAY (your request: manual only)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStartStats(true);
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  // ✅ FIXED FUNCTIONS
  const prev = () => {
    setIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const next = () => {
    setIndex((p) => (p + 1) % testimonials.length);
  };

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
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/50" />

      <div className="relative z-10 px-6 flex flex-col items-center">
        {/* Header */}
        <div className="mb-10">
          <span className="px-4 py-1 text-xs bg-white/60 rounded-full border">
            Wall of Love
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-black">
            What they're saying
          </h2>
        </div>

        {/* Slider */}
        <div className="relative w-full max-w-3xl flex items-center justify-center gap-6">

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white transition"
          >
            <img src="/icons/left.png" alt="prev" className="w-4 h-4" />
          </button>

          {/* CARD */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 130, damping: 22 }}
                className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-10"
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
                    <h4 className="font-semibold text-gray-900">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white transition"
          >
            <img src="/icons/next.png" alt="next" className="w-4 h-4" />
          </button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl w-full"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
                <CountUp target={s.number} suffix={s.suffix} start={startStats} />
              </h3>
              <p className="text-gray-600 mt-3 text-sm md:text-base">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* GAP between stats and logos */}
        <div className="h-16 md:h-20" />

        {/* Logos row after stats */}
        <div
          className="flex flex-wrap items-center justify-center w-full relative overflow-hidden"
          style={{
            gap: "80px",
            padding: "0px",
            maxWidth: "1920px",
            margin: "0 auto",
          }}
        >

          {/* Logo 1 */}
          <div className="flex items-center gap-4">
            <img
              src="/icons/handshake.png"
              alt="Handshake"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
            />
            <span className="text-sm md:text-base lg:text-lg font-semibold text-[#1b0c25]">
              Logi Ipsum
            </span>
          </div>

          {/* Logo 2 */}
          <div className="flex items-center gap-4">
            <img
              src="/icons/company.png"
              alt="Company"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
            />
            <span className="text-sm md:text-base lg:text-lg font-semibold text-[#1b0c25]">
              Logi Ipsum
            </span>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center gap-4">
            <img
              src="/icons/global.png"
              alt="Global"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
            />
            <span className="text-sm md:text-base lg:text-lg font-semibold text-[#1b0c25]">
              Logi Ipsum
            </span>
          </div>

          {/* Logo 4 */}
          <div className="flex items-center gap-4">
            <img
              src="/icons/shape.png"
              alt="Shape"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
            />
            <span className="text-sm md:text-base lg:text-lg font-semibold text-[#1b0c25]">
              Logi Ipsum
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}