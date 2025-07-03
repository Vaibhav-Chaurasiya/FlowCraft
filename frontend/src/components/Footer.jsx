import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-black text-white py-6 text-center"
    >
      <p className="text-sm">
        © {new Date().getFullYear()} FlowCraft. Built for makers.
      </p>
    </motion.footer>
  );
};

export default Footer;
