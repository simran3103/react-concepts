import React, { Component } from "react";
import ForwardRef from "./ForwardRef";

class Ref extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    handleButton = () => {
        this.myRef.current.focus();
        this.myRef.current.placeholder = "Write ur name";
    };
    // this.myRef.current.placeholder = "Name";
    render() {
        return (
            <div>
                Refs: <ForwardRef ref={this.myRef} />
                <button onClick={this.handleButton}>focusinput</button>
            </div>);
    }
}
export default Ref;