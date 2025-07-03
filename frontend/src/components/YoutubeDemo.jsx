import React from "react";

const YoutubeDemo = () => {
  return (
    <div className="w-full px-4 py-14 bg-white/60 backdrop-blur-md">
      <div className="max-w-xl mx-auto text-center">
        {/* 🟣 Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-purple-700">
          🎥 See FlowCraft in Action
        </h2>

        {/* 📝 Description */}
        <p className="text-gray-700 mb-8">
          Watch a quick walkthrough of how you can build workflows visually — it's simple, fast, and code-free.
        </p>

        {/* 📺 Small glowing video frame */}
        <div className="relative w-[320px] h-[180px] mx-auto rounded-xl overflow-hidden border-2 border-purple-400 shadow-lg animate-glow">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/g4hyYepOZ-g"
            title="FlowCraft Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YoutubeDemo;
