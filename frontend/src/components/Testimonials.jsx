import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rishabh Mishra",
    role: "CTO at CodeEternity",
    quote: "FlowCraft made API automation super simple and intuitive!",
  },
  {
    name: "Vaibhav Chaurasiya",
    role: "Developer & Creator",
    quote: "I built complex workflows visually without writing a single line of code.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 text-gray-900 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-14 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600"
      >
        💬 What Users Say
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-xl border border-purple-200 hover:shadow-[0_0_25px_rgba(255,0,255,0.4)] transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Quote */}
            <p className="italic text-gray-700 text-base mb-6">
              "{t.quote}"
            </p>

            {/* Name and Role */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-purple-700">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
