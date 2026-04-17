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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const messageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
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
    // <section className="px-4 py-4 bg-white">
    <section
      className="flex flex-col items-center justify-start relative px-4 py-4"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f6f7",
        overflow: "visible",
      }}
    >
      {/* <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-[10px] border border-gray-200/40"> */}
      <div className="relative flex flex-col items-center justify-start w-full rounded-[10px] border border-gray-200/40">
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

        <div className="flex justify-center w-full">
          <div className="relative z-[1] flex flex-col items-start justify-start w-full max-w-[1240px] gap-[60px] md:gap-[30px] xl:gap-[60px] overflow-hidden">

            {/* HERO TEXT */}
            <div className="relative z-50 pt-20 pb-0 max-w-3xl w-full px-5 py-2 text-left mx-0 my-auto">

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs rounded-full bg-white/20 backdrop-blur border border-white/30 text-black uppercase tracking-wide font-medium self-start"
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
                    style={{ display: "inline-block", marginRight: "6px" }}
                  >
                    {wordText}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                variants={container}
                initial="hidden"
                animate="visible"
                className="text-black/90 mb-6 max-w-xl mx-0 leading-relaxed"
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
                className="mt-8 flex flex-row flex-wrap gap-3 justify-start items-start"
              >
                <AnimatedButton
                  text="Get Started"
                  href="/contact"
                  className="bg-black border border-white/15 text-white"
                />
                <AnimatedButton
                  text="Book a Demo"
                  href="mailto:someone@yoursite.com"
                  className="bg-transparent text-black border border-white/60 hover:bg-transparent hover:text-black"
                />
              </motion.div>
            </div>

            {/* CHAT SECTION (UNCHANGED) */}
            <div className="relative z-[-2] w-full flex justify-center rounded-t-xl rounded-b-none">
              <div className="w-full max-w-[1240px] z-[-1] flex flex-col items-start justify-start gap-[60px] md:gap-[30px] xl:gap-[60px] overflow-visible">
                {/* 🔲 SINGLE CONTAINER */}
                <div className="relative backdrop-blur-xl bg-white/40 border border-white/40 rounded-3xl p-6 shadow-xl w-full">

                  {/* 🟣 Floating Shapes INSIDE */}
                  <FloatingShape
                    src="https://framerusercontent.com/images/mNO89ys2gWfzwt1uvhnoJyIgupY.png"
                    className="-left-1  bottom-40 w-32"
                  />
                  <FloatingShape
                    src="https://framerusercontent.com/images/B0V3gNPI0mHpDUqWHR41pDhDfMs.png"
                    className="-right-1 top-20 w-38"
                    delay={1}
                  />

                  {/* 💬 Messages */}
                  <div className="bg-white/80 rounded-xl relative z-10 max-w-2xl px-6 py-8 mx-auto mb-6">
                    <div className="relative z-10 w-full max-w-2xl px-6 py-8 mx-auto mb-6">

                      {/* 💬 Messages Wrapper */}
                      <motion.div
                        className="flex flex-col gap-5"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                      >

                        {/* USER MESSAGE 1 */}
                        <motion.div variants={messageVariants} className="flex justify-end">
                          <div className="flex items-end gap-2 max-w-xs">
                            <div className="bg-white px-4 py-3 rounded-2xl text-sm shadow">
                              Hey, I need help sending out a campaign to all new subscribers.
                            </div>
                            <img
                              src="https://framerusercontent.com/images/8xPKr1A96oFIM4WCr0MnFTRZZdg.png"
                              alt="user"
                              className="w-8 h-8 rounded-md object-cover"
                            />
                          </div>
                        </motion.div>

                        {/* AI MESSAGE */}
                        <motion.div variants={messageVariants} className="flex flex-start">
                          <div className="flex items-start gap-2 max-w-xs">
                            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md text-xs">
                              ✦
                            </div>
                            <div className="bg-white px-4 py-3 rounded-2xl text-sm shadow">
                              Of course! I’ll prepare a personalized campaign for your new subscribers.
                              Would you like me to schedule it now or review it first?
                            </div>
                          </div>
                        </motion.div>

                        {/* USER MESSAGE 2 */}
                        <motion.div variants={messageVariants} className="flex justify-end">
                          <div className="flex items-end gap-2 max-w-xs">
                            <div className="bg-white px-4 py-3 rounded-2xl text-sm shadow">
                              Yes, you can schedule it.
                            </div>
                            <img
                              src="https://framerusercontent.com/images/8xPKr1A96oFIM4WCr0MnFTRZZdg.png"
                              alt="user"
                              className="w-8 h-8 rounded-md object-cover"
                            />
                          </div>
                        </motion.div>

                      </motion.div>
                    </div>
                  </div>


                  {/* ✏️ Input Section */}
                  <div className="bg-white/80 rounded-xl p-4 relative z-10 max-w-2xl px-6 py-8 mx-auto mb-6">

                    {/* Top Buttons */}
                    <div className="flex gap-2 mb-3">

                      <span className="text-xs bg-white px-3 py-1 rounded-full border inline-flex items-center gap-1 leading-none">
                        <img
                          src="/icons/chatgpt.png"
                          alt="GPT"
                          className="w-3 h-3 object-contain block"
                        />
                        GPT 4.5
                      </span>

                      <span className="text-xs bg-white px-3 py-1 rounded-full border inline-flex items-center gap-1 leading-none">
                        <img
                          src="/icons/globe.png"
                          alt="Search"
                          className="w-3 h-3 object-contain block"
                        />
                        Search
                      </span>
                    </div>

                    {/* Input */}
                    <input
                      type="text"
                      placeholder="Ask anything ..."
                      className="w-full outline-none bg-transparent mb-4 text-sm"
                    />

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {["Create Workflow", "Setup Bot", "Schedule Message"].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs px-3 py-1 bg-white rounded-full border shadow-sm"
                        >
                          <SparkleIcon />
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Send */}
                    <div className="flex justify-end">
                      <button className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                        ➤
                      </button>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}