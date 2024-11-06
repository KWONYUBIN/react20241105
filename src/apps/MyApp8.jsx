import React from "react";

function Comp1() {
  const a = {
    name: "son",
    married: true,
  };
  const b = {
    name: "rose",
    married: false,
  };
  const c = {
    name: "bruno",
    married: true,
  };
  // true 일때 출력
  return (
    <div>
      {/* && (and) true 이면 출력 */}
      <li>{a.married && a.name}</li>
      <li>{b.married && b.name}</li>
      <li>{c.married && c.name}</li>
      <hr />
      {/* || (or) true 가 아니면 출력 */}
      <li>{a.married || a.name}</li>
      <li>{b.married || b.name}</li>
      <li>{c.married || c.name}</li>
      <hr />
      <li>{a.married && <li>{a.name}</li>}</li>
      <li>{b.married && <li>{b.name}</li>}</li>
      <li>{c.married && <li>{c.name}</li>}</li>
      <hr />
      <li>{a.married || <li>{a.name}</li>}</li>
      <li>{b.married || <li>{b.name}</li>}</li>
      <li>{c.married || <li>{c.name}</li>}</li>
    </div>
  );
}

function MyApp8(props) {
  const a = "hi";
  const b = 3;
  const c = 5;
  const d = "son";

  // true 일때 뒤에거 출력하려면 &&(and)
  // false 일때 뒤에거 출력하려면 ||(or)
  // 또는 삼항연산자 사용
  return (
    <div>
      <Comp1 />
      <h1>{a}</h1>
      <h1>{b + c}</h1>
      <h1>
        {b} + {c} = {b + c}
      </h1>
      <h1>{d}</h1>
      <h1>{true && d}</h1>
      <h1>{false || d}</h1>
      <h1>{true ? d : ""}</h1>
      <h1>{false ? "" : d}</h1>
    </div>
  );
}

export default MyApp8;
