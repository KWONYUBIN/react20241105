import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App37 from "./practice/App37.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App37 />
    </Provider>
  </StrictMode>,
);
