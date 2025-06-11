import React from "react";

function Method_passing_child(props) {
    return (
        <div>
            <h3>Child Component</h3>
            <button onClick={props.greet}>Greet</button>
        </div>
    );
}

export default Method_passing_child;
