export default function Experience({ experienceInputs }) {
  return experienceInputs.map((input) => (
    <>
      <div className="from-to-experience-wrapper-resumee">
        <h2>{input.from} -</h2>
        <h2>{input.to}</h2>
      </div>
      <h2 className="experience-text-resumee">{input.experience}</h2>
      <div id="education-seperation-line"></div>
    </>
  ));
}
