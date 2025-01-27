import "./styles/App.css";
import NameInput from "./components/input-components/NameInput";
import BirthdayInput from "./components/input-components/Birthdate";
import EmailInput from "./components/input-components/EmailInput";
import PhoneNumberInput from "./components/input-components/PhoneNumberInput";
import LocationInput from "./components/input-components/LocationInput";
import EductionInput from "./components/input-components/EductionInput";
import AboutMe from "./components/input-components/AboutMe";

function App() {
  return (
    <div className="all-inputs-wrapper">
      <section id="personal-information-section" className="input-wrapper">
        <h1>Personal Information</h1>
        <NameInput />
        <BirthdayInput />
        <EmailInput />
        <PhoneNumberInput />
        <LocationInput />
      </section>
      <section id="education-section" className="input-wrapper">
        <h1>Education</h1>
        <EductionInput />
      </section>
      <section id="about-me-section" className="input-wrapper">
        <AboutMe />
      </section>
      <button>Submit</button>
    </div>
  );
}

export default App;
