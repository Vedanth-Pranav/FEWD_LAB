import React, {useState} from "react";

function ChangeText(){
    const [text, setText] = useState('Text before change.');
    const change = () => {
        setText('This is the changed text.');
    }
    return (
        <div>
            <p>{text}</p>
            <button onClick={change}>Change Button</button>
        </div>
    );
}
export default ChangeText;