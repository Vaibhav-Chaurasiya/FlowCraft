import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="absolute top-4 -right-4 z-10 bg-indigo-600 text-white p-1 rounded-full shadow-md hover:bg-indigo-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      {/* Sidebar Content */}
      {isOpen && (
        <aside className="w-48 bg-white shadow-md p-4 border-r border-gray-200 transition-all">
          <h2 className="text-lg font-bold mb-4">📦 Nodes</h2>

          <div
            className="p-2 mb-2 rounded-xl bg-green-200 cursor-move hover:scale-105 transition"
            onDragStart={(event) => onDragStart(event, "trigger")}
            draggable
          >
            ✅ Trigger Node
          </div>

          <div
            className="p-2 mb-2 rounded-xl bg-blue-200 cursor-move hover:scale-105 transition"
            onDragStart={(event) => onDragStart(event, "api")}
            draggable
          >
            🔵 API Node
          </div>

          <div
            className="p-2 mb-2 rounded-xl bg-yellow-200 cursor-move hover:scale-105 transition"
            onDragStart={(event) => onDragStart(event, "condition")}
            draggable
          >
            ⚠️ Condition Node
          </div>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
