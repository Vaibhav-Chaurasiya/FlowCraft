import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Cloud,
  AlertTriangle,
  Menu,
  Home,
  Save,
  Upload,
  Eye,
  LayoutTemplate,
  Download,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onSave, onLoad, onExport, onPreview, onAutoLayout }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const nodeItems = [
    {
      icon: <Zap className="text-purple-600" />, label: "Trigger Node", type: "trigger",
      color: "bg-purple-100 hover:bg-purple-200",
    },
    {
      icon: <Cloud className="text-indigo-600" />, label: "API Node", type: "api",
      color: "bg-indigo-100 hover:bg-indigo-200",
    },
    {
      icon: <AlertTriangle className="text-pink-600" />, label: "Condition Node", type: "condition",
      color: "bg-pink-100 hover:bg-pink-200",
    },
  ];

  const actionItems = [
    {
      icon: <Save size={18} />, label: "Save", onClick: onSave,
      color: "bg-white text-indigo-700 hover:bg-indigo-50 border border-indigo-300",
    },
    {
      icon: <Upload size={18} />, label: "Load", onClick: onLoad,
      color: "bg-white text-indigo-700 hover:bg-indigo-50 border border-indigo-300",
    },
    {
      icon: <Download size={18} />, label: "Export", onClick: onExport,
      color: "bg-white text-indigo-700 hover:bg-indigo-50 border border-indigo-300",
    },
    {
      icon: <Eye size={18} />, label: "Preview", onClick: onPreview,
      color: "bg-white text-indigo-700 hover:bg-indigo-50 border border-indigo-300",
    },
    {
      icon: <LayoutTemplate size={18} />, label: "Auto Layout", onClick: onAutoLayout,
      color: "bg-white text-purple-700 hover:bg-purple-50 border border-purple-300",
    },
  ];

  return (
    <div className="relative h-full">
      {/* Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 -right-3 z-10 bg-indigo-500 text-white p-1 rounded-full shadow-md hover:bg-indigo-600 transition"
      >
        {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`h-full transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        } bg-gradient-to-b from-[#f3e8ff] via-[#e0e7ff] to-[#ffe4e6] text-black flex flex-col items-center py-4 px-2 shadow-md`}
      >
        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          className={`flex items-center justify-center w-full mb-6 transition-all ${
            isOpen ? "px-4" : "px-2"
          }`}
        >
          {isOpen ? (
            <div className="flex items-center gap-2 text-lg font-bold text-indigo-700 hover:scale-105 transition">
              <Home size={20} />
              <span>Home</span>
            </div>
          ) : (
            <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow">
              <Home size={20} />
            </div>
          )}
        </button>

        {/* Node Section */}
        <div className="w-full">
          <div className="text-base font-semibold mb-3 flex items-center gap-2 px-4">
            <Menu className="text-indigo-500" />
            {isOpen && <span>Nodes</span>}
          </div>

          <div className="flex flex-col gap-3 items-center">
            {nodeItems.map((item, idx) => (
              <div
                key={idx}
                title={!isOpen ? item.label : undefined}
                draggable
                onDragStart={(e) => onDragStart(e, item.type)}
                className={`group flex items-center w-[90%] px-4 py-2 text-sm font-medium rounded-xl cursor-move transition duration-200 ease-in-out ${item.color} shadow hover:scale-105 ${!isOpen && "justify-center px-2"}`}
              >
                {item.icon}
                {isOpen && <span className="ml-3">{item.label}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 w-full border-t pt-4 px-2 flex flex-col gap-3 items-center">
          {actionItems.map((btn, idx) => (
            <button
              key={idx}
              onClick={btn.onClick}
              title={!isOpen ? btn.label : undefined}
              className={`flex items-center gap-3 w-[90%] text-sm font-medium px-4 py-2 rounded-xl transition duration-200 hover:scale-105 shadow ${btn.color} ${!isOpen && "justify-center px-2"}`}
            >
              {btn.icon}
              {isOpen && <span>{btn.label}</span>}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
