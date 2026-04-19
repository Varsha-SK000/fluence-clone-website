import { motion } from "framer-motion";

const cards = [
  {
    title: "Adaptive Learning",
    description:
      "AI that evolves with your data, continuously improving performance and adapting to new patterns.",
    image:
      "https://framerusercontent.com/images/qGFZyeulSY1zsGefM4aAo6C78.png",
    aspect: "2/1",
  },
  {
    title: "Smart Automation",
    description:
      "Empowering you with AI-driven workflows designed to simplify operations and enhance productivity.",
    image:
      "https://framerusercontent.com/images/bRTZAw3dzeV7NnHfnXVd2Xc.png",
    aspect: "4/3",
  },
  {
    title: "Outbound Outreach",
    description:
      "Personalize campaigns at scale, qualify leads instantly, and close deals faster with AI-driven engagement.",
    image:
      "https://framerusercontent.com/images/L9fccHnZ9UNo9nSWJ1myp0Q0.png",
    aspect: "4/3",
  },
  {
    title: "Predictive Analytics",
    description:
      "Harness advanced models to forecast trends, uncover insights and stay ahead of the competition.",
    image:
      "https://framerusercontent.com/images/fWv8t6fM6yzVYNiHLxm6JJ0QQ.png",
    aspect: "2/1",
  },
];

function Card({ card }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg"
    >
      {/* IMAGE */}
      <div className={`relative aspect-[${card.aspect}] bg-gray-50`}>
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover p-6"
        />
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
  );
}

export default function BuildSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1180px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge">Business & Solution</span>

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
            Build, Deploy and Scale <br /> Your Entire AI Workforce
          </h2>

          <p className="text-gray-500 mt-5 max-w-[520px] mx-auto">
            Fluence AI helps you connect, manage, and optimize your AI tools effortlessly.
          </p>
        </div>

        {/* 🔥 CROSS ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="grid gap-6">
            <Card card={cards[0]} /> {/* 2:1 */}
            <Card card={cards[1]} /> {/* 1:2 */}
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-6">
            <Card card={cards[2]} /> {/* 1:2 */}
            <Card card={cards[3]} /> {/* 2:1 */}
          </div>

        </div>
      </div>
    </section>
  );
}