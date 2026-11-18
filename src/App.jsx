import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("імітація роботи");
  }, [count]);

  const handleMinuse = () => {
    setCount((prev) => prev - 1);
  };

  const handlePluse = () => {
    setCount((prev) => prev + 1);
  };

  const handleChange = (evt) => {
    setName(evt.target.value);
  };

  return (
    <>
      <p>{count}</p>
      <div>
        <button onClick={handlePluse} type="button">
          +
        </button>
        <button onClick={handleMinuse} type="button">
          -
        </button>
      </div>
      <input
        value={name}
        onChange={handleChange}
        type="text"
        placeholder="Your name"
      />
      <p>Hello: {name}</p>
    </>
  );
}

export default App;
