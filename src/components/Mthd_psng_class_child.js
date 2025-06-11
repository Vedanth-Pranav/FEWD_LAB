import React, { Component } from "react";

class Mthd_psng_class_child extends Component {
    render() {
        return (
            <div>
                <h3>Child Component</h3>
                <button onClick={this.props.greet}>Greet</button>
            </div>
        );
    }
}

export default Mthd_psng_class_child;
