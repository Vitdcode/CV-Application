export default function ExperienceInput({ experience, setExperience }) {
  const addExperienceInput = () => {
    setExperience([...experience, { id: crypto.randomUUID(), experience: "" }]);
  };

  const handleExperienceChange = (id, field, value) => {
    setExperience((prevExperiences) =>
      prevExperiences.map((input) => (input.id === id ? { ...input, [field]: value } : input))
    );
  };

  return (
    <div>
      <button id="add-experience-input-btn" onClick={addExperienceInput}>
        + Add
      </button>

      {experience.map((input) => (
        <div key={input.id} className="experience-input-wrapper">
          <input
            type="text"
            placeholder="Experience"
            id={crypto.randomUUID()}
            onChange={(e) => handleExperienceChange(input.id, "experience", e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
