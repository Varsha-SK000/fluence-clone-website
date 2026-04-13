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
    imgRight: true,
    showTag: true,
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
    imgRight: false,
    showTag: false,
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
    imgRight: true,
    showTag: false,
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
      img.style.transform = `translate3d(0, ${current * 120 * speed}px, 0) scale(${1.1 - index * 0.02})`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [index]);

  return (
    <div style={{ position: "sticky", top: 90, marginBottom: 64 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 440,
          borderRadius: 10,
          overflow: "hidden",
          background: "#fafafa",
          boxShadow: "0 20px 60px rgba(0,0,0,0.07)",
          direction: row.imgRight ? "rtl" : "ltr",
        }}
        className="feature-grid-item"
      >
        {/* Text */}
        <div style={{ padding: "60px 56px", direction: "ltr", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h3 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(22px, 2.8vw, 34px)",
            fontWeight: 800,
            margin: "0 0 14px",
            color: "#0a0a0a",
            lineHeight: 1.2,
          }}>
            {row.heading}
          </h3>
          <p style={{ color: "#666", lineHeight: 1.72, marginBottom: 28, fontSize: 15 }}>{row.desc}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {row.points.map((p) => (
              <div key={p.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: "#eee",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
                }}>
                  {p.icon}
                </div>
                <span style={{ fontSize: 14, fontWeight: 500, color: "#333" }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div style={{ overflow: "hidden", direction: "ltr" }} className="image">
          <img
            ref={imgRef}
            src={row.img}
            alt={row.heading}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", willChange: "transform" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .feature-grid-item { grid-template-columns: 1fr !important; direction: ltr !important; }
          .feature-grid-item > div:first-child { padding: 36px 24px !important; }
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
