// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import App from "./App";                  
import Editor from "./pages/Editor";     

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* 🏠 Landing Page */}
          <Route path="/" element={<App />} />

          {/* 🛠️ Direct Editor Route (no auth now) */}
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
