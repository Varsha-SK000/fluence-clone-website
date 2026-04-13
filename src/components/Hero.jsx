// import { motion } from "framer-motion";
// import AnimatedButton from "./AnimatedButton";

// function FloatingShape({ src, className, delay = 0 }) {
//   return (
//     <motion.img
//       src={src}
//       alt=""
//       className={`absolute ${className} pointer-events-none select-none`}
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: [1, 1.04, 1], y: [0, -18, 0] }}
//       transition={{ duration: 7, delay, repeat: Infinity, ease: "easeInOut" }}
//     />
//   );
// }

// function SparkleIcon({ className = "w-4 h-4 text-pink-400" }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
//       <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
//     </svg>
//   );
// }

// /* ✅ NEW: Parent stagger animation */
// const containerVariant = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 1, // ⏱️ delay between messages
//     },
//   },
// };

// const text = "The AI Agent Platform for Modern Teams";
// const description = "Fluence AI helps you connect, manage, and optimize your AI tools effortlessly. Unlock powerful insights and automate complex processes with ease.";

// function CheckIcon() {
//   return (
//     <div
//       style={{
//         background: "#4f46e5",
//         width: 28,
//         height: 28,
//         borderRadius: "50%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexShrink: 0,
//       }}
//     >
//       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
//         <path d="M20 6L9 17l-5-5" />
//       </svg>
//     </div>
//   );
// }

// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const word = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.3 },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 16 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };
// /* ✅ UPDATED: cleaner message animation */
// const messageVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// export default function Hero() {
//   return (
//     <section className="px-4 py-4 bg-white">
//       <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-[10px] border border-gray-200/40">

//         {/* Video background */}
//         <div className="absolute inset-0 z-0 rounded-[10px] overflow-hidden">
//           <video
//             src="https://framerusercontent.com/assets/kn7cGos906MVn9KuVEyKH6r8Ris.mp4"
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Glow */}
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-300/10 to-yellow-200/10 pointer-events-none" />

//         {/* HERO TEXT */}
//         <div className="relative z-10 pt-28 pb-4 max-w-3xl w-full px-4 sm:px-6 text-center">

//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs rounded-full bg-white/20 backdrop-blur border border-white/30 text-black uppercase tracking-wide font-medium"
//           >
//             <SparkleIcon />
//             BUSINESS &amp; SOLUTION
//           </motion.div>

//           {/* TITLE */}
//           <motion.h1
//             variants={container}
//             initial="hidden"
//             animate="visible"
//             className="font-bold text-black mb-5 leading-[1.05] tracking-tight"
//             style={{
//               fontFamily: "'Bricolage Grotesque', sans-serif",
//               fontSize: "clamp(32px, 7vw, 72px)",
//             }}
//           >
//             {text.split(" ").map((wordText, i) => (
//               <motion.span
//                 key={i}
//                 variants={word}
//                 style={{ display: "inline-block", marginRight: 8 }}
//               >
//                 {wordText}
//               </motion.span>
//             ))}
//           </motion.h1>

//           {/* DESCRIPTION */}
//           <motion.p
//             variants={container}
//             initial="hidden"
//             animate="visible"
//             className="text-black/90 mb-6 max-w-xl mx-auto leading-relaxed px-2 sm:px-0"
//             style={{ fontSize: "clamp(14px, 3.5vw, 18px)" }}
//           >
//             {description.split(" ").map((desc, i) => (
//               <motion.span
//                 key={i}
//                 variants={word}
//                 style={{ display: "inline-block", marginRight: 6 }}
//               >
//                 {desc}
//               </motion.span>
//             ))}
//           </motion.p>

//           {/* BUTTONS */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="visible"
//             className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
//           >
//             <AnimatedButton
//               text="Get Started"
//               href="/contact"
//               className="bg-black border border-white/15 text-white w-full sm:w-auto"
//             />
//             <AnimatedButton
//               text="Book a Demo"
//               href="mailto:someone@yoursite.com"
//               className="bg-white text-black w-full sm:w-auto"
//             />
//           </motion.div>
//         </div>

