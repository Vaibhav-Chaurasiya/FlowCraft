import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const NodeConfigPanel = ({ selectedNode, onUpdate }) => {
  const [formData, setFormData] = useState({});
  const [showMobilePanel, setShowMobilePanel] = useState(false);

  useEffect(() => {
    if (selectedNode) {
      setFormData(selectedNode.data || {});
      setShowMobilePanel(true);
    } else {
      setFormData({});
      setShowMobilePanel(false);
    }
  }, [selectedNode]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setShowMobilePanel(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    const updatedNode = {
      ...selectedNode,
      data: updatedData,
    };
    onUpdate(updatedNode);
  };

  const nodeType = selectedNode?.data?.type;

  const renderForm = () => (
    <>
      <h2 className="text-lg font-semibold mb-4 text-indigo-600">
        🛠 Configure Node
      </h2>

      {nodeType === "trigger" && (
        <>
          <label className="block mb-2 font-medium">Event Name</label>
          <input
            name="event"
            type="text"
            className="w-full border px-3 py-1 rounded"
            value={formData.event || ""}
            onChange={handleChange}
            placeholder="e.g. onFormSubmit"
          />
        </>
      )}

      {nodeType === "api" && (
        <>
          <label className="block mt-2 mb-1 font-medium">URL</label>
          <input
            name="url"
            type="text"
            className="w-full border px-3 py-1 rounded"
            value={formData.url || ""}
            onChange={handleChange}
            placeholder="https://api.example.com"
          />

          <label className="block mt-2 mb-1 font-medium">Method</label>
          <select
            name="method"
            className="w-full border px-3 py-1 rounded"
            value={formData.method || "GET"}
            onChange={handleChange}
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>

          <label className="block mt-2 mb-1 font-medium">Headers (JSON)</label>
          <textarea
            name="headers"
            className="w-full border px-3 py-1 rounded font-mono text-sm"
            rows={2}
            value={formData.headers || ""}
            onChange={handleChange}
            placeholder='{"Authorization": "Bearer token"}'
          />

          <label className="block mt-2 mb-1 font-medium">Body (JSON)</label>
          <textarea
            name="body"
            className="w-full border px-3 py-1 rounded font-mono text-sm"
            rows={3}
            value={formData.body || ""}
            onChange={handleChange}
            placeholder='{"key": "value"}'
          />
        </>
      )}

      {nodeType === "condition" && (
        <>
          <label className="block mb-2 font-medium">Expression</label>
          <input
            name="condition"
            type="text"
            className="w-full border px-3 py-1 rounded"
            value={formData.condition || ""}
            onChange={handleChange}
            placeholder="response.status === 200"
          />
        </>
      )}
    </>
  );

  return (
    <>
      {/* 🖥 Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-white border-l px-4 py-4 overflow-auto">
        {selectedNode ? renderForm() : (
          <p className="text-gray-500 italic">No node selected</p>
        )}
      </div>

      {/* 📱 Mobile Bottom Sheet */}
      {showMobilePanel && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-white border-t shadow-xl p-4 md:hidden max-h-[80vh] overflow-y-auto rounded-t-2xl transition-transform duration-300">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-semibold text-indigo-600">
              Configure Node
            </h2>
            <button
              onClick={() => setShowMobilePanel(false)}
              className="text-gray-500 hover:text-red-500"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          {renderForm()}
        </div>
      )}
    </>
  );
};

export default NodeConfigPanel;
