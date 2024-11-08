import React from "react";
import { Box, HStack } from "@chakra-ui/react";

function App34(props) {
  return (
    <div>
      <HStack h={20}>
        <Box
          onClick={(e) => console.log(e.target.innerText)}
          h={20}
          bg={"orange"}
        >
          Lorem ipsum dolor.
        </Box>
        <Box
          onClick={(e) => console.log(e.target.innerText)}
          h={20}
          bg={"blue"}
        >
          Lorem ipsum dolor.
        </Box>
        <Box
          onClick={(e) => console.log(e.target.innerText)}
          h={20}
          bg={"teal"}
        >
          Lorem ipsum dolor.
        </Box>
      </HStack>
    </div>
  );
}

export default App34;