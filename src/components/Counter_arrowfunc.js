import React from "react";

class Counter_arrowfunc extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }));
    };

    render() {
        return (
            <div className="counter2">
                <button onClick={this.handleClick}>Click Me</button>
                <div>{this.state.value}</div>
            </div>
        );
    }
}

export default Counter_arrowfunc;
