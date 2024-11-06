import React from "react";

function Comp({ product, title, content, author }) {
  return (
    <div>
      <h3>comp</h3>
      <li>{product.name}</li>
      <li>{product.price}</li>
      <li>{title}</li>
      <li>{content}</li>
      <li>{author}</li>
    </div>
  );
}

function App18(props) {
  return (
    <div>
      <Comp
        product={{ name: "pizza", price: 300 }}
        title="소년이 온다"
        content="518"
        author="한강"
      />
    </div>
  );
}

// function Comp(props) {
//   return (
//     <div>
//       <h3>이름 : {props.product.name}</h3>
//       <h3>가격 : {props.product.price}</h3>
//       <h3>제목 : {props.title}</h3>
//       <h3>가격 : {props.content}</h3>
//       <h3>저자 : {props.author}</h3>
//     </div>
//   );
// }

export default App18;
