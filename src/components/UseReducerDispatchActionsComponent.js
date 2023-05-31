import { useReducer } from "react";
const initialState = {
  message: "Hello"
};

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I JUST SAID - ${initialState.message}`
      };
    case "whisper":
      return {
        message: `Excuse me, I said - ${initialState.message}`
      };
    default:
      return {
        message: `Default message - ${initialState.message}`
      };
  }
}

export default function UseReducerDispatchActionsComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section>
      <h2>Dispatch Component</h2>
      <p> Message: {state.message} </p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
      <button onClick={() => dispatch({ type: "default" })}>Default</button>
    </section>
  );
}
