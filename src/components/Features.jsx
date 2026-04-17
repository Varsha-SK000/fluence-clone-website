import { useEffect, useRef } from "react";

const rows = [
  {
    heading: "Seamless Data Integration Process",
    desc: "Effortlessly connect with diverse data sources, ensuring smooth data flow for real-time insights and accurate analysis.",
    points: [
      { icon: "🗄", label: "Unified Data Connections" },
      { icon: "🔄", label: "Real-Time Data Syncing" },
      { icon: "🔌", label: "Flexible API Integrations" },
    ],
    img: "https://framerusercontent.com/images/ZHxn4x0VKrIK8kMprl2U0prVPrs.png",
    bg: "linear-gradient(135deg, #AA70FF 0%, #F7D5FF 100%)",
  },
  {
    heading: "Advanced AI-Powered Analytics Tools",
    desc: "Leverage intelligent analytics to uncover hidden patterns, predict future trends, and make data-driven decisions with confidence.",
    points: [
      { icon: "📈", label: "Accurate Trend Forecasting" },
      { icon: "📊", label: "Dynamic Insightful Dashboards" },
      { icon: "🤖", label: "AI-Driven Data Metrics" },
    ],
    img: "https://framerusercontent.com/images/yudPladgzJSykTseWh34MLSt0.png",
    bg: "linear-gradient(135deg, #9AC5FF 0%, #e9e9e9 100%)",
  },
  {
    heading: "Intelligent Automation Workflow Engine",
    desc: "Automate repetitive tasks, optimize workflows, and boost productivity with smart, AI-powered automation capabilities.",
    points: [
      { icon: "⚙️", label: "Streamlined Workflow Automation" },
      { icon: "✅", label: "Efficient Task Optimization" },
      { icon: "⚡", label: "Smart Trigger Functions" },
    ],
    img: "https://framerusercontent.com/images/N4vCtjk9YHrPSVPINwtdHZjU.png",
    bg: "linear-gradient(135deg, #FF8AFD 0%, #e0e0e0 100%)",
  },
];

function FeatureRow({ row, index }) {
  const imgRef = useRef(null);

  useEffect(() => {
    let raf;
    let current = 0;
    let target = 0;

    const animate = () => {
      const img = imgRef.current;
      if (!img) return;

      const rect = img.parentElement?.getBoundingClientRect();
      const vh = window.innerHeight;

      target = ((rect?.top ?? 0) - vh * 0.5) / vh;
      current += (target - current) * 0.08;

      const speed = 1 + index * 0.3;

      img.style.transform = `scale(1.02)`;

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [index]);

  // layout rule
  const isEven = index % 2 === 1;

  return (
    <div
      style={{
        marginBottom: 140,
        position: "relative",
        zIndex: 10 - index,
      }}
    >
      <div
        className="feature-card"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 440,
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.07)",
          background: "#fff",
          transform: `translateY(${index * 40}px)`,
          position: "relative",
          transition: "transform 0.6s ease",
        }}
      >

        {/* TEXT */}
        <div
          style={{
            order: isEven ? 2 : 1,
            padding: "60px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{
            fontSize: "clamp(22px, 2.8vw, 34px)",
            fontWeight: 800,
            marginBottom: 14,
            color: "#0a0a0a",
          }}>
            {row.heading}
          </h3>

          <p style={{ color: "#666", marginBottom: 28, lineHeight: 1.7 }}>
            {row.desc}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {row.points.map((p) => (
              <div key={p.label} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{
                  width: 36,
                  height: 36,
                  background: "#eee",
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  {p.icon}
                </div>
                <span style={{ fontSize: 14, fontWeight: 500 }}>
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE SIDE ONLY BG */}
        <div
          style={{
            order: isEven ? 1 : 2,
            background: row.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "visible",
            position: "sticky",
            top: 80,
            padding: "40px",
            boxSizing: "border-box",
          }}
        >
          <img
            ref={imgRef}
            src={row.img}
            alt=""
            style={{
              width: "100%",
              maxWidth: "420px",
              objectFit: "contain",
              willChange: "transform",
              borderRadius: "12px",
            }}
          />
        </div>
      </div>

      {/* MOBILE FIX */}
      <style>{`
        @media (max-width: 768px) {
          .feature-card {
            grid-template-columns: 1fr !important;
          }

          .feature-card > div {
            order: unset !important;
          }

          .feature-card img {
            width: 100% !important;
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default function ProductOverview() {
  return (
    <section
      id="feature"
      style={{
        width: "100%",
        padding: "100px 16px 200px",
        background: "#fff",
        position: "relative",
        overflow: "visible",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="badge">Product Overview</span>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(32px, 4vw, 54px)",
            fontWeight: 800,
            margin: "18px 0 14px",
            color: "#0a0a0a",
            letterSpacing: "-0.02em",
          }}>
            Explore the Power of Fluence AI
          </h2>
          <p style={{ maxWidth: 520, margin: "0 auto", color: "#666", fontSize: 16, lineHeight: 1.65 }}>
            Discover how Fluence AI transforms raw data into actionable insights.
            Our advanced features are designed to optimize workflows.
          </p>
        </div>

        {/* Sticky stack */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {rows.map((row, i) => (
            <FeatureRow key={i} row={row} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
<style>{`
@media (max-width: 768px) {
  .feature-card {
    grid-template-columns: 1fr !important;
  }

  .feature-card > div:nth-child(1) {
    order: 2 !important;
  }

  .feature-card > div:nth-child(2) {
    order: 1 !important;
  }
}
`}</style>