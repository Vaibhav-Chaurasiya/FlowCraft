import { createSlice } from "@reduxjs/toolkit";

const nodesSlice = createSlice({
  name: "nodes",
  initialState: [],
  reducers: {
    setNodes: (_, action) => action.payload,
    updateNode: (state, action) =>
      state.map((node) =>
        node.id === action.payload.id ? action.payload : node
      ),
    addNode: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setNodes, updateNode, addNode } = nodesSlice.actions;
export default nodesSlice.reducer;
