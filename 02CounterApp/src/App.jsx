import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);
  // let counter = 5;
  let addValue = () => {
    if (counter < 20) {
      // counter = counter + 1;
      setCounter(counter + 1);
    }
  };
  let removeValue = () => {
    if (counter > 0) {
      // counter = counter + 1;
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
