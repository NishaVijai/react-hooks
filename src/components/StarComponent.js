import { FaStar } from "react-icons/fa";

export default function StarComponent({ selected = false, onSelect }) {
  return (
    <>
      <FaStar color={selected ? "orange" : "gray"} onClick={onSelect} />
    </>
  );
}
