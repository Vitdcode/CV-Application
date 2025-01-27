import { useState } from "react";

export default function LocationInput() {
  const [location, setLocation] = useState("");

  const locationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="location-input-wrapper">
      <h2>Location</h2>
      <input
        type="text"
        placeholder="Location"
        value={location}
        id="location-input"
        onChange={locationChange}
      />
    </div>
  );
}
