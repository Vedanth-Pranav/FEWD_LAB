import React from "react";
import Method_passing_child from "./Method_passing_child";
function Method_passing(){
    const greet = () => {
        alert("Hello From Pranav!");
    };
    return(
        <div>
            <h2>Parent Component</h2>
            <Method_passing_child greet={greet}/>
        </div>
    );
    
}

export default Method_passing;