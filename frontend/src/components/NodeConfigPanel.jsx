import React, { useState, useEffect } from "react";

const NodeConfigPanel = ({ selectedNode, onUpdate }) => {
  const [formData, setFormData] = useState({});

  // Sync formData with selected node
  useEffect(() => {
    if (selectedNode) {
      setFormData(selectedNode.data || {});
    } else {
      setFormData({});
    }
  }, [selectedNode]);

  // Handle input change
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

  if (!selectedNode) {
    return (
      <div className="w-64 bg-white border-l px-4 py-4">
        <p className="text-gray-500 italic">No node selected</p>
      </div>
    );
  }

  const nodeType = selectedNode.data?.type;

  return (
    <div className="w-64 bg-white border-l px-4 py-4 overflow-auto">
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
          </select>

          <label className="block mt-2 mb-1 font-medium">Headers (JSON)</label>
          <textarea
            name="headers"
            className="w-full border px-3 py-1 rounded"
            rows={2}
            value={formData.headers || ""}
            onChange={handleChange}
          />

          <label className="block mt-2 mb-1 font-medium">Body (JSON)</label>
          <textarea
            name="body"
            className="w-full border px-3 py-1 rounded"
            rows={2}
            value={formData.body || ""}
            onChange={handleChange}
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
            placeholder='e.g. response.status === 200'
          />
        </>
      )}
    </div>
  );
};

export default NodeConfigPanel;