//         {/* CHAT CARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.4 }}
//           className="relative z-10 w-full max-w-5xl px-4 pb-10"
//         >
//           <div className="relative backdrop-blur-xl bg-white/35 border border-white/40 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden">

//             {/* Floating shapes hidden on mobile */}
//             <div className="hidden sm:block">
//               <FloatingShape src="https://framerusercontent.com/images/mNO89ys2gWfzwt1uvhnoJyIgupY.png" className="-left-8 bottom-4 w-20 md:w-28" />
//               <FloatingShape src="https://framerusercontent.com/images/B0V3gNPI0mHpDUqWHR41pDhDfMs.png" className="-right-8 top-2 w-24 md:w-32" delay={1.2} />
//             </div>

//             {/* CHAT */}
//             <div className="relative z-10 w-full max-w-xl mx-auto mb-5">
//               <div className="bg-white/45 backdrop-blur-xl border border-white/40 rounded-3xl p-4 sm:p-5 shadow-xl">

//                 <motion.div
//                   variants={containerVariant}
//                   initial="hidden"
//                   animate="visible"
//                   className="flex flex-col gap-4"
//                 >

//                   {/* USER */}
//                   <motion.div variants={messageVariant} className="flex justify-end">
//                     <div className="flex items-end gap-2 max-w-[85%] sm:max-w-xs">
//                       <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-2xl rounded-br-sm text-sm shadow-sm">
//                         Hey, I need help sending out a campaign to all new subscribers.
//                       </div>
//                       <img
//                         src="https://framerusercontent.com/images/8xPKr1A96oFIM4WCr0MnFTRZZdg.png"
//                         className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg"
//                       />
//                     </div>
//                   </motion.div>

//                   {/* AI */}
//                   <motion.div variants={messageVariant} className="flex justify-start">
//                     <div className="flex items-start gap-2 max-w-[85%] sm:max-w-xs">
//                       <div className="w-7 sm:w-8 h-7 sm:h-8 bg-black text-white flex items-center justify-center rounded-lg text-xs">
//                         ✦
//                       </div>
//                       <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-sm shadow-sm">
//                         Of course! I'll prepare a personalized campaign...
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* USER */}
//                   <motion.div variants={messageVariant} className="flex justify-end">
//                     <div className="flex items-end gap-2 max-w-[85%] sm:max-w-xs">
//                       <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-sm shadow-sm">
//                         Yes, you can schedule it.
//                       </div>
//                       <img
//                         src="https://framerusercontent.com/images/8xPKr1A96oFIM4WCr0MnFTRZZdg.png"
//                         className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg"
//                       />
//                     </div>
//                   </motion.div>

//                 </motion.div>
//               </div>
//             </div>

//             {/* INPUT CARD */}
//             <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-3 sm:p-4 max-w-xl mx-auto">

//               <div className="flex flex-wrap gap-2 mb-3 justify-center sm:justify-start">
//                 {["GPT 4.5", "Search"].map((item, i) => (
//                   <span
//                     key={i}
//                     className="text-xs bg-gray-100 px-3 py-1 rounded-full border border-gray-200 font-medium"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>

//               <input
//                 type="text"
//                 placeholder="Ask anything ..."
//                 className="w-full outline-none bg-transparent mb-3 text-sm text-gray-700 placeholder:text-gray-400"
//               />

//               <div className="flex flex-wrap gap-2 mb-3 justify-center sm:justify-start">
//                 {["Create Workflow", "Setup Bot", "Schedule Message"].map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 transition"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>

//               <div className="flex justify-center sm:justify-end">
//                 <button className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 rotate-90">
//                     <path d="M2 12L22 2 14 22 10 14z" />
//                   </svg>
//                 </button>
//               </div>

//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

