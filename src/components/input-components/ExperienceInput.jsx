export default function ExperienceInput({ experienceInputs, setExperienceInputs }) {
  const addExperienceInput = () => {
    setExperienceInputs([
      ...experienceInputs,
      { id: crypto.randomUUID(), from: "", to: "", experience: "" },
    ]);
  };

  const handleExperienceChange = (id, field, value) => {
    setExperienceInputs((prevExperiences) =>
      prevExperiences.map((input) => (input.id === id ? { ...input, [field]: value } : input))
    );
  };

  return (
    <div>
      <button id="add-experience-input-btn" onClick={addExperienceInput} type="button">
        + Add
      </button>

      {experienceInputs.map((input) => (
        <div key={input.id} className="experience-input-wrapper">
          <input
            type="number"
            placeholder="From"
            id={crypto.randomUUID()}
            value={input.from}
            onChange={(e) => handleExperienceChange(input.id, "from", e.target.value)}
          />
          <input
            type="number"
            placeholder="To"
            id={crypto.randomUUID()}
            value={input.to}
            onChange={(e) => handleExperienceChange(input.id, "to", e.target.value)}
          />
          <input
            type="text"
            placeholder="Experience"
            id={crypto.randomUUID()}
            value={input.experience}
            onChange={(e) => handleExperienceChange(input.id, "experience", e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
