import "./Counter.css";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  let incrementCount = (e) => {
    setCount( count + 1);
  }
  let decrementCount = (e) => {
    setCount( count - 1);
  }  

  return (
    <>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </section>
    </>
  );
}

export default Counter;
