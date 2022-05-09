import React from "react";

class Pure extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  Increment = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    const { count } = this.state;
    console.log("component renders");
    return (
      <div>
        <div>{count}</div>
        <button onClick={this.Increment}>Pure component</button>
      </div>
    );
  }
}

export default Pure;
