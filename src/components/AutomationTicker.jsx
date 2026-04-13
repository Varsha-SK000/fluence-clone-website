import React from "react";

const items = [
  "Process Automation",
  "System Modernization",
  "AI-Powered Automation",
  "Sales Pipeline Automation",
  "Marketing Automation",
  "Workflow Intelligence",
  "Data Integration",
];

export default function AutomationTicker() {
  const doubled = [...items, ...items];

  return (
    <section className="relative w-full py-20 flex justify-center overflow-hidden bg-white">
      <div className="relative w-full max-w-[1100px] mx-auto px-6">
        {/* Card with video background */}
        <div
          className="relative h-[140px] flex items-center justify-center rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.35)", boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}
        >
          {/* Sky video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://framerusercontent.com/assets/gEU5HnZaxeuzARhdWAZ3V5VCgLE.mp4"
            autoPlay loop muted playsInline
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-blue-300/35" />
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5" />

          {/* Ticker */}
          <div className="relative z-10 tick-mask w-full">
            <div className="tick-l flex items-center">
              {doubled.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center flex-shrink-0 whitespace-nowrap"
                  style={{
                    margin: "0 10px",
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    borderRadius: 999,
                    padding: "8px 22px",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#1e3a5f",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
