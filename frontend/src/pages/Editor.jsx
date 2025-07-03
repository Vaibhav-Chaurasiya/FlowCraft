import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FlowCanvas from "../components/FlowCanvas";
import Sidebar from "../components/Sidebar";
import NodeConfigPanel from "../components/NodeConfigPanel";

import { setNodes } from "../store/nodesSlice";
import { setEdges } from "../store/edgesSlice";

import {
  saveFlowToBackend,
  loadFlowFromBackend,
  runFlowSimulation,
} from "../api";

import { getAutoLayoutedElements } from "../utils/autoLayout";
import { validateFlow } from "../utils/validateFlow";

const Editor = () => {
  const canvasRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 💾 Save Flow to Backend
  const handleSave = async () => {
    const data = canvasRef.current?.getFlow();
    if (!data) return alert("⚠️ Nothing to save.");
    await saveFlowToBackend(data);
    alert("✅ Flow saved to backend!");
  };

  // 🔁 Load Flow from Backend
  const handleLoad = async () => {
    const data = await loadFlowFromBackend();
    if (!data || !data.nodes || !data.edges) return alert("❌ No flow data found.");
    dispatch(setNodes(data.nodes));
    dispatch(setEdges(data.edges));
    alert("📥 Flow loaded from backend!");
  };

  // 📤 Export Flow as JSON file
  const handleExport = () => {
    const data = canvasRef.current?.getFlow();
    if (!data) return alert("❌ Nothing to export.");
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "flowcraft-flow.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // 👀 Simulate Flow (Preview)
  const handlePreview = async () => {
    const data = canvasRef.current?.getFlow();
    if (!data) return alert("❌ Nothing to preview.");

    const error = validateFlow(data.nodes, data.edges);
    if (error) return alert(error);

    const result = await runFlowSimulation(data);
    alert("📋 Simulation Log:\n" + result.log.join("\n"));
  };

  // 📐 Auto Layout Nodes
  const handleAutoLayout = () => {
    const data = canvasRef.current?.getFlow();
    if (!data) return alert("❌ Nothing to layout.");

    const { nodes, edges } = getAutoLayoutedElements(data.nodes, data.edges);
    dispatch(setNodes(nodes));
    dispatch(setEdges(edges));
    alert("📐 Auto-layout applied!");
  };

  // ⚙️ Node Config Update
  const handleNodeUpdate = (updatedNode) => {
    canvasRef.current?.updateNode(updatedNode);
    setSelectedNode(updatedNode);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-white text-black">
      {/* Main Editor */}
      <div className="flex flex-1 overflow-hidden">
        {/* 🧭 Sidebar with Action Buttons */}
        <Sidebar
          onSave={handleSave}
          onLoad={handleLoad}
          onExport={handleExport}
          onPreview={handlePreview}
          onAutoLayout={handleAutoLayout}
        />

        {/* 🧠 Flow Canvas */}
        <div className="flex-1">
          <FlowCanvas ref={canvasRef} onNodeSelect={setSelectedNode} />
        </div>

        {/* ⚙️ Node Config Panel */}
        <NodeConfigPanel
          selectedNode={selectedNode}
          onUpdate={handleNodeUpdate}
        />
      </div>

      {/* 🔙 Back to Home Button */}
      <div className="w-full text-right px-6 py-2 bg-white border-t">
        <button
          onClick={() => navigate("/")}
          className="text-sm font-medium text-purple-600 border border-purple-600 px-4 py-2 rounded hover:bg-purple-100 transition"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default Editor;
