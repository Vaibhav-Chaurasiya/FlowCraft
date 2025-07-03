import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    title: "🧱 Drag & Drop",
    desc: "Visually build flows with nodes, triggers, and connectors — no code needed.",
    bg: "from-purple-200 to-violet-300",
  },
  {
    title: "🔌 API Integration",
    desc: "Easily connect REST APIs, configure headers, and test calls within the editor.",
    bg: "from-yellow-200 to-orange-300",
  },
  {
    title: "🧠 Conditional Logic",
    desc: "Automate logic using conditions, switches, and loops for smart workflows.",
    bg: "from-pink-200 to-red-300",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white text-gray-800 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-gradient-to-r from-blue-500 via-yellow-500 to-red-500"
      >
        🚀 Key Features
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            className={`p-6 rounded-2xl shadow-md bg-gradient-to-br ${feat.bg} transition-all hover:ring-4 hover:ring-violet-500/50 hover:shadow-2xl hover:scale-[1.02]`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{feat.title}</h3>
            <p className="text-sm text-gray-700 mb-5">{feat.desc}</p>
            <Link
              to="/templates"
              className="inline-block bg-violet-600 text-white px-4 py-2 rounded-full text-sm hover:bg-violet-700 transition"
            >
              Try Template
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
