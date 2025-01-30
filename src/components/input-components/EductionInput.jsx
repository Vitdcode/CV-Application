export default function EductionInput({ educationInputs, setEducationInputs }) {
  const addEducationinput = () => {
    setEducationInputs([
      ...educationInputs,
      { id: crypto.randomUUID(), from: "", to: "", school: "", degree: "" },
    ]);
  };

  const handleInputChange = (id, field, value) => {
    setEducationInputs((prevInputs) =>
      prevInputs.map((input) => (input.id === id ? { ...input, [field]: value } : input))
    );
  };

  return (
    <div>
      <button id="add-education-input-btn" onClick={addEducationinput}>
        + Add
      </button>
      {educationInputs.map((input) => (
        <div key={input.id} className="education-input-wrapper">
          <input
            type="text"
            id={crypto.randomUUID()}
            className="school-input"
            placeholder="School / University"
            value={input.school}
            onChange={(e) => handleInputChange(input.id, "school", e.target.value)}
          />
          <input
            type="number"
            id={crypto.randomUUID()}
            placeholder="From (year)"
            value={input.from}
            onChange={(e) => handleInputChange(input.id, "from", e.target.value)}
          />
          <input
            type="number"
            id={crypto.randomUUID()}
            placeholder="To (year)"
            value={input.to}
            onChange={(e) => handleInputChange(input.id, "to", e.target.value)}
          />
          <input
            type="text"
            id={crypto.randomUUID()}
            placeholder="Degree"
            value={input.degree}
            onChange={(e) => handleInputChange(input.id, "degree", e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
