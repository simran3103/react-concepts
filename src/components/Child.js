import React from 'react'

const Child = (props) => {
    return (
      <div>
        <button onClick={props.childHandler}>Child:{props.count}</button>
      </div>
    );
  };
  
  export default Child;