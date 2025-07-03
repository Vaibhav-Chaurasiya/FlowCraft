import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg rounded-2xl p-8 md:p-16 max-w-5xl w-full text-center text-gray-800"
      >
        {/* 🌟 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500"
        >
          ⚡ FlowCraft
        </motion.h1>

        {/* 📝 Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          A no-code API automation builder. Drag and drop triggers, APIs, and logic — just like Zapier!
        </motion.p>

        {/* 🚀 Launch Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          onClick={() => navigate("/editor")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3.5 rounded-full shadow-xl transition-all text-lg font-semibold mb-10"
        >
          🚀 Launch Editor
        </motion.button>

        {/* 🎥 YouTube Demo Video - Smaller with glowing animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mx-auto w-full max-w-md aspect-video rounded-xl overflow-hidden border border-purple-400 shadow-xl z-10 before:absolute before:inset-0 before:rounded-xl before:animate-glow before:z-[-1]"
        >
          <iframe
            src="https://www.youtube.com/embed/g4hyYepOZ-g"
            title="FlowCraft Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
