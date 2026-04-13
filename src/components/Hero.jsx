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

/* ✅ NEW: Parent stagger animation */
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1, // ⏱️ delay between messages
    },
  },
};

const text = "The AI Agent Platform for Modern Teams";
const description = "Fluence AI helps you connect, manage, and optimize your AI tools effortlessly. Unlock powerful insights and automate complex processes with ease.";

function CheckIcon() {
  return (
    <div
      style={{
        background: "#4f46e5",
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
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

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
/* ✅ UPDATED: cleaner message animation */
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

export default function Hero() {
  return (
    <section className="px-4 py-4 bg-white">
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-[10px] border border-gray-200/40">

        {/* Video background */}
        <div className="absolute inset-0 z-0 rounded-[10px] overflow-hidden">
          <video
            src="https://framerusercontent.com/assets/kn7cGos906MVn9KuVEyKH6r8Ris.mp4"
            autoPlay loop muted playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" />
        </div>

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-300/10 to-yellow-200/10 pointer-events-none" />

        {/* Hero text */}
        <div className="relative z-10 pt-20 pb-4 max-w-3xl ">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs rounded-full bg-white/20 backdrop-blur border border-white/30 text-black uppercase tracking-wide font-medium"
          >
            <SparkleIcon />
            BUSINESS &amp; SOLUTION
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-bold text-black mb-5 leading-[1.05] tracking-tight"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(38px, 6vw, 72px)",
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

          {/* <motion.p
            variants={container}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-black/90 mb-2 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.8vw, 18px)" }}
          >
            Fluence AI helps you connect, manage, and optimize your AI tools effortlessly.
            Unlock powerful insights and automate complex processes with ease.
          </motion.p> */}

          <motion.p
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-black/90 mb-2 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(15px, 1.8vw, 18px)" }}
          >
            {description.split(" ").map((desc, i) => (
              <motion.span
                key={i}
                variants={word}
                style={{ display: "inline-block", marginRight: 6 }}
              >
                {description.split(" ")[i] || ""}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-9 flex gap-4 justify-center flex-wrap"
          >
            <AnimatedButton text="Get Started" href="/contact" className="bg-black border border-white/15 text-white" />
            <AnimatedButton text="Book a Demo" href="mailto:someone@yoursite.com" className="bg-white text-black" />
          </motion.div>
        </div>

        {/* UI card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative z-10 w-full max-w-5xl px-4 pb-10"
        >
          <div className="relative backdrop-blur-xl bg-white/35 border border-white/40 rounded-3xl p-6 shadow-2xl overflow-hidden">

            {/* Floating shapes */}
            <FloatingShape src="https://framerusercontent.com/images/mNO89ys2gWfzwt1uvhnoJyIgupY.png" className="-left-8 bottom-4 w-20 md:w-28" />
            <FloatingShape src="https://framerusercontent.com/images/B0V3gNPI0mHpDUqWHR41pDhDfMs.png" className="-right-8 top-2 w-24 md:w-32" delay={1.2} />

            {/* Chat */}
            <div className="relative z-10 max-w-xl mx-auto mb-5">
              <div className="bg-white/45 backdrop-blur-xl border border-white/40 rounded-3xl p-5 shadow-xl">

                {/* ✅ UPDATED container */}
                <motion.div
                  variants={containerVariant}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-4"
                >

                  {/* User */}
                  <motion.div variants={messageVariant} className="flex justify-end">
                    <div className="flex items-end gap-2 max-w-xs">
                      <div className="bg-white px-4 py-3 rounded-2xl rounded-br-sm text-sm shadow-sm">
                        Hey, I need help sending out a campaign to all new subscribers.
                      </div>
                      <img src="https://framerusercontent.com/images/8xPKr1A96oFIM4WCr0MnFTRZZdg.png" className="w-8 h-8 rounded-lg" />
                    </div>
                  </motion.div>

                  {/* AI */}
                  <motion.div variants={messageVariant} className="flex justify-start">
                    <div className="flex items-start gap-2 max-w-xs">
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg text-xs">✦</div>
                      <div className="bg-white px-4 py-3 rounded-2xl text-sm shadow-sm">
                        Of course! I'll prepare a personalized campaign...
                      </div>
                    </div>
                  </motion.div>

                  {/* User */}
                  <motion.div variants={messageVariant} className="flex justify-end">
                    <div className="flex items-end gap-2 max-w-xs">
                      <div className="bg-white px-4 py-3 rounded-2xl text-sm shadow-sm">
                        Yes, you can schedule it.
                      </div>
                      <img src="https://framerusercontent.com/images/8xPKr1A96oFIM4WCr0MnFTRZZdg.png" className="w-8 h-8 rounded-lg" />
                    </div>
                  </motion.div>

                </motion.div>
              </div>
            </div>

            {/* Input area */}
            <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-4 max-w-xl mx-auto">
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full border border-gray-200 font-medium">
                  GPT 4.5
                </span>
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full border border-gray-200 font-medium">
                  Search
                </span>
              </div>

              <input
                type="text"
                placeholder="Ask anything ..."
                className="w-full outline-none bg-transparent mb-3 text-sm text-gray-700 placeholder:text-gray-400"
              />

              <div className="flex flex-wrap gap-2 mb-3">
                {["Create Workflow", "Setup Bot", "Schedule Message"].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 transition"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-purple-500">
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 rotate-90">
                    <path d="M2 12L22 2 14 22 10 14z" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}