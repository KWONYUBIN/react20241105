import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import App76 from "./practice/App76.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <App76 />
  </Provider>,
  // </StrictMode>,
);
