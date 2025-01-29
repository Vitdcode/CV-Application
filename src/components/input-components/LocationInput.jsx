export default function LocationInput({ location, setLocation }) {
  return (
    <div className="location-input-wrapper">
      <h2>Location</h2>
      <input
        type="text"
        placeholder="Location"
        value={location}
        id="location-input"
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
}
