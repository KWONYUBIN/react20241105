import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import MyApp72 from "./apps/MyApp72.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <MyApp72 />
  </Provider>,
  // </StrictMode>,
);
