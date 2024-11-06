import React from "react";

function MyApp22(props) {
  return (
    <div>
      <Comp score={99} name={"faker"} />
      <hr />
      {/* content 는  children prop 으로 전달 */}
      <Comp>some content</Comp>

      <hr />
      <Comp2 city={"런던"} mail={"야후"}>
        hello
      </Comp2>
      <hr />
      <Comp3>
        <h2>Lorem ipsum dolor.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          atque deleniti, dicta distinctio eum eveniet in, iure magnam maiores
          nihil numquam perferendis quia ut veritatis voluptatibus. Assumenda
          est quis reiciendis?
        </p>
      </Comp3>
    </div>
  );
}

function Comp(props) {
  return (
    <div>
      <li>{props.score}</li>
      <li>{props.name}</li>
      <li>{props.children}</li>
    </div>
  );
}

function Comp2({ city, mail, children }) {
  return (
    <div>
      <li>{city}</li>
      <li>{mail}</li>
      <li>{children}</li>
    </div>
  );
}

function Comp3(props) {
  return (
    <div>
      <h2>comp3</h2>
      {props.children}
    </div>
  );
}

export default MyApp22;
