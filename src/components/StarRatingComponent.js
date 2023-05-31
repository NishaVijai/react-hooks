import { useState } from "react";
import StarComponent from "./StarComponent.js";

export default function StarRatingComponent({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  const createArray = (length) => {
    return [...Array(length)];
  };

  return (
    <>
      <p>Click on stars to give a rating. Current rating - {selectedStars} </p>
      {createArray(totalStars).map((n, i) => (
        <StarComponent
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}

      <p>
        {" "}
        {selectedStars} of {totalStars}{" "}
      </p>
    </>
  );
}
