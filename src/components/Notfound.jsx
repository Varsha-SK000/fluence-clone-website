import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-[100]">
        <Navbar />
      </div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/ChLYQp9qidYmBasL0Sih4gYbmM.png"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: "clamp(100px, 18vw, 200px)",
            fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, margin: 0,
          }}
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/65 mt-5 max-w-sm text-base leading-relaxed"
        >
          Hmm… I couldn't find that page. It's just me playing the guitar :)
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/")}
          className="mt-10 px-8 py-3 rounded-xl text-sm font-semibold transition"
          style={{ border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}
        >
          ← Back to home
        </motion.button>
      </div>
    </div>
  );
}
