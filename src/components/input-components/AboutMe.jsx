import { useState } from "react";

export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState("");

  const aboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };

  return (
    <div className="about-me-input-wrapper">
      {/*       <h1>About Me</h1> */}
      <label htmlFor="about-me-input">About Me</label>
      <textarea
        name="about-me"
        id="about-me-input"
        value={aboutMe}
        onChange={aboutMeChange}
      ></textarea>
    </div>
  );
}
