import React from "react";
import HOC from "./HOC";

const Count2 = (props) => {
  return (
    <div>
      {props.count}
      <br />
      <button onClick={props.handleClick}>Count2</button>
    </div>
  );
};

const EnhancedCount2 = HOC(Count2, 10);
export default EnhancedCount2;
