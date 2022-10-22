import { useState } from "react";
import "./App.css";
import Title from "./Title";

const App = () => {
  // let counter = 0;

  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <Title />
      <hr />
      <div style={{ fontSize: "2rem" }}>{counter}</div>
      <p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
};

export default App;

//component - class based and functional based
// state
// props
// hooks
// redux
