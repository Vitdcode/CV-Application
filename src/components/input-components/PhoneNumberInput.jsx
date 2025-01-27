import { useState } from "react";

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="phone-num-input-wrapper">
      <h2>Phone Number</h2>
      <input
        type="number"
        placeholder="Phone Number"
        value={phoneNumber}
        id="phone-number-input"
        onChange={phoneNumberChange}
      />
    </div>
  );
}
