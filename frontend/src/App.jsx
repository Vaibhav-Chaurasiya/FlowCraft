import React, { useRef, useState } from "react";
import FlowCanvas from "./components/FlowCanvas";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import NodeConfigPanel from "./components/NodeConfigPanel";

import { useDispatch } from "react-redux";
import { setNodes } from "./store/nodesSlice";
import { setEdges } from "./store/edgesSlice";

import {
  saveFlowToBackend,
  loadFlowFromBackend,
  runFlowSimulation,
} from "./api";

import { getAutoLayoutedElements } from "./utils/autoLayout";
import { validateFlow } from "./utils/validateFlow";

const App = () => {
  const canvasRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  // 💾 Save Flow to Backend
  const handleSave = async () => {
    const data = canvasRef.current?.getFlow();
    await saveFlowToBackend(data);
    alert("✅ Flow saved to backend!");
  };

  // 🔁 Load Flow from Backend
  const handleLoad = async () => {
    const data = await loadFlowFromBackend();
    dispatch(setNodes(data.nodes));
    dispatch(setEdges(data.edges));
    alert("📥 Flow loaded from backend!");
  };

  // 📤 Export Flow as JSON
  const handleExport = () => {
    const data = canvasRef.current?.getFlow();
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

  // 👀 Preview Flow with backend simulation
  const handlePreview = async () => {
    const data = canvasRef.current?.getFlow();
    const error = validateFlow(data.nodes, data.edges);
    if (error) return alert(error);

    const result = await runFlowSimulation(data);
    alert("📋 Simulated Flow Log:\n" + result.log.join("\n"));
  };

  // 📐 Auto Layout
  const handleAutoLayout = () => {
    const data = canvasRef.current?.getFlow();
    const { nodes, edges } = getAutoLayoutedElements(data.nodes, data.edges);
    dispatch(setNodes(nodes));
    dispatch(setEdges(edges));
    alert("📐 Auto-layout applied!");
  };

  // ⚙️ Node Config Panel update
  const handleNodeUpdate = (updatedNode) => {
    canvasRef.current?.updateNode(updatedNode);
    setSelectedNode(updatedNode);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-white text-black">
      <Navbar
        onSave={handleSave}
        onLoad={handleLoad}
        onExport={handleExport}
        onPreview={handlePreview}
        onAutoLayout={handleAutoLayout}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1">
          <FlowCanvas
            ref={canvasRef}
            onNodeSelect={setSelectedNode}
          />
        </div>
        <NodeConfigPanel
          selectedNode={selectedNode}
          onUpdate={handleNodeUpdate}
        />
      </div>
    </div>
  );
};

export default App;
