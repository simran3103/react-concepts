import React, { useContext } from "react";
import { Context1, Context2 } from "../App";

const Context = () => {
  const c1 = useContext(Context1);
  const c2 = useContext(Context2);
  return (
    <div>
      Context: {c1},{c2}
    </div>
  );
};

export default Context;
