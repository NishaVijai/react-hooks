import { useInput } from "../useInput";

export default function CustomHookUseInputComponent() {
  const [colorName, resetColorName] = useInput("");
  const [colorValue, resetColorValue] = useInput("#000000");

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    console.log(colorName.value, colorValue.value);
    resetColorName();
    resetColorValue();
  };

  return (
    <form onSubmit={onSubmitFormHandler}>
      <label>
        Color name:
        <input {...colorName} type="text" placeholder="Type a color name..." />
      </label>
      <label>
        Pick a color:
        <input {...colorValue} type="color" />
      </label>
      <button>Display Color</button>
      <p>
        {" "}
        {colorName.value
          ? `Typed color - ${colorName.value}`
          : "Please type a color"}{" "}
      </p>
      <p>
        {" "}
        {colorValue.value !== "#000000"
          ? `Selected color - ${colorValue.value}`
          : `Default color value - ${colorValue.value}`}{" "}
      </p>
    </form>
  );
}
