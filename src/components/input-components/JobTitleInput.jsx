export default function JobTitleInput({ jobTitle, setJobTitle }) {
  return (
    <div className="job-title-input-wrapper">
      <h2>Job title</h2>
      <input
        type="text"
        id="job-title-input"
        placeholder="Job title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
    </div>
  );
}
