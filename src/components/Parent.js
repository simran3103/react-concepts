import React, { useState } from "react";
// import Child from "./Child";
import Portal from "./Portal";

const Parent = (props) => {
  const [count, setCount] = useState(0);

  const childHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <Portal childHandler={childHandler} />
    </div>
  );
};

export default Parent;
