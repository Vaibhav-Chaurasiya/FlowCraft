import { configureStore } from "@reduxjs/toolkit";
import nodesReducer from "./nodesSlice";
import edgesReducer from "./edgesSlice";
import selectedNodeReducer from "./selectedNodeSlice";

export const store = configureStore({
  reducer: {
    nodes: nodesReducer,
    edges: edgesReducer,
    selectedNode: selectedNodeReducer,
  },
});
