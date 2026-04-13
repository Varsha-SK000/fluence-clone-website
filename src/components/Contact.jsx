import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-28">
        <section className="w-full">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 100px" }}>

            {/* Header */}
            <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 60px" }}>
              <span className="badge">Contact us</span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800,
                  marginTop: 20, color: "#0a0a0a", letterSpacing: "-0.025em", lineHeight: 1.1,
                }}
              >
                Get in touch with our team
              </motion.h2>
              <p style={{ marginTop: 14, fontSize: 16, color: "#777", lineHeight: 1.65 }}>
                We'd love to hear from you. Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Container */}
            <div
              style={{
                display: "flex", gap: 32, flexWrap: "wrap",
                background: "#fff", borderRadius: 20, padding: "40px 40px",
                boxShadow: "0 2px 30px rgba(0,0,0,0.06)", border: "1px solid #f0f0f0",
              }}
              className="contact-wrap"
            >
              {/* Left info */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: 28 }}
              >
                <p style={{ fontSize: 16, color: "#555", lineHeight: 1.65 }}>
                  Feel free to reach out — we'd love to connect and explore how Fluence AI can help your team.
                </p>

                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 42, height: 42, background: "#f5f5f5", borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0,
                  }}>✉️</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Email us</p>
                    <a href="mailto:hello@fluence.ai" style={{ color: "#666", fontSize: 14, textDecoration: "underline" }}>
                      hello@fluence.ai
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 42, height: 42, background: "#f5f5f5", borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0,
                  }}>💬</div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Get support</p>
                    <a href="#" style={{ color: "#666", fontSize: 14, textDecoration: "underline" }}>Chat with us</a>
                  </div>
                </div>

                {/* Testimonial quote */}
                <div style={{
                  marginTop: 8, padding: 20, border: "1px solid #ebebeb",
                  borderRadius: 10, background: "#fafafa",
                }}>
                  <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#555", marginBottom: 16 }}>
                    "Fluence AI has revolutionized the way we process data. It saved us countless hours."
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <img
                      src="https://framerusercontent.com/images/yIREXkwAthEgTDhWj0Imj3yZ9JA.png"
                      style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover" }}
                      alt="Amber Stone"
                    />
                    <div>
                      <p style={{ fontWeight: 600, fontSize: 13, margin: 0 }}>Amber Stone</p>
                      <p style={{ fontSize: 12, color: "#999", margin: 0 }}>Manager, GrowthTech</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right form */}
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    flex: "1.5 1 300px", background: "#f7f6f7", borderRadius: 10,
                    padding: 32, display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 16, textAlign: "center",
                  }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    background: "linear-gradient(135deg,#c084fc,#7c3aed)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 24, fontWeight: 800 }}>
                    Message sent!
                  </h3>
                  <p style={{ color: "#777", fontSize: 15 }}>We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" }); }}
                    className="btn-dark"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={submit}
                  style={{
                    flex: "1.5 1 300px", background: "#f7f6f7",
                    padding: 32, borderRadius: 10,
                    display: "flex", flexDirection: "column", gap: 16,
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-row">
                    <input className="input" name="firstName" placeholder="First name" value={form.firstName} onChange={handle} required />
                    <input className="input" name="lastName" placeholder="Last name" value={form.lastName} onChange={handle} required />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-row">
                    <input className="input" type="email" name="email" placeholder="Your email" value={form.email} onChange={handle} required />
                    <input className="input" type="tel" name="phone" placeholder="Your phone" value={form.phone} onChange={handle} />
                  </div>
                  <textarea className="input" name="message" rows="5" placeholder="Write your message" value={form.message} onChange={handle} required style={{ resize: "vertical" }} />
                  <button type="submit" className="submit-btn">Submit Message</button>
                  <p style={{ fontSize: 12, color: "#999", textAlign: "center" }}>
                    By submitting you agree to our <span style={{ textDecoration: "underline", cursor: "pointer" }}>Privacy Policy</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
          .contact-wrap { padding: 24px !important; }
        }
      `}</style>
    </div>
  );
}
