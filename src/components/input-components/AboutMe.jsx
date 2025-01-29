export default function AboutMe({ aboutMe, setAboutMe }) {
  return (
    <div className="about-me-input-wrapper">
      <textarea
        name="about-me"
        id="about-me-input"
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
      ></textarea>
    </div>
  );
}
