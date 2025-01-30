export default function Education({ educationInputs }) {
  console.log(educationInputs);
  return educationInputs.map((input) => (
    <>
      <h1>Education</h1>
      <div className="from-to-education-wraper-resumee">
        <h2>{input.from} -</h2>
        <h2>{input.to} </h2>
      </div>
      <div className="school-degree-wrapper-resumee">
        <h2>{input.school}</h2>
        <h2>{input.degree}</h2>
      </div>
    </>
  ));
}
