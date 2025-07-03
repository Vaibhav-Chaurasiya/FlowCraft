// src/App.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ"; 
import Footer from "./components/Footer";

const App = () => {
  const navigate = useNavigate();
  const messages = [
    "⚡ FlowCraft: No-Code API Builder",
    "🚀 Build Workflows Like Zapier",
    "🧩 Drag, Drop, Automate",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col">
      {/* 🔝 Navbar */}
      <Navbar />

      {/* ✨ Hero Section */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-700 mb-4 min-h-[60px] transition-all duration-500 ease-in-out">
          {messages[index]}
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl animate-fade-in-up">
          Visually build, simulate, and export API workflows with drag & drop logic.
        </p>

        <button
          onClick={() => navigate("/editor")}
          className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
        >
          🚀 Launch Editor
        </button>

        {/* 🎥 Embedded YouTube Demo */}
        <div className="mt-12 w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-xl border border-white/50">
          <iframe
            src="https://www.youtube.com/embed/g4hyYepOZ-g"
            title="FlowCraft Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* 🌟 Additional Sections */}
      <Features />
      <Testimonials />
      <FAQ /> 
      <Footer />
    </div>
  );
};

export default App;
