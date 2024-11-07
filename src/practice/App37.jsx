import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function App37(props) {
  const [inputValue, setInputValue] = useState();

  function handle(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <Input onKeyUp={handle} />
      <p>{inputValue}</p>
    </div>
  );
}

export default App37;
