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
          <div className="resume__experience experience" key={id}>
            <h4 className="experience__title">
              <span>{title}</span>, {company}
            </h4>
            <p className="experience__time">
              {startDate} - {endDate}
            </p>
            <ul className="experience__activities">
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
