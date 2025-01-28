import { useState } from "react";

export default function NameInput() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className="name-input-wrapper">
      <h2>Name</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        id="first-name-input"
        onChange={firstNameChange}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        id="last-name-input"
        onChange={lastNameChange}
        required
      />
    </div>
  );
}
