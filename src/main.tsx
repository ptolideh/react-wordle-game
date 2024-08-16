import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
// import "modern-normalize/modern-normalize.css";
import "./styles.css";

import App from "./components/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
