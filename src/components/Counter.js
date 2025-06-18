import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className = "counter">
      <p>Count = {count}</p> 
      <button onClick={incrementCount}>Increment</button>
      <button onMouseOver={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;
