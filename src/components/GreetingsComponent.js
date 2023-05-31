import { useEffect, useState } from "react";

export default function GreetingsComponent() {
  const [name, setName] = useState("Doe");
  const [admin, setAdmin] = useState(false);

  const OnClickHandlerChangeWinner = () => {
    setName((name) => "Will");
  };

  const OnClickHandlerAdminLogin = () => {
    setAdmin((admin) => true);
  };

  useEffect(() => {
    // document.title = `Winner ${name}`;
    console.log(`Winner name ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "Admin" : "Not Admin"}`);
  }, [admin]);

  return (
    <section>
      <h2>Greetings to the winner, {name} !</h2>
      <button onClick={OnClickHandlerChangeWinner}>Change winner</button>

      <h2>
        Hello,{" "}
        {admin
          ? "You are logged in as - Admin"
          : "You are NOT logged in as Admin"}{" "}
      </h2>
      <button onClick={OnClickHandlerAdminLogin}> Login as Admin </button>
    </section>
  );
}
