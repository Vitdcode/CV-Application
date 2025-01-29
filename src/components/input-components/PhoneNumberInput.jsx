export default function PhoneNumberInput({ phoneNumber, setPhoneNumber }) {
  return (
    <div className="phone-num-input-wrapper">
      <h2>Phone Number</h2>
      <input
        type="number"
        placeholder="Phone Number"
        value={phoneNumber}
        id="phone-number-input"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  );
}
