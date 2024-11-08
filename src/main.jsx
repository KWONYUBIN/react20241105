import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App40 from "./practice/App40.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App40 />
    </Provider>
  </StrictMode>,
);
