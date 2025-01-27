import { useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="email-input-wrapper">
      <h2>Email</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        id="email-input"
        onChange={emailChange}
      />
    </div>
  );
}
