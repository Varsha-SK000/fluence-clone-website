import { motion } from "framer-motion";

const blogPosts = [
  {
    img: "https://framerusercontent.com/images/tyw3zK8EGKr3laKc5scgwDmBag.png",
    cat: "STARTUP",
    date: "OCT 10, 2024",
    title: "Why Data Security is Vital for Every SaaS Platform",
    link: "https://fluence.framer.website/blog/why-data-security-is-vital-for-every-saas-platform",
    grad:
      "linear-gradient(to top, rgba(244,63,94,.85) 0%, rgba(244,63,94,.3) 40%, transparent 70%)",
  },
  {
    img: "https://framerusercontent.com/images/ZR1Iqs0oD39u4eGjMDsbMZWhMY.png",
    cat: "SAAS",
    date: "MAR 13, 2025",
    title: "Efficient Strategies for Scaling Your SaaS Business",
    link: "https://fluence.framer.website/blog/integrating-payment-gateways-for-seamless-transactions",
    grad:
      "linear-gradient(to top, rgba(59,130,246,.85) 0%, rgba(59,130,246,.3) 40%, transparent 70%)",
  },
  {
    img: "https://framerusercontent.com/images/ARTVA54SjmGxUnXYrIR3eezEy0.png",
    cat: "AI",
    date: "FEB 16, 2025",
    title: "The Ultimate SaaS Template for Startups",
    link: "https://fluence.framer.website/blog/the-ultimate-saas-template-for-startups",
    grad:
      "linear-gradient(to top, rgba(168,85,247,.85) 0%, rgba(168,85,247,.3) 40%, transparent 70%)",
  },
];

export default function Blog() {
  return (
    <section id="blog" style={{ padding: "100px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* HEADER */}
        <div className="blog-header">
          <div className="blog-header-inner">
            <span className="badge">Blog</span>

            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(26px, 3.5vw, 48px)",
                color: "#0a0a0a",
                lineHeight: 1.1,
                marginTop: 16,
              }}
            >
              Explore Our Blog And<br />
              Stay Updated
            </h2>
          </div>

          {/* ✅ EXPLORE ALL BUTTON (ADDED) */}
          <a href="./blog" className="explore-btn">
            <span className="text1">Explore All</span>
            <span className="text2">Explore All</span>
          </a>
        </div>

        {/* GRID */}
        <div className="blog-grid">
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
              style={{ textDecoration: "none" }}
            >
              <div className="blog-card">

                <div className="blog-img-wrapper">
                  <img src={post.img} className="blog-img" />
                  <div className="blog-overlay" style={{ background: post.grad }} />
                </div>

                <div style={{ padding: "20px 22px 26px" }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                    <span className="blog-cat">{post.cat}</span>
                    <span style={{ fontSize: 13, color: "#999" }}>
                      {post.date}
                    </span>
                  </div>

                  <h4 className="blog-title">{post.title}</h4>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>

      {/* STYLES */}
      <style>
        {`
          /* HEADER */
          .blog-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 48px;
            gap: 20px;
          }

          @media (max-width: 640px) {
            .blog-header {
              flex-direction: column;
              margin-bottom: 20px;
            }
          }

          /* GRID */
          .blog-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }

          @media (max-width: 1024px) {
            .blog-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .blog-grid {
              grid-template-columns: 1fr;
            }
          }

          /* CARD */
          .blog-card {
            background: #fff;
            border: 1px solid #ebebeb;
            border-radius: 10px;
            overflow: hidden;
            transition: 0.3s;
          }

          .blog-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 44px rgba(0,0,0,0.10);
          }

          /* IMAGE */
          .blog-img-wrapper {
            position: relative;
            height: 240px;
            overflow: hidden;
          }

          .blog-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(100%);
            transition: 0.5s;
          }

          .blog-card:hover .blog-img {
            transform: scale(1.08);
            filter: grayscale(60%);
          }

          .blog-overlay {
            position: absolute;
            inset: 0;
          }

          /* CATEGORY */
          .blog-cat {
            font-size: 10px;
            font-weight: 700;
            background: #f2f2f2;
            color: #333;
            padding: 4px 10px;
            border-radius: 1000px;
          }

          /* TITLE */
          .blog-title {
            font-size: 17px;
            font-weight: 700;
            color: #0a0a0a;
            line-height: 1.4;
            margin: 0;
          }

          /* EXPLORE BUTTON (FRAMER STYLE) */
          .explore-btn {
            position: relative;
            width: 140px;
            height: 44px;
            border: 1px solid #ebebeb;
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            text-decoration: none;
          }

          .explore-btn span {
            position: absolute;
            transition: 0.3s;
            font-weight: 500;
            color: #1b0c25;
          }

          .explore-btn .text1 {
            opacity: 1;
            transform: translateY(0);
          }

          .explore-btn .text2 {
            opacity: 0;
            transform: translateY(20px);
          }

          .explore-btn:hover .text1 {
            opacity: 0;
            transform: translateY(-20px);
          }

          .explore-btn:hover .text2 {
            opacity: 1;
            transform: translateY(0);
          }

          @media (max-width: 640px) {
            .explore-btn {
              width: 100%;
              margin-top: 10px;
            }
          }
        `}
      </style>
    </section>
  );
}