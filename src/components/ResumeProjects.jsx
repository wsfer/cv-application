function ResumeProjects({ projects }) {
  const haveProjects = projects.length > 0;

  if (!haveProjects) return null;

  return (
    <>
      <h3 className="resume__subtitle">Projects</h3>
      {projects.map(({ id, name, link, activities }) => (
        <div className="resume__project" key={id}>
          <p className="resume__row">
            <span className="resume__bold-text">{name}</span>
            <a className="resume__link" href={link}>
              {link}
            </a>
          </p>
          <ul className="resume__activities-list">
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default ResumeProjects;
