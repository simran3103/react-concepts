import React, { Component } from "react";

class RenderProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 10,
        });
    };

    render() {
        // this is a technique for sharing the code between react components
        // using a prop whose value is a function
        return <div>{this.props.render(this.state.count, this.handleClick)}</div>;
    }
}

export default RenderProps;
