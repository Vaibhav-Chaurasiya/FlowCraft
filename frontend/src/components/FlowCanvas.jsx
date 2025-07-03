import React, {
  useCallback,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  addEdge as addEdgeReactFlow,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useDispatch, useSelector } from "react-redux";
import {
  setNodes,
  updateNode,
  addNode,
} from "../store/nodesSlice";
import {
  setEdges,
  addEdge,
} from "../store/edgesSlice";
import { setSelectedNode } from "../store/selectedNodeSlice";

const FlowCanvas = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.nodes);
  const edges = useSelector((state) => state.edges);
  const flowRef = useRef(null);

  // Expose Redux-based state and updateNode to parent
  useImperativeHandle(ref, () => ({
    getFlow: () => ({ nodes, edges }),
    updateNode: (updatedNode) => {
      dispatch(updateNode(updatedNode));
    },
  }));

  // Handle edge connection
  const onConnect = useCallback(
    (params) => dispatch(setEdges(addEdgeReactFlow(params, edges))),
    [dispatch, edges]
  );

  // Allow drop
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  // Handle drop of new nodes
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const position = {
        x: event.clientX - 250,
        y: event.clientY - 70,
      };

      const id = `${+new Date()}`;
      const labelMap = {
        trigger: "✅ Trigger Node",
        api: "🔵 API Node",
        condition: "⚠️ Condition Node",
      };

      const newNode = {
        id,
        type: "default",
        position,
        data: {
          label: labelMap[type],
          type,
        },
        style: {
          padding: 10,
          borderRadius: "0.75rem",
          backgroundColor: {
            trigger: "#bbf7d0",
            api: "#bfdbfe",
            condition: "#fef9c3",
          }[type],
        },
      };

      dispatch(addNode(newNode));
    },
    [dispatch]
  );

  // Handle node selection
  const onNodeClick = (_, node) => {
    dispatch(setSelectedNode(node));
    props.onNodeSelect?.(node);
  };

  // Handle node/edge updates from canvas (on drag, connect, etc.)
  const onNodesChange = useCallback(
    (changes) => {
      const updated = [...nodes];
      changes.forEach((change) => {
        if (change.type === "position" && change.dragging !== false) {
          const index = updated.findIndex((n) => n.id === change.id);
          if (index !== -1) {
            updated[index] = {
              ...updated[index],
              position: change.position,
            };
          }
        }
      });
      dispatch(setNodes(updated));
    },
    [dispatch, nodes]
  );

  const onEdgesChange = useCallback(
    (changes) => {
      const updated = [...edges];
      changes.forEach((change) => {
        if (change.type === "remove") {
          const index = updated.findIndex((e) => e.id === change.id);
          if (index !== -1) {
            updated.splice(index, 1);
          }
        }
      });
      dispatch(setEdges(updated));
    },
    [dispatch, edges]
  );

  return (
    <ReactFlowProvider>
      <div
        className="w-full h-full bg-gray-50"
        ref={flowRef}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={20} size={1} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
});

export default FlowCanvas;
