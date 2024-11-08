import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp45(props) {
  const [number, setNumber] = useState(0);

  console.log("컴포넌트 함수 호출됨");

  const handleClick = () => {
    // 리액트는 상태가 변경될 때마다 그리긴 하지만 항상 그러는 건 아님
    // 아래의 경우엔 최종 상태만 변경
    // react 는 상탸를 비교해서 적절한 순간에 re-render 함
    setNumber(number + 1);
    setNumber(number + 2);
    setNumber(number + 3);
  };
  return (
    <div>
      <Button onClick={handleClick}>증가 {number}</Button>
    </div>
  );
}

export default MyApp45;
