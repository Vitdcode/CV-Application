export default function BirthdayInput({ birthdate, setBirthdate }) {
  return (
    <div className="birthday-input-wrapper">
      <h2>Birthdate</h2>
      <input
        type="text"
        placeholder="MM-DD-YYYY"
        id="birthdate-input"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
    </div>
  );
}
