function ResumeSkills({ tools, languages, frameworks }) {
  const haveSkills = tools || languages || frameworks;

  if (!haveSkills) return null;

  return (
    <>
      <h3 className="resume__subtitle">Skills</h3>
      {tools && (
        <p className="resume__skill">
          <span className="resume__bold-text">Tools: </span>
          {tools}
        </p>
      )}
      {languages && (
        <p className="resume__skill">
          <span className="resume__bold-text">Languages: </span>
          {languages}
        </p>
      )}
      {frameworks && (
        <p className="resume__skill">
          <span className="resume__bold-text">Frameworks: </span>
          {frameworks}
        </p>
      )}
    </>
  );
}

export default ResumeSkills;
