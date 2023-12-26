function ResumeProjects({ projects }) {
  const haveProjects = projects.length > 0;

  if (!haveProjects) return null;

  return (
    <>
      <h3 className="resume__subtitle">Projects</h3>
      {projects.map(({ id, name, link, activities }) => (
        <div className="resume__project project" key={id}>
          <h4 className="project__name">{name}</h4>
          <a className="project__link" href={link}>
            {link}
          </a>
          <ul className="project__activities">
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
