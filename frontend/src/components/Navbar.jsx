import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Key Features", to: "/" },
    {
      label: "How It Works",
      external: true,
      href: "https://www.youtube.com/watch?v=g4hyYepOZ-g",
    },
    { label: "FAQ", to: "/faq" },
    { label: "Launch Builder", to: "/editor" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 shadow-xl border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-gray-900">
        {/* Logo with black shadow */}
        <Link
          to="/"
          className="flex items-center space-x-2 font-extrabold text-3xl"
        >
          <span className="text-3xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]">
            ⚡
          </span>
          <span className="bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500 bg-clip-text text-transparent drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]">
            FlowCraft
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-bold">
          {navLinks.map((link, i) =>
            link.external ? (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-purple-700 transition-all"
              >
                {link.label}
              </motion.a>
            ) : (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.to}
                  className="hover:text-purple-700 transition-all"
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          )}
        </nav>

        {/* GitHub CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1 border border-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-white hover:text-purple-700 transition"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-900 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-6 pt-2 space-y-4 text-sm font-bold text-gray-900 bg-white/60 backdrop-blur-md"
        >
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-purple-700"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-purple-700"
              >
                {link.label}
              </Link>
            )
          )}
          <hr className="border-gray-300" />
          <a
            href="https://github.com/"
            className="flex items-center space-x-1 border border-gray-400 px-3 py-1 rounded-full w-max hover:bg-white hover:text-purple-700 transition"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
