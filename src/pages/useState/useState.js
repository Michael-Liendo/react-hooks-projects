import { useState } from 'react';
import './useState.css';

export default function UseState() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>useState - Counter</h1>
      <p className="counter">{counter}</p>
      <div className="buttons">
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Add
        </button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </div>
  );
}
