import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount(count - 1);
  }
  function increamentCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <button>{count}</button>
      <button onClick={increamentCount}>+</button>
    </div>
  );
}

export default Counter;
