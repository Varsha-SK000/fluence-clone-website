const steps = [
  {
    title: "Connect Your Data",
    desc: "Effortlessly integrate data from various sources into a unified system for seamless operations.",
    bg: "linear-gradient(150deg,#fde8d8 0%,#fcd4e0 50%,#e9d5ff 100%)",
    visual: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <div style={{
          background: "rgba(255,255,255,.75)", backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,.9)", borderRadius: 16,
          padding: "14px 22px", display: "flex", alignItems: "center", gap: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,.9)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#a855f7" />
            </svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a" }}>Learning your workflow</span>
        </div>
      </div>
    ),
  },
  {
    title: "Analyze and Optimize",
    desc: "Use AI to uncover valuable insights, detect patterns, and improve your overall performance.",
    bg: "linear-gradient(150deg,#bfdbfe 0%,#93c5fd 40%,#c4b5fd 100%)",
    visual: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 14 }}>
        <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 26, color: "#1e1e1e" }}>Pass Rate</div>
        <div style={{ fontSize: 13, color: "#555" }}>100% completed</div>
        <div style={{ width: 180, height: 8, background: "rgba(255,255,255,.4)", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg,#7c3aed,#a855f7)", borderRadius: 4 }} />
        </div>
        <div style={{ fontSize: 12, color: "#6d28d9", fontWeight: 600 }}>↑ 24% vs last month</div>
      </div>
    ),
  },
  {
    title: "Let AI Work",
    desc: "Streamline repetitive tasks and enhance productivity with fully automated AI-driven workflows.",
    bg: "linear-gradient(150deg,#f5d0fe 0%,#c084fc 50%,#818cf8 100%)",
    visual: (
      <div style={{ padding: "18px 20px", height: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,.8)", fontWeight: 600 }}>Inbox</div>
        <div style={{ background: "rgba(255,255,255,.9)", borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{
              width: 20, height: 20, borderRadius: 6, background: "#0a0a0a",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <span style={{ color: "#a78bfa", fontSize: 10 }}>✦</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#0a0a0a" }}>Co-Pilot</span>
          </div>
          <div style={{ fontSize: 12, color: "#555" }}>I've processed the order for you</div>
          <div style={{
            marginTop: 8, background: "linear-gradient(135deg,#c084fc,#7c3aed)", borderRadius: 8,
            padding: "5px 11px", fontSize: 11, fontWeight: 600, color: "#fff",
            display: "inline-flex", alignItems: "center", gap: 5,
          }}>✦ Review order</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src="https://framerusercontent.com/images/yIREXkwAthEgTDhWj0Imj3yZ9JA.png"
            alt="u" style={{ width: 24, height: 24, borderRadius: "50%", objectFit: "cover" }}
          />
          <div style={{ background: "rgba(255,255,255,.88)", borderRadius: 10, padding: "6px 12px", fontSize: 12, color: "#333" }}>
            Thanks for handling that!
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "100px 0", background: "#f6f6f6" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Hero card */}
        <div style={{
          background: "#fff", border: "1px solid #e8e8e8", borderRadius: 10,
          display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden", marginBottom: 16,
        }} className="hiw-top">
          <div style={{ padding: "52px 52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ marginBottom: 20 }}>
              <span className="badge">How It Works</span>
            </div>
            <h2 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
              fontSize: "clamp(26px, 3.2vw, 44px)", color: "#0a0a0a",
              lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: 16,
            }}>
              A Simple 3-Step Process
            </h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.72, marginBottom: 32 }}>
              Get started quickly and effortlessly with Fluence AI's streamlined 3-step process
              designed to optimize your data workflow.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/contact" className="btn-dark">Get Started</a>
              <a href="mailto:someone@yoursite.com" className="btn-outline">Book a Demo</a>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: 380, overflow: "hidden" }}>
          <img
            src="https://framerusercontent.com/images/eetEvxW02PAzDQTNZEJNez0XPc.png"
            alt="Team"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)" }}
          />
          <div style={{
            position: "absolute", bottom: 24, left: 20, right: 20,
            background: "rgba(255,255,255,.92)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,.95)", borderRadius: 10,
            padding: "14px 18px", display: "flex", alignItems: "center", gap: 12,
            boxShadow: "0 4px 20px rgba(0,0,0,.08)",
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: "50%",
              background: "linear-gradient(135deg,#c084fc,#7c3aed)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, fontSize: 15, color: "#0a0a0a" }}>
              AI Analysis Complete
            </span>
          </div>
        </div>

        {/* 3 step cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="hiw-steps">
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: "#fff", border: "1px solid #e8e8e8", borderRadius: 10,
                overflow: "hidden", transition: "transform .22s, box-shadow .22s",
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
                <div style={{
                  width: 28, height: 28, borderRadius: 8, background: "#f0f0f0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, color: "#555", marginBottom: 12,
                }}>
                  0{i + 1}
                </div>
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
        }
      `}</style>
    </section>
  );
}
