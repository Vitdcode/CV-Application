import { useState } from "react";

export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState("");

  const aboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };

  return (
    <div className="about-me-input-wrapper">
      <textarea
        name="about-me"
        id="about-me-input"
        value={aboutMe}
        onChange={aboutMeChange}
      ></textarea>
    </div>
  );
}
