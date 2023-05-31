import { useEffect, useState } from "react";

export default function GithubUsersComponent() {
  const [data, setData] = useState([]);

  const onClickHandleRemoveData = () => {
    setData([]);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <section>
        <ul>
          {data.map((user) => (
            <li key={user.id}> {user.login} </li>
          ))}
        </ul>

        {data.length > 0 ? (
          <button onClick={onClickHandleRemoveData}>
            Remove Github User Data
          </button>
        ) : (
          <p>
            No Github users data to display, RELOAD the page to see the data.
          </p>
        )}
      </section>
    );
  }
}
