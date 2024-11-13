import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyHome() {
  const [keyword, setKeyword] = useState("");

  return (
    <Box>
      <Input valur={keyword} onChange={(e) => setKeyword(e.target.value)} />;
      <Button>검색</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Box>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyHome />,
  },
]);

function App76(props) {
  return <RouterProvider router={router} />;
}

export default App76;
