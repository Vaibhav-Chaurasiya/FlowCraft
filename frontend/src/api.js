import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

// 💾 Save Flow to Backend
export const saveFlowToBackend = async (flowData) => {
  try {
    const res = await axios.post(`${BASE_URL}/flow`, flowData);
    return res.data;
  } catch (err) {
    console.error("❌ Save failed", err);
  }
};

// 📥 Load Flow from Backend
export const loadFlowFromBackend = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/flow`);
    return res.data;
  } catch (err) {
    console.error("❌ Load failed", err);
    return { nodes: [], edges: [] };
  }
};

// ⚡ Simulate Flow Execution
export const runFlowSimulation = async (flowData) => {
  try {
    const res = await axios.post(`${BASE_URL}/run-flow`, flowData);
    return res.data; // { log: [] }
  } catch (err) {
    console.error("❌ Flow simulation failed", err);
    return { log: ["❌ Error occurred during simulation."] };
  }
};
