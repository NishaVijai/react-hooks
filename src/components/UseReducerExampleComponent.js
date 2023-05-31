import { useReducer } from "react";

export default function UseReducerExampleComponent() {
  const [count, setCount] = useReducer(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  );
  return (
    <section>
      <h2>Use Reducer Example</h2>
      <p> Current count value - {count} </p>
      <button onClick={() => setCount(1)}>
        Increase current count value by 1
      </button>
    </section>
  );
}
