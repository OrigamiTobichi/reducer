import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Component from "./Component.js";
import ToDoApp from "./Todo/index.js";
function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="container" style={{ padding: 30 }}>
      <ToDoApp />
      <br />
      <br />
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Component />}
    </div>
  );
}

export default App;
