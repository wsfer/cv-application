function ResumeSkills({ tools, languages, frameworks }) {
  const haveSkills = tools || languages || frameworks;

  if (!haveSkills) return null;

  return (
    <>
      <h3 className="resume__subtitle">Skills</h3>
      {tools && (
        <p className="resume__skill">
          <span>Tools: </span>
          {tools}
        </p>
      )}
      {languages && (
        <p className="resume__skill">
          <span>Languages: </span>
          {languages}
        </p>
      )}
      {frameworks && (
        <p className="resume__skill">
          <span>Frameworks: </span>
          {frameworks}
        </p>
      )}
    </>
  );
}

export default ResumeSkills;
