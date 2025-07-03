import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is FlowCraft?",
    answer: "FlowCraft is a no-code API automation builder that helps you design workflows visually.",
  },
  {
    question: "Do I need coding skills?",
    answer: "Nope! You can drag, drop, and configure logic without writing a single line of code.",
  },
  {
    question: "Is FlowCraft free to use?",
    answer: "Currently in beta — all core features are free for early users.",
  },
  {
    question: "Can I export my workflow?",
    answer: "Yes, you can export JSON files or run simulations for your API flows.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-purple-50 py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <FaQuestionCircle className="mx-auto text-4xl text-purple-600 mb-2" />
          <h2 className="text-3xl font-bold text-purple-700">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">Everything you need to know before building your first workflow.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-purple-200 rounded-xl bg-white p-5 shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center font-medium text-left text-purple-800 text-lg"
              >
                {faq.question}
                {openIndex === idx ? (
                  <FaChevronUp className="text-purple-500" />
                ) : (
                  <FaChevronDown className="text-purple-500" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-700 text-sm leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
