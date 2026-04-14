import { motion } from "framer-motion";

const leftBenefits = [
  { title: "Increased Efficiency", desc: "Automate tasks and reduce manual workloads across your entire organization." },
  { title: "Scalable Solutions", desc: "Easily grow with the increasing demands of your data operations." },
  { title: "Faster Decision-Making", desc: "Leverage real-time insights for quicker, more confident choices." },
];

const rightBenefits = [
  { title: "Enhanced Collaboration", desc: "Streamline workflows with team-friendly features built for modern teams." },
  { title: "Data Security", desc: "Safeguard your data with top-tier encryption and compliance standards." },
  { title: "Continuous Improvement", desc: "Let AI adapt and improve with your evolving data and business needs." },
];

function CheckIcon() {
  return (
    <div style={{
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "#0a0a0a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  );
}

function BenefitItem({ title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <CheckIcon />
      <div style={{ fontWeight: 700, marginTop: 10, color: "#111", fontSize: 15 }}>
        {title}
      </div>
      <p style={{ fontSize: 13.5, color: "#777", lineHeight: 1.65, marginTop: 4 }}>
        {desc}
      </p>
    </motion.div>
  );
}

function SecurityCard() {
  const certs = ["SOC 2", "GDPR", "HIPAA"];

  return (
    <div className="security-card"
      style={{
        border: "1px solid rgba(0,0,0,0.06)",
        borderRadius: 16,
        padding: "36px",
        background: "#fafafa",
        position: "relative",
        overflow: "hidden",
        marginTop: 20,
      }}
    >
      {/* glow */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 240,
          height: 240,
          background:
            "radial-gradient(circle, rgba(168,85,247,.12) 0%, transparent 70%)",
        }}
      />

      {/* MAIN ROW */}
      <div
        className="security-card-main"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* TEXT */}
        <div style={{ maxWidth: 420 }}>
          <h4
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 22,
              fontWeight: 700,
              marginBottom: 10,
              color: "#1b0c25",
            }}
          >
            Enterprise-Grade Security
          </h4>

          <p
            style={{
              fontSize: 14,
              color: "#6b7280",
              lineHeight: 1.7,
            }}
          >
            We maintain the highest standards of security and compliance for enterprise automation deployments.
          </p>
        </div>

        {/* CIRCLES */}
        <div
          className="security-circles"
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {certs.map((item) => (
            <div
              key={item}
              style={{
                color: "white",
                width: 66,
                height: 66,
                borderRadius: "50%",
                background: "linear-gradient(145deg, #a855f7, #f472b6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function KeyBenefits() {
  return (
    <section style={{ padding: "120px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <span className="badge">Key Benefits</span>
          <h2 style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(32px, 4vw, 54px)",
            fontWeight: 800,
            marginTop: 14,
          }}>
            Why Choose Fluence AI
          </h2>
          <p style={{ maxWidth: 540, margin: "14px auto 0", color: "#666", fontSize: 16, lineHeight: 1.7 }}>
            Fluence AI offers powerful benefits that help you save time, improve decision-making,
            and scale your data operations effortlessly.
          </p>
        </div>

        {/* GRID */}
        <div className="kb-grid">

          {/* LEFT */}
          <div className="kb-left">
            {leftBenefits.map((b, i) => (
              <BenefitItem key={b.title} {...b} index={i} />
            ))}
          </div>

          {/* CENTER */}
          <div className="kb-center">
            <img
              src="https://framerusercontent.com/images/5mBsBHgzfspdN9ZQUeC8VPiTixk.png"
              alt="AI Assistant"
            />
          </div>

          {/* RIGHT */}
          <div className="kb-right">
            {rightBenefits.map((b, i) => (
              <BenefitItem key={b.title} {...b} index={i} />
            ))}
          </div>

        </div>

        <SecurityCard />

      </div>

      {/* 🎯 MOBILE RESPONSIVE STYLES */}
      <style>{`
        .kb-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr 1fr;
          border: 1px solid #eee;
          border-radius: 10px;
          overflow: hidden;
          background: #fafafa;
        }

        .kb-left, .kb-right {
          padding: 44px;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

         .kb-center {
      background: linear-gradient(135deg, #F6F5F6, #e33354, #FF98E5, #591091);
      padding: 24px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .kb-center img {
      width: 100%;
      border-radius: 12px;
    }

    /* 📱 MOBILE RESPONSIVE */
    @media (max-width: 900px) {
      .kb-grid {
        display: flex;
        flex-direction: column;
        padding: 12px;
      }

          .kb-center { order: 1; }
          .kb-left { order: 2; }
          .kb-right { order: 3; }

          .kb-left, .kb-right {
            padding: 24px !important;
          }

          .kb-center {
            padding: 16px;
          }

          .security-card-main {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .security-circles {
            justify-content: flex-start !important;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}