import React, { Component } from "react";

class Rcount2 extends Component {
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={this.props.handleClick}>Rcount2</button>
      </div>
    );
  }
}
export default Rcount2;
