import React, { Component } from "react";

const HOC = (OComponent, data) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: data,
      };
    }

    handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <div>
          <OComponent count={this.state.count} handleClick={this.handleClick} />
        </div>
      );
    }
  };
};

export default HOC;
