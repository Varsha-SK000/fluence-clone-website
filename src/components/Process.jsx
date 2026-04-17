import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

const steps = [
  {
    title: "Connect Your Data",
    desc: "Effortlessly integrate data from various sources into a unified system for seamless operations.",
    visual: (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 16,
        }}
      >
        <img
          src="https://framerusercontent.com/images/VLnlQRrUsqwRQQiox0h47mo.png"
          alt="step 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ),
  },

  {
    title: "Analyze and Optimize",
    desc: "Use AI to uncover valuable insights, detect patterns, and improve your overall performance.",
    visual: (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 16,
        }}
      >
        <img
          src="https://framerusercontent.com/images/PLXsSSAuDhFY3nTykAyD7DpKi8.png"
          alt="step 2"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ),
  },

  {
    title: "Let AI Work",
    desc: "Streamline repetitive tasks and enhance productivity with fully automated AI-driven workflows.",
    visual: (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 16,
        }}
      >
        <img
          src="https://framerusercontent.com/images/uup7dORC5yPjXdJ4q20qgl3IGI.png"
          alt="step 3"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ),
  },
];

const ctaItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  return (
    <section style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Hero card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            alignItems: "stretch",
          }}
          className="hiw-top"
        >

          {/* LEFT CONTAINER */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 10,
              padding: "52px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: 20 }}>
              <span className="badge">How It Works</span>
            </div>

            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(26px, 3.2vw, 44px)",
                color: "#0a0a0a",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                marginBottom: 16,
              }}
            >
              A Simple 3-Step Process
            </h2>

            <p
              style={{
                fontSize: 15,
                color: "#666",
                lineHeight: 1.72,
                marginBottom: 32,
              }}
            >
              Get started quickly and effortlessly with Fluence AI's streamlined 3-step process
              designed to optimize your data workflow.
            </p>

            <motion.div
              className="flex gap-4 flex-wrap  hiw-buttons"
              variants={ctaItem}
            >
              <AnimatedButton
                text="Get Started"
                href="/contact"
                className="bg-black border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
              />

              <AnimatedButton
                text="Book a Demo"
                href="mailto:someone@yoursite.com"
                className="bg-transparent text-black border border-black/20 hover:bg-transparent hover:text-black"
              />
            </motion.div>
          </div>

          {/* RIGHT CONTAINER */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: 10,
              position: "relative",
              minHeight: 380,
              overflow: "hidden",
              padding: 6,
            }}
          >
            <img
              src="https://framerusercontent.com/images/eetEvxW02PAzDQTNZEJNez0XPc.png"
              alt="Team"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(20%)",
              }}
            />
          </div>

        </div>

        <br />
        {/* 3 step cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(24px, 4vw, 60px)", alignItems: "stretch", }} className="hiw-steps">
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: "#fff", border: "1px solid #e8e8e8", borderRadius: 10,
                overflow: "hidden", transition: "transform .22s, box-shadow .22s", padding: "2px 6px 8px", display: "flex", flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 36px rgba(0,0,0,0.09)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ height: 210, background: step.bg }}>{step.visual}</div>
              <div style={{ padding: "22px 26px 28px" }}>
                <h4 style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700,
                  fontSize: 20, color: "#0a0a0a", marginBottom: 8,
                }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: 14, color: "#777", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
  @media (max-width: 768px) {
    .hiw-top, .hiw-steps { grid-template-columns: 1fr !important; }
    .hiw-top > div:first-child { padding: 36px 28px !important; }

    /* 🔥 Button full width + bigger size */
    .hiw-buttons a {
      width: 100%;
      justify-content: center;
      padding: 14px 18px !important;
      font-size: 15px !important;
      border-radius: 10px;
    }
  }
`}</style>
    </section>
  );
}
