import { useState } from "react";

export default function UseStateFormComponent() {
  const [colorName, setColorName] = useState("");
  const [colorValue, setColorValue] = useState("#000000");

  const OnChangeHandleColorName = (e) => {
    setColorName((colorName) => e.target.value);
  };

  const OnChangeHandleColorValue = (e) => {
    setColorValue((colorValue) => e.target.value);
  };

  const submitFormHandle = (e) => {
    e.preventDefault();
    console.log(colorName, colorValue);
    setColorName("");
    setColorValue("#000000");
  };
  return (
    <form onSubmit={submitFormHandle}>
      <label>
        Color name:
        <input
          value={colorName}
          type="text"
          placeholder="Type a color name..."
          onChange={OnChangeHandleColorName}
        />
      </label>
      <label>
        Pick a color:
        <input
          value={colorValue}
          type="color"
          onChange={OnChangeHandleColorValue}
        />
      </label>
      <button>Show Typed Color</button>
      <p>
        {colorName
          ? `You have typed a color name - ${colorName}`
          : "Please use the above input to type a color name"}
      </p>
      <p>
        {colorValue === "#000000"
          ? `Default color is black - ${colorValue}, Please use above color input to pick a new color`
          : `You have a picked a Hex color value: ${colorValue}`}
      </p>
    </form>
  );
}
