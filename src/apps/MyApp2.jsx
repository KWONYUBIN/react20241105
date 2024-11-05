//react component
function MyComponent() {
  // root 태그는 하나만 존재
  // 여러 줄로 작성시 () 꼭 사용
  // return <p>hello</p>;
  return (
    <div>
      <p>hello</p>
    </div>
  );
}

function MyApp2() {
  // react component

  // 만든 component
  //  : 함수로 만들어짐
  //    , component 명은 !꼭! 대문자로 시작

  // built-in component
  //  : 이미 존재하는 html 요소들

  // component 사용시 종료태그 !꼭! 작성
  // (empty tag 는 시작 태그에 /(슬레시) 붙이기)
  return (
    <div>
      hello
      <br />
      <MyComponent />
      <MyComponent />
      <MyComponent></MyComponent>
    </div>
  );
}

export default MyApp2;
