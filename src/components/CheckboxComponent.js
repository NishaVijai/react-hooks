import { useState } from "react";

export default function CheckboxComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <section>
      <h2>Checkbox state</h2>
      <label>
        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked((checked) => !checked)}
        />
        click to check checkbox
        <p>
          {" "}
          {checked
            ? "Checkbox state - Checked"
            : "Checkbox state -  Not checked"}{" "}
        </p>
      </label>
    </section>
  );
}
