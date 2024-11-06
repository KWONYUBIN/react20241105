import React from "react";
import * as PropTypes from "prop-types";

function MyComp({
  title = "나는나비",
  content = "윤도연밴드",
  author = "윤도연",
}) {
  return (
    <div>
      <h3>comp</h3>
      <li>{title}</li>
      <li>{content}</li>
      <li>{author}</li>
    </div>
  );
}

MyComp.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

function App19(props) {
  return (
    <div>
      <MyComp title={"채식주의자"} content={"비건"} author={"한강"} />
      <MyComp title={"채식주의자"} content={"비건"} />
      <MyComp title={"채식주의자"} author={"한강"} />
      <MyComp content={"비건"} author={"한강"} />
    </div>
  );
}

export default App19;
