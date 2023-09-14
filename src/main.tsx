import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import AllContexts from "./context/AllContexts.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AllContexts>
      <App />
    </AllContexts>
  </React.StrictMode>
);
