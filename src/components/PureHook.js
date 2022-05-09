import React, { useEffect, useState } from "react";

const PureHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hook renders");
  });

  const Increment = () => {
    setCount(0);
  };
  console.log("re-rendering");
  return (
    <div>
      <div>{count}</div>
      <button onClick={Increment}>Purehook</button>
    </div>
  );
};

export default React.memo(PureHook);
