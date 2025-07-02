import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({
  onSave,
  onLoad,
  onExport,
  onPreview,
  onAutoLayout,
  menuOpen,
  setMenuOpen,
}) => {
  const commonBtn =
    "px-4 py-2 text-sm md:text-base font-medium rounded-2xl transition-all duration-300 border border-indigo-300 hover:shadow-lg hover:scale-105";

  const btnStyle =
    "bg-white text-indigo-700 hover:bg-indigo-50 backdrop-blur-md";

  const layoutBtn =
    "bg-white text-purple-700 hover:bg-purple-50 border-purple-300";

  return (
    <nav className="w-full bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo Left Aligned */}
          <div className="flex items-center gap-2 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-orange-500 to-rose-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300">
            ⚡ FlowCraft
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            <button className={`${commonBtn} ${btnStyle}`} onClick={onSave}>
              💾 Save
            </button>
            <button className={`${commonBtn} ${btnStyle}`} onClick={onLoad}>
              🔁 Load
            </button>
            <button className={`${commonBtn} ${btnStyle}`} onClick={onExport}>
              📤 Export
            </button>
            <button className={`${commonBtn} ${btnStyle}`} onClick={onPreview}>
              👀 Preview
            </button>
            <button className={`${commonBtn} ${layoutBtn}`} onClick={onAutoLayout}>
              📐 Auto Layout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-indigo-600 p-2 hover:bg-indigo-100 rounded-full transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t pt-3 animate-fade-in-down">
          <button className={`${commonBtn} ${btnStyle}`} onClick={onSave}>
            💾 Save
          </button>
          <button className={`${commonBtn} ${btnStyle}`} onClick={onLoad}>
            🔁 Load
          </button>
          <button className={`${commonBtn} ${btnStyle}`} onClick={onExport}>
            📤 Export
          </button>
          <button className={`${commonBtn} ${btnStyle}`} onClick={onPreview}>
            👀 Preview
          </button>
          <button className={`${commonBtn} ${layoutBtn}`} onClick={onAutoLayout}>
            📐 Auto Layout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
