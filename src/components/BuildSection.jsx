import { motion } from "framer-motion";

const cards = [
  {
    title: "Adaptive Learning",
    description:
      "AI that evolves with your data, continuously improving performance and adapting to new patterns.",
    image:
      "https://framerusercontent.com/images/qGFZyeulSY1zsGefM4aAo6C78.png",
    tag: "Startup",
    bg: "from-purple-500 via-fuchsia-500 to-pink-400",
  },
  {
    title: "Smart Automation",
    description:
      "Empowering you with AI-driven workflows designed to simplify operations and enhance productivity.",
    image:
      "https://framerusercontent.com/images/L9fccHnZ9UNo9nSWJ1myp0Q0.png",
    tag: "Fintech",
    bg: "from-purple-500 via-fuchsia-500 to-pink-400",
  },
  {
    title: "Outbound Outreach",
    description:
      "Personalize campaigns at scale, qualify leads instantly, and close deals faster with AI-driven engagement.",
    image:
      "https://framerusercontent.com/images/bRTZAw3dzeV7NnHfnXVd2Xc.png",
    tag: "AI SaaS",
    bg: "from-purple-500 via-fuchsia-500 to-pink-400",
  },
  {
    title: "Predictive Analytics",
    description:
      "Harness advanced models to forecast trends, uncover insights and stay ahead of the competition.",
    image:
      "https://framerusercontent.com/images/fWv8t6fM6yzVYNiHLxm6JJ0QQ.png",
    tag: "Analytics",
    bg: "from-purple-500 via-orange-400 to-pink-400",
  },
];

export default function BuildSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="badge">Business & Solution</span>
          <h2 style={{
            marginTop: 18, fontFamily: "'Bricolage Grotesque', sans-serif",
            fontSize: "clamp(32px, 4vw, 54px)", lineHeight: 1.05,
            fontWeight: 800, letterSpacing: "-0.03em", color: "#0a0a0a",
          }}></h2>

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
            Build, Deploy and Scale <br /> Your Entire AI Workforce
          </h2>

          <p className="text-gray-500 mt-5 max-w-[520px] mx-auto">
            Fluence AI helps you connect, manage, and optimize your AI tools
            effortlessly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              aspectRatio="4/ 3"
              className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              {/* IMAGE SECTION */}
              <div className="relative h-[320px] md:h-[320px] overflow-hidden">

                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                    {card.tag}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}