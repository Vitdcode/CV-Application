import "./styles/App.css";
import NameInput from "./components/input-components/NameInput";
import BirthdayInput from "./components/input-components/BirthdateInput";
import EmailInput from "./components/input-components/EmailInput";
import PhoneNumberInput from "./components/input-components/PhoneNumberInput";
import LocationInput from "./components/input-components/LocationInput";
import EductionInput from "./components/input-components/EductionInput";
import AboutMe from "./components/input-components/AboutMeInput";
import ExperienceInput from "./components/input-components/ExperienceInput";
import { useState } from "react";
import Phone from "./components/display-components/Phone";
import Email from "./components/display-components/Email";
import Name from "./components/display-components/Name";
import AboutME from "./components/display-components/AboutMe";
import profilePic from "./assets/profile-pic.png";
import JobTitleInput from "./components/input-components/JobTitleInput";
import JobTitle from "./components/display-components/JobTitle";
import Education from "./components/display-components/Education";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const firstLastName = `${firstName} ${lastName}`;
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [educationInputs, setEducationInputs] = useState([
    { id: crypto.randomUUID(), from: "", to: "", school: "", degree: "" },
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
            <JobTitleInput jobTitle={jobTitle} setJobTitle={setJobTitle} />
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
        <ResumePage
          setFormIsVisible={setFormIsVisible}
          phoneNumber={phoneNumber}
          email={email}
          name={firstLastName}
          jobTitle={jobTitle}
          aboutMe={aboutMe}
          educationInputs={educationInputs}
        />
      )}
    </div>
  );
}

function ResumePage({
  setFormIsVisible,
  phoneNumber,
  email,
  name,
  jobTitle,
  aboutMe,
  educationInputs,
}) {
  return (
    <div className="resume-wrapper">
      <button id="edit-data-btn" onClick={() => setFormIsVisible(true)}>
        Edit
      </button>
      <div className="phone-email-wrapper">
        <Phone phoneNumber={phoneNumber} />
        <Email email={email} />
      </div>
      <div className="name-about-me-wrapper">
        <div className="name-and-job-title-wraper">
          <Name name={name} />
          <JobTitle jobTitle={jobTitle} />
        </div>
        <img id="profile-pic" src={profilePic} alt="Profile Picture" />
        <AboutME aboutMe={aboutMe} />
      </div>
      <div className="education-wrapper-resumee">
        <Education educationInputs={educationInputs} />
      </div>
    </div>
  );
}

export default App;
