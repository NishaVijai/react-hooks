import { useRef } from "react";

export default function UseRefFormComponent() {
  const colorName = useRef("");
  const colorValue = useRef("");
  const submitForm = (e) => {
    e.preventDefault();
    const colorNameCurrentValue = colorName.current.value;
    const colorValueCurrentValue = colorValue.current.value;
    console.log(
      `colorNameCurrentValue - ${colorNameCurrentValue} & colorValueCurrentValue - ${colorValueCurrentValue}`
    );
    colorName.current.value = "";
    colorValue.current.value = "";
  };
  return (
    <form onSubmit={submitForm}>
      <label>
        <input ref={colorName} type="text" />
      </label>
      <label>
        <input ref={colorValue} type="color" />
      </label>
      <button>Log Color Value</button>
    </form>
  );
}
