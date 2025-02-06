import React from "react";
import { useState } from "react";



const App = () => {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increment} >+</button>
      <button onClick={decrement} >-</button>
    </section>
  );
};

export default App;
