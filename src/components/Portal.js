import React, { Component } from "react";

import ReactDOM from "react-dom";

class Portal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <button onClick={this.props.childHandler}>IncrementPortal</button>
      </div>,
      document.getElementById("root-portal")
    );
  }
}

export default Portal;
