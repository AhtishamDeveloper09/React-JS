import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Ahtisham",
    age: "23",
  };

  return (
    <>
      <h1 className="bg-green-400 text-white p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card myName="Ahtisham" btnText="Click Me"/>
      <Card myName="Ahmed" btnText="Visit Me"/>
    </>
  );
}

export default App;
