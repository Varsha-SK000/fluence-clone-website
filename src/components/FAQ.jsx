import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Fluence AI?",
    answer: "Fluence AI is a comprehensive platform that helps businesses connect, manage, and optimize their AI tools effortlessly. It enables automation, analytics, and intelligent workflows in one place.",
  },
  {
    question: "Can I integrate Fluence AI with my existing tools?",
    answer: "Yes! Fluence AI supports integration with a wide range of tools and platforms including CRMs, data warehouses, communication tools, and more via flexible API integrations.",
  },
  {
    question: "How does Fluence AI automate tasks?",
    answer: "Fluence AI uses AI-driven workflows to identify repetitive tasks, create automation rules, and trigger actions — reducing manual effort and boosting team productivity significantly.",
  },
  {
    question: "Is my data secure with Fluence AI?",
    answer: "Absolutely. We use enterprise-grade security standards including SOC 2 compliance, GDPR-ready infrastructure, HIPAA controls, and end-to-end encryption for all data.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 live support, comprehensive onboarding assistance, detailed documentation, and dedicated enterprise support packages for larger teams.",
  },
];

const avatars = [
  "https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png",
  "https://framerusercontent.com/images/yIREXkwAthEgTDhWj0Imj3yZ9JA.png",
  "https://framerusercontent.com/images/lSy8h57VGUMSaNMVlODBvAegU.png",
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="faq" className="w-full flex justify-center px-4 py-24 bg-white">
      <div className="w-full max-w-6xl rounded-[36px] bg-white border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] px-8 md:px-12 py-14">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">

          {/* Left panel */}
          <div style={{ position: "sticky", top: 100 }}>
            <span className="badge">FAQ</span>

            <h2 style={{
              fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800,
              fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0a0a0a",
              lineHeight: 1.18, margin: "18px 0 24px", letterSpacing: "-0.02em",
            }}>
              Frequently Asked Questions
            </h2>

            <p style={{ fontSize: 15, color: "#777", marginBottom: 22, lineHeight: 1.6 }}>
              <a
                href="/contact"
                style={{ fontWeight: 700, color: "#0a0a0a", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                Contact us!
              </a>{" "}
              We'll be happy to help you with any questions you have.
            </p>

            {/* Overlapping avatars */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="support team"
                  style={{
                    width: 42, height: 42, borderRadius: "4px", objectFit: "cover",
                    border: "3px solid #fff", marginLeft: i === 0 ? 0 : -13,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)", position: "relative",
                    zIndex: avatars.length - i,
                  }}
                />
              ))}
              <span style={{ marginLeft: 12, fontSize: 13, color: "#777", fontWeight: 500 }}>
                Support team
              </span>
            </div>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {faqData.map((item, index) => {
              const isOpen = index === activeIndex;
              return (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: isOpen ? "#fafafa" : "#f7f6f7",
                    border: isOpen ? "1px solid #e0d6f0" : "1px solid #ebebeb",
                    transition: "border-color 0.2s",
                  }}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <h4 style={{
                      fontSize: 16, fontWeight: 600, color: "#1b0c25",
                      fontFamily: "'Bricolage Grotesque', sans-serif", margin: 0,
                    }}>
                      {item.question}
                    </h4>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.22 }}
                      className="relative w-5 h-5 flex-shrink-0 ml-4"
                    >
                      <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#1b0c25] -translate-y-1/2 rounded-full" />
                      <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#1b0c25] -translate-y-1/2 rotate-90 rounded-full" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
