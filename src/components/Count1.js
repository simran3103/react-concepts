import React from "react";
import HOC from "./HOC";

const Count1 = (props) => {
  return (
    <div>
      {props.count}
      <br />
      <button onClick={props.handleClick}>Count1</button>
    </div>
  );
};

const EnhancedCount1 = HOC(Count1, 20);
export default EnhancedCount1;
