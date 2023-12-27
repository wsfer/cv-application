import { dateToMonthYear } from '../utils/dates';

function ResumeExperiences({ experiences }) {
  const haveExperience = experiences.length > 0;

  if (!haveExperience) return null;

  return (
    <>
      <h3 className="resume__subtitle">Work Experience</h3>
      {experiences.map(({ id, title, company, start, end, activities }) => {
        const startDate = dateToMonthYear(start);
        const endDate = end ? dateToMonthYear(end) : 'present';

        return (
          <div className="resume__experience" key={id}>
            <p className="resume__row">
              <span>
                <span className="resume__bold-text">{title}</span>, {company}
              </span>
              <span className="resume__date">
                {startDate} - {endDate}
              </span>
            </p>
            <ul className="resume__activities-list">
              {activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default ResumeExperiences;
