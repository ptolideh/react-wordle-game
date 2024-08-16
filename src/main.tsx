import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./reset.css";
import "modern-normalize/modern-normalize.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
