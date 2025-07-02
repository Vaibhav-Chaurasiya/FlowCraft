import { createSlice } from "@reduxjs/toolkit";

const selectedNodeSlice = createSlice({
  name: "selectedNode",
  initialState: null,
  reducers: {
    setSelectedNode: (_, action) => action.payload,
  },
});

export const { setSelectedNode } = selectedNodeSlice.actions;
export default selectedNodeSlice.reducer;
