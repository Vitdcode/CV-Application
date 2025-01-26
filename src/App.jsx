import "./styles/App.css";
import NameInput from "./components/input-components/NameInput";
import BirthdayInput from "./components/input-components/Birthdate";

function App() {
  return (
    <div className="all-inputs-wrapper">
      <div className="personal-information">
        <h1>Personal Information</h1>
        <section>
          <NameInput />
          <BirthdayInput />
        </section>
      </div>
    </div>
  );
}

export default App;
