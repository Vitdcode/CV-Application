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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [educationInputs, setEducationInputs] = useState([
    { id: crypto.randomUUID(), from: "", to: "", school: "" },
  ]);
  const [aboutMe, setAboutMe] = useState("");
  const [experience, setExperience] = useState([{ id: crypto.randomUUID(), experience: "" }]);

  const [formIsVisible, setFormIsVisible] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    form.checkValidity() ? setFormIsVisible(false) : setFormIsVisible(true);
  }

  return (
    <div>
      {formIsVisible ? (
        <form action="" className="all-inputs-wrapper" onSubmit={handleSubmit}>
          <section id="personal-information-section" className="input-wrapper">
            <h1>Personal Information</h1>
            <NameInput
              firstName={firstName}
              lastName={lastName}
              setFirstName={setFirstName}
              setLastName={setLastName}
            />
            <BirthdayInput birthdate={birthdate} setBirthdate={setBirthdate} />
            <EmailInput email={email} setEmail={setEmail} />
            <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
            <LocationInput location={location} setLocation={setLocation} />
          </section>
          <section id="education-section" className="input-wrapper">
            <h1>Education</h1>
            <EductionInput
              educationInputs={educationInputs}
              setEducationInputs={setEducationInputs}
            />
          </section>
          <section id="about-me-section" className="input-wrapper">
            <h1>About Me</h1>
            <AboutMe aboutMe={aboutMe} setAboutMe={setAboutMe} />
          </section>
          <section id="experience-section" className="input-wrapper">
            <h1>Experience</h1>
            <ExperienceInput experience={experience} setExperience={setExperience} />
          </section>
          <button id="submit-btn">Submit</button>
        </form>
      ) : (
        <ResumePage setFormIsVisible={setFormIsVisible} phoneNumber={phoneNumber} email={email} />
      )}
    </div>
  );
}

function ResumePage({ setFormIsVisible, phoneNumber, email }) {
  return (
    <div>
      <button id="edit-data-btn" onClick={() => setFormIsVisible(true)}>
        Edit
      </button>
      <div className="phone-email-wrapper">
        {" "}
        <div className="phone-number-wrapper">
          <h2>📞</h2>
          <h2>Phone</h2>
          <h3>{phoneNumber}</h3>
        </div>
        <div className="email-wrapper">
          <h2>✉️</h2>
          <h2>Email</h2>
          <h3>{email}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