function FloatingShape({ src, className, delay = 0 }) {
  return (
    <motion.img
      src={src}
      alt=""
      className={`absolute ${className} pointer-events-none select-none`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: [1, 1.04, 1], y: [0, -18, 0] }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function SparkleIcon({ className = "w-4 h-4 text-pink-400" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const messageVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const text = "The AI Agent Platform for Modern Teams";

const description =
  "Fluence AI helps you connect, manage, and optimize your AI tools effortlessly. Unlock powerful insights and automate complex processes with ease.";

export default function Hero() {
  return (
    <section className="px-4 py-4 bg-white">
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-[10px] border border-gray-200/40">

        {/* Video */}
        <div className="absolute inset-0 z-0 rounded-[10px] overflow-hidden">
          <video
            src="https://framerusercontent.com/assets/kn7cGos906MVn9KuVEyKH6r8Ris.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-300/10 to-yellow-200/10 pointer-events-none" />

        {/* HERO TEXT */}
        <div className="relative z-10 pt-20 pb-4 max-w-3xl w-full px-4 text-center">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs rounded-full bg-white/20 backdrop-blur border border-white/30 text-black uppercase tracking-wide font-medium"
          >
            <SparkleIcon />
            BUSINESS & SOLUTION
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-bold text-black mb-5 leading-[1.05] tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(32px, 7vw, 72px)",
            }}
          >
            {text.split(" ").map((wordText, i) => (
              <motion.span
                key={i}
                variants={word}
                style={{ display: "inline-block", marginRight: 8 }}
              >
                {wordText}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-black/90 mb-6 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(14px, 3.5vw, 18px)" }}
          >
            {description.split(" ").map((desc, i) => (
              <motion.span
                key={i}
                variants={word}
                style={{ display: "inline-block", marginRight: 6 }}
              >
                {desc}
              </motion.span>
            ))}
          </motion.p>

          {/* 🔥 FIXED BUTTON ROW (SAME LINE ON MOBILE) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-row flex-wrap gap-3 justify-center items-center"
          >
            <AnimatedButton
              text="Get Started"
              href="/contact"
              className="bg-black border border-white/15 text-white"
            />
            <AnimatedButton
              text="Book a Demo"
              href="mailto:someone@yoursite.com"
              className="bg-white text-black"
            />
          </motion.div>
        </div>

        {/* CHAT SECTION (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-5xl px-4 pb-10"
        >
          <div className="relative backdrop-blur-xl bg-white/35 border border-white/40 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden">

            <div className="hidden sm:block">
              <FloatingShape src="https://framerusercontent.com/images/mNO89ys2gWfzwt1uvhnoJyIgupY.png" className="-left-8 bottom-4 w-20 md:w-28" />
              <FloatingShape src="https://framerusercontent.com/images/B0V3gNPI0mHpDUqWHR41pDhDfMs.png" className="-right-8 top-2 w-24 md:w-32" delay={1.2} />
            </div>

            {/* Chat */}
            <div className="relative z-10 max-w-xl mx-auto mb-5">
              <div className="bg-white/45 backdrop-blur-xl border border-white/40 rounded-3xl p-4 sm:p-5 shadow-xl">

                <motion.div
                  variants={containerVariant}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-4"
                >

                  <motion.div variants={messageVariant} className="flex justify-end">
                    <div className="flex items-end gap-2 max-w-[85%] sm:max-w-xs">
                      <div className="bg-white px-3 py-2 sm:px-4 sm:py-3 rounded-2xl rounded-br-sm text-sm shadow-sm">
                        Hey, I need help sending out a campaign.
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={messageVariant} className="flex justify-start">
                    <div className="flex items-start gap-2 max-w-[85%] sm:max-w-xs">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black text-white flex items-center justify-center rounded-lg text-xs">
                        ✦
                      </div>
                      <div className="bg-white px-3 py-2 sm:px-4 sm:py-3 rounded-2xl text-sm shadow-sm">
                        Of course! I'll prepare a campaign...
                      </div>
                    </div>
                  </motion.div>

                </motion.div>
              </div>
            </div>

            {/* Input */}
            <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-3 sm:p-4 max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Ask anything ..."
                className="w-full outline-none bg-transparent mb-3 text-sm text-gray-700"
              />

              <div className="flex justify-end">
                <button className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  ➤
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}