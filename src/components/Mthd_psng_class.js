import React, {Component} from "react";
import Mthd_psng_class_child from "./Mthd_psng_class_child";
class Mthd_psng_class extends Component{
    greet = () => {
        alert("This is using class components");
    };

    render(){
        return(
            <div>
                <h2>Parent Component</h2>
                <Mthd_psng_class_child greet = {this.greet}/>
            </div>
        )
    }
}

export default Mthd_psng_class;