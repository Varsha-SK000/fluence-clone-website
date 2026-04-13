import { useState } from "react";

const plans = [
  {
    iconColor: "#60a5fa",
    name: "Starter",
    desc: "Get started with Fluence AI at no cost",
    monthly: "Free",
    yearly: "Free",
    note: null,
    features: [
      "400 AI credits at signup",
      "20,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
    cta: "Get Started",
    highlight: false,
    popular: false,
  },
  {
    iconColor: "#f97316",
    name: "Plus",
    desc: "Unlock more powerful features for your team",
    monthly: "$22",
    yearly: "$18",
    note: "/month, per user",
    features: [
      "Unlimited AI credits",
      "50,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
    cta: "Get Started",
    highlight: true,
    popular: true,
  },
  {
    iconColor: "#ec4899",
    name: "Pro",
    desc: "Take your business to the next level",
    monthly: "$69",
    yearly: "$55",
    note: "/month, per user",
    features: [
      "Unlimited AI creation",
      "100,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
    cta: "Get Started",
    highlight: false,
    popular: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" style={{ padding: "120px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="badge">Pricing</span>
          <h2 style={{
            marginTop: 18, fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(32px, 4vw, 54px)", lineHeight: 1.05,
            fontWeight: 800, letterSpacing: "-0.03em", color: "#0a0a0a",
          }}>
            Simple, Flexible Pricing
          </h2>
          <p style={{ marginTop: 16, fontSize: 17, color: "#666", maxWidth: 460, margin: "16px auto 0", lineHeight: 1.6 }}>
            Pricing plans for businesses at every stage of growth.
          </p>

          {/* Toggle */}
          <div style={{
            marginTop: 28, display: "inline-flex", padding: 5,
            borderRadius: 999, background: "#f5f5f5", border: "1px solid #e6e6e6", gap: 4,
          }}>
            {["monthly", "yearly"].map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                style={{
                  padding: "10px 24px", borderRadius: 999, border: "none", cursor: "pointer",
                  fontSize: 14, fontWeight: 600,
                  background: billing === b ? "#111" : "transparent",
                  color: billing === b ? "#fff" : "#666",
                  transition: "all 0.2s",
                  position: "relative",
                }}
              >
                {b.charAt(0).toUpperCase() + b.slice(1)}
                {b === "yearly" && (
                  <span style={{
                    position: "absolute", top: -8, right: -4,
                    background: "#d1fae5", color: "#065f46",
                    fontSize: 10, fontWeight: 700, padding: "2px 6px",
                    borderRadius: 999,
                  }}>-18%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                borderRadius: 10, padding: "32px 28px",
                border: plan.popular ? "2px solid #a855f7" : "1px solid rgba(0,0,0,0.08)",
                background: "#fff", position: "relative", transition: "transform 0.25s, box-shadow 0.25s",
                boxShadow: plan.popular ? "0 12px 44px rgba(168,85,247,0.14)" : "none",
              }}
              onMouseEnter={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 16px 44px rgba(0,0,0,0.09)";
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              {plan.popular && (
                <div style={{
                  position: "absolute", top: -1, right: 20,
                  background: "#7c3aed", color: "#fff",
                  fontSize: 11, padding: "4px 12px", borderRadius: "0 0 10px 10px", fontWeight: 700,
                }}>
                  Most Popular
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ color: plan.iconColor, fontSize: 22 }}>✦</span>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {plan.name}
                </h3>
              </div>

              <p style={{ fontSize: 14, color: "#777", marginBottom: 20, lineHeight: 1.5 }}>{plan.desc}</p>

              <div style={{ marginBottom: 22 }}>
                <span style={{
                  fontSize: 46, fontWeight: 800, fontFamily: "'Bricolage Grotesque', sans-serif",
                  color: "#0a0a0a",
                }}>
                  {billing === "monthly" ? plan.monthly : plan.yearly}
                </span>
                {plan.note && (
                  <span style={{ fontSize: 13, color: "#aaa", marginLeft: 6 }}>{plan.note}</span>
                )}
              </div>

              <a
                href="/contact"
                style={{
                  display: "block", textAlign: "center", padding: "13px",
                  borderRadius: 14, fontWeight: 600, fontSize: 15, textDecoration: "none",
                  border: plan.highlight ? "none" : "1.5px solid rgba(0,0,0,0.14)",
                  background: plan.highlight ? "#111" : "transparent",
                  color: plan.highlight ? "#fff" : "#111",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {plan.cta}
              </a>

              <div style={{ marginTop: 26, borderTop: "1px solid #f0f0f0", paddingTop: 20 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.1em", color: "#bbb", textTransform: "uppercase", marginBottom: 14 }}>
                  What's included
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ fontSize: 14, color: "#555", display: "flex", gap: 9, alignItems: "flex-start" }}>
                      <span style={{ color: "#a855f7", flexShrink: 0, marginTop: 1 }}>✦</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
