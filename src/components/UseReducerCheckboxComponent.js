import { useReducer } from "react";

export default function UseReducerCheckboxComponent() {
  const [checkboxCheckedState, toggle] = useReducer(
    (checkboxCheckedState) => !checkboxCheckedState,
    false
  );
  return (
    <section>
      <label>
        <input type="checkbox" value="checkboxCheckedState" onChange={toggle} />
        click here to check this checkbox
      </label>
      <p>
        {" "}
        checkbox status: {checkboxCheckedState ? "Checked" : "Not checked"}{" "}
      </p>
    </section>
  );
}
