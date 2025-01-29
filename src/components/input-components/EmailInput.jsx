export default function EmailInput({ email, setEmail }) {
  return (
    <div className="email-input-wrapper">
      <h2>Email</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        id="email-input"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
