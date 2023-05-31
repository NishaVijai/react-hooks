import StarRatingComponent from "./components/StarRatingComponent.js";
import DeliveryStatusComponent from "./components/DeliveryStatusComponent.js";
import "./styles.css";
import CheckboxComponent from "./components/CheckboxComponent.js";
import GreetingsComponent from "./components/GreetingsComponent.js";
import GithubUsersComponent from "./components/GithubUsersComponent.js";
import UseReducerExampleComponent from "./components/UseReducerExampleComponent.js";
import UseReducerCheckboxComponent from "./components/UseReducerCheckboxComponent.js";
import UseReducerDispatchActionsComponent from "./components/UseReducerDispatchActionsComponent.js";
import UseRefFormComponent from "./components/UseRefFormComponent.js";
import UseStateFormComponent from "./components/UseStateFormComponent.js";
import CustomHookUseInputComponent from "./components/CustomHookUseInputComponent.js";

export default function App() {
  return (
    <div className="App">
      <h1> React Hooks </h1>

      <h2>Form Component using Custom hook - useInput </h2>
      <CustomHookUseInputComponent />

      <hr />

      <h2>Form Component using UseState</h2>
      <UseStateFormComponent />

      <hr />

      <h2>Form Component using UseRef</h2>
      <UseRefFormComponent />

      <hr />

      <UseReducerDispatchActionsComponent />

      <hr />

      <UseReducerExampleComponent />

      <hr />

      <UseReducerCheckboxComponent />

      <hr />

      <GithubUsersComponent />

      <hr />

      <DeliveryStatusComponent />

      <hr />

      <CheckboxComponent />

      <hr />

      <h2>Star rating component</h2>
      <StarRatingComponent />

      <hr />

      <StarRatingComponent totalStars={2} />
      <StarRatingComponent totalStars={8} />

      <hr />

      <GreetingsComponent />
    </div>
  );
}
