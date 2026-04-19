import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const rows = [
  {
    heading: 'Seamless Data Integration Process',
    desc: 'Effortlessly connect with diverse data sources, ensuring smooth data flow for real-time insights and accurate analysis.',
    points: [
      { icon: '🗄', label: 'Unified Data Connections' },
      { icon: '🔄', label: 'Real-Time Data Syncing' },
      { icon: '🔌', label: 'Flexible API Integrations' },
    ],
    img: 'https://framerusercontent.com/images/ZHxn4x0VKrIK8kMprl2U0prVPrs.png',
    imgRight: true,
    showTag: true,
    bg: "linear-gradient(135deg, #6457d8, #3d0d55,  #813581, #591091)",
  },
  {
    heading: 'Advanced AI-Powered Analytics Tools',
    desc: 'Leverage intelligent analytics to uncover hidden patterns, predict future trends, and make data-driven decisions with confidence.',
    points: [
      { icon: '📈', label: 'Accurate Trend Forecasting' },
      { icon: '📊', label: 'Dynamic Insightful Dashboards' },
      { icon: '🤖', label: 'AI-Driven Data Metrics' },
    ],
    img: 'https://framerusercontent.com/images/yudPladgzJSykTseWh34MLSt0.png',
    imgRight: false,
    showTag: false,
    bg: "linear-gradient(135deg, #1387c1, #2e9cc5, #F6F5F6, #2ca9cb)",
  },
  {
    heading: 'Intelligent Automation Workflow Engine',
    desc: 'Automate repetitive tasks, optimize workflows, and boost productivity with smart, AI-powered automation capabilities.',
    points: [
      { icon: '⚙️', label: 'Streamlined Workflow Automation' },
      { icon: '✅', label: 'Efficient Task Optimization' },
      { icon: '⚡', label: 'Smart Trigger Functions' },
    ],
    img: 'https://framerusercontent.com/images/N4vCtjk9YHrPSVPINwtdHZjU.png',
    imgRight: true,
    showTag: false,
    bg: "linear-gradient(135deg, #832d74, #e63be1, #FF98E5, #d25eb3)",
  },
];

/* =========================
   FEATURE ROW
========================= */
function FeatureRow({ row }) {

  return (
    <div className="feature-row">
      <div className={`feature-grid ${row.imgRight ? "reverse" : ""}`}>

        {/* TEXT */}
        <div className="text">
          {row.showTag && <span className="tag">Product Overview</span>}

          <h3>{row.heading}</h3>
          <p>{row.desc}</p>

          <div className="points">
            {row.points.map((p) => (
              <div className="point" key={p.label}>
                <div className="icon">{p.icon}</div>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="image">
          <div
            className="img-bg"
            style={{ background: row.bg }}
          />
          <img src={row.img} alt={row.heading} />
        </div>

      </div>
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
export default function ProductOverview() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -20]);

  return (
    <motion.section ref={sectionRef} id="feature" className="section" style={{ y }}>

      <div className="container">

        {/* HEADER */}
        <div className="header">
          <span
            className="inline-flex items-center px-4 py-1 rounded-full border shadow-sm"
            style={{
              color: "rgb(27, 12, 37)",
              borderColor: "rgb(213, 136, 251)", // matches framer purple-ish border
              backgroundColor: "white",
              lineHeight: "1",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >Product Overview</span>

          <h2>Explore the Power of Fluence AI</h2>

          <p>
            Discover how Fluence AI transforms raw data into actionable insights.
          </p>
        </div>

        {/* STACK */}
        <div className="stack">
          {rows.map((row, i) => (
            <FeatureRow key={i} row={row} index={i} />
          ))}
        </div>

      </div>

      {/* STYLES */}
      <style>{`
        .section{
          flex-flow: row;
          flex: none;
          place-content: flex-start center;
          align-items: flex-start;
          gap: 0;
          width: 100%;
          height: min-content;
          padding: 100px 16px 200px;
          display: flex;
          position: relative;
          overflow: visible;
          background: #fff;
        }

        .container{
          max-width:1100px;
          margin:0 auto;
          width:100%;
        }

        .header{
          text-align:center;
          margin-bottom:70px;
        }

        .badge{
          padding:6px 14px;
          border:1px solid #ddd;
          border-radius:999px;
          font-size:13px;
        }

        .header h2{
          font-size:52px;
          font-weight:800;
          margin:18px 0;
        }

        .header p{
          max-width:520px;
          margin:0 auto;
          color:#666;
        }

        .stack{
          display:flex;
          flex-direction:column;
          gap:0;
          width:100%;
        }

        .feature-row{
          position: relative;
          margin-bottom: 60px;
        }

        .feature-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          align-items: start;
          min-height:420px;
          border-radius:24px;
          overflow:hidden;
          background:#fafafa;
          box-shadow:0 20px 60px rgba(0,0,0,0.08);
        }

        .feature-grid.reverse{
          direction:rtl;
        }

        .feature-grid.reverse .text,
        .feature-grid.reverse .image{
          direction:ltr;
        }

        .text{
          padding:64px;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .text h3{
          font-size:32px;
          margin:14px 0;
          font-weight:800;
        }

        .text p{
          color:#666;
          line-height:1.7;
          margin-bottom:24px;
        }

        .points{
          display:flex;
          flex-direction:column;
          gap:14px;
        }

        .point{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .icon{
          width:38px;
          height:38px;
          border-radius:10px;
          background:#eee;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .image{
          position: sticky;
          top: 120px;
          align-self: start;
          overflow:hidden;
          will-change:transform;
          min-height:420px;
        }

        .img-bg{
          position: absolute;
          inset: 40px;
          border-radius: 24px;
          filter: blur(40px);
          opacity: 0.7;
          z-index: 0;
      }

        .image img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
          will-change:transform;
        }

        @media(max-width:768px){
          .feature-grid{
            grid-template-columns:1fr;
          }

          .header h2{
            font-size:34px;
          }

          .text{
            padding:40px 24px;
          }
        }
      `}</style>
    </motion.section>
  );
}