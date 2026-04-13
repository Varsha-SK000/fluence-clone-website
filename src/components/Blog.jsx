import { motion } from "framer-motion";

const blogPosts = [
  {
    img: "https://framerusercontent.com/images/tyw3zK8EGKr3laKc5scgwDmBag.png",
    cat: "STARTUP",
    date: "OCT 10, 2024",
    title: "Why Data Security is Vital for Every SaaS Platform",
    link: "https://fluence.framer.website/blog/why-data-security-is-vital-for-every-saas-platform",
    grad: "linear-gradient(to top, rgba(244,63,94,.85) 0%, rgba(244,63,94,.3) 40%, transparent 70%)",
  },
  {
    img: "https://framerusercontent.com/images/ZR1Iqs0oD39u4eGjMDsbMZWhMY.png",
    cat: "SAAS",
    date: "MAR 13, 2025",
    title: "Efficient Strategies for Scaling Your SaaS Business",
    link: "https://fluence.framer.website/blog/integrating-payment-gateways-for-seamless-transactions",
    grad: "linear-gradient(to top, rgba(59,130,246,.85) 0%, rgba(59,130,246,.3) 40%, transparent 70%)",
  },
  {
    img: "https://framerusercontent.com/images/ARTVA54SjmGxUnXYrIR3eezEy0.png",
    cat: "AI",
    date: "FEB 16, 2025",
    title: "The Ultimate SaaS Template for Startups",
    link: "https://fluence.framer.website/blog/the-ultimate-saas-template-for-startups",
    grad: "linear-gradient(to top, rgba(168,85,247,.85) 0%, rgba(168,85,247,.3) 40%, transparent 70%)",
  },
];

export default function Blog() {
  return (
    <section id="blog" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", flexWrap: "wrap", gap: 20, marginBottom: 48,
        }}>
          <div>
            <span className="badge">Blog</span>
            <h2 style={{
              fontWeight: 800,
              fontSize: "clamp(26px, 3.5vw, 48px)",
              color: "#0a0a0a",
              lineHeight: 1.1,
              marginTop: 16,
            }}>
              Explore Our Blog And<br />Stay Updated
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {blogPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              viewport={{ once: true }}
              style={{
                textDecoration: "none",
              }}
            >

              {/* ✅ OUTER WHITE CONTAINER (required fix) */}
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #ebebeb",
                  borderRadius: 10,
                  overflow: "hidden",
                  transition: "all .3s ease",
                }}
                className="blog-card"
              >

                {/* Image wrapper */}
                <div
                  style={{
                    position: "relative",
                    height: 240,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="blog-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "grayscale(100%)",
                      transition: "transform .5s ease, filter .5s ease",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: post.grad,
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "20px 22px 26px"}}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 700,
                      background: "#f2f2f2",
                      color: "gradient(90deg, #f43f5e, #3b82f6, #a855f7)",
                      padding: "4px 10px",
                      borderRadius: 1000,
                    }}>
                      {post.cat}
                    </span>
                    <span style={{ fontSize: 13, color: "#999"}}>
                      {post.date}
                    </span>
                  </div>

                  <h4 style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#0a0a0a",
                    lineHeight: 1.4,
                    margin: 0,
                  }}>
                    {post.title}
                  </h4>
                </div>

              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* ✅ HOVER FIX (CSS) */}
      <style>
        {`
          .blog-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 44px rgba(0,0,0,0.10);
          }

          .blog-card:hover .blog-img {
            transform: scale(1.08);
            filter: grayscale(60%);
          }
        `}
      </style>
    </section>
  );
}