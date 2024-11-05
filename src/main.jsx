import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App1 from "./apps/MyApp1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App1 />
  </StrictMode>,
);
