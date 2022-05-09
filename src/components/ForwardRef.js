import React from "react";

const ForwardRef = React.forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
  </div>
));

export default ForwardRef;
