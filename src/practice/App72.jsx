import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx"; // /

// /
// /add
// /view
const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
    children: [
      { index: true, element: <div>HOME</div> },
      { path: "add", element: <div>추가추가추가</div> },
      { path: "view", element: <div>뷰뷰뷰뷰뷰</div> },
    ],
  },
]);

function WholePage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Button onClick={() => navigate("/")}>HOME</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/add")}>ADD</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/view")}>VIEW</Button>
          </Box>
        </Flex>
      </Box>
      <hr />
      <Outlet />
    </Box>
  );
}

function App72(props) {
  return <RouterProvider router={router} />;
}

export default App72;
