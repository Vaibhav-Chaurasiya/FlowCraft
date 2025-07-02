export const validateFlow = (nodes, edges) => {
  if (!nodes.length) return "⚠️ No nodes in the flow.";

  const connectedNodeIds = new Set();

  edges.forEach((edge) => {
    connectedNodeIds.add(edge.source);
    connectedNodeIds.add(edge.target);
  });

  const disconnectedNodes = nodes.filter((n) => !connectedNodeIds.has(n.id));

  if (disconnectedNodes.length) {
    return `❌ Disconnected node(s): ${disconnectedNodes
      .map((n) => n.data.label || n.id)
      .join(", ")}`;
  }

  return null; // Valid
};
