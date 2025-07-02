import { createSlice } from "@reduxjs/toolkit";

const edgesSlice = createSlice({
  name: "edges",
  initialState: [],
  reducers: {
    setEdges: (_, action) => action.payload,
    addEdge: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setEdges, addEdge } = edgesSlice.actions;
export default edgesSlice.reducer;
