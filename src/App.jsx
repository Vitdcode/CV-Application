import "./styles/App.css";
import NameInput from "./components/input-components/NameInput";
import BirthdayInput from "./components/input-components/Birthdate";
import EmailInput from "./components/input-components/EmailInput";
import PhoneNumberInput from "./components/input-components/PhoneNumberInput";
import LocationInput from "./components/input-components/LocationInput";
import EductionInput from "./components/input-components/EductionInput";
import AboutMe from "./components/input-components/AboutMe";
import ExperienceInput from "./components/input-components/ExperienceInput";
import { useState } from "react";

function App() {
  const [formIsValid, setFormIsValid] = useState(false);
  /* const [formIsVisible, setFormIsVisible] = useState(true); */

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    form.checkValidity() ? setFormIsValid(true) : setFormIsValid(false);
  }

  return (
    <div>
      {!formIsValid ? (
        <form action="" className="all-inputs-wrapper" onSubmit={handleSubmit}>
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
            <h1>About Me</h1>
            <AboutMe />
          </section>
          <section id="experience-section" className="input-wrapper">
            <h1>Experience</h1>
            <ExperienceInput />
          </section>
          <button id="submit-btn">Submit</button>
        </form>
      ) : (
        resumePage()
      )}
    </div>
  );
}

function resumePage() {
  return (
    <div>
      <h1>My Resume</h1>
    </div>
  );
}

export default App;
