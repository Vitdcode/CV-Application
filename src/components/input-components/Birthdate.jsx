import { useState } from "react";

export default function BirthdayInput() {
  const [birthdate, setBirthdate] = useState("");

  const birthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  return (
    <div className="birthday-input-wrapper">
      <h2>Birthdate</h2>
      <input
        type="text"
        placeholder="MM-DD-YYYY"
        id="birthdate-input"
        value={birthdate}
        onChange={birthdateChange}
      />
    </div>
  );
}
