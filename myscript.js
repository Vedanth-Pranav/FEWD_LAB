let handleClick = () => alert("Button Clicked!");
let handleMouseOver = (e) => e.target.innerText = "Hovered!";
let handleMouseOut = (e) => e.target.innerText = e.target.tagName === "H1" ? "Hover Over Me" : "Click Me";

let elem = React.createElement("div", null, 
    React.createElement("h1", { 
        className: "bg-success", 
        onMouseOver: handleMouseOver, 
        onMouseOut: handleMouseOut
    }, "Hover Over Me"),

    React.createElement("button", { 
        onClick: handleClick, 
        onMouseOver: handleMouseOver, 
        onMouseOut: handleMouseOut
    }, "Click Me")
);

ReactDOM.render(elem, document.getElementById("root"));