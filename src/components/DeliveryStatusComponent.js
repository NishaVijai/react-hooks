import { useState } from "react";

export default function DeliveryStatusComponent() {
  const [status, setStatus] = useState("Not delivered");

  return (
    <section>
      <h2>Initial Delivery Status: {status} </h2>
      <button onClick={() => setStatus("Delivered")}>
        Change Delivery status
      </button>
    </section>
  );
}
