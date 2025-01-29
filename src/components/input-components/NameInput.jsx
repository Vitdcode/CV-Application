/* import { useState } from "react"; */

export default function NameInput({ firstName, lastName, setFirstName, setLastName }) {
  return (
    <div className="name-input-wrapper">
      <h2>Name</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        id="first-name-input"
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        id="last-name-input"
        onChange={(e) => setLastName(e.target.value)}
        required
      />
    </div>
  );
}
