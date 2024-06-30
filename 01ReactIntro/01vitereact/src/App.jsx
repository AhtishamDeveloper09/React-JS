import Hello from "./Hello";

function App() {
  let message = "You are learning React!";
  return (
    <>
      <Hello />
      <h2>Hello World with Vite</h2>
      <p>Welcome to React</p>
      <p>{message}</p>
    </>
  );
}

export default App;
