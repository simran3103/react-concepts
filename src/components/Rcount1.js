import React, { Component } from "react";

class Rcount1 extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={this.props.handleClick}>Rcount1</button>
      </div>
    );
  }
}
export default Rcount1;
