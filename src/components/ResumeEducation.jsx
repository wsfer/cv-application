import { dateToMonthYear } from '../utils/dates';

function ResumeEducation({ education }) {
  const haveEducation = education.length > 0;

  if (!haveEducation) return null;

  return (
    <>
      <h3 className="resume__subtitle">Education</h3>
      {education.map(({ id, name, location, start, end }) => {
        const startDate = dateToMonthYear(start);
        const endDate = end ? dateToMonthYear(end) : 'present';

        return (
          <p className="resume__course resume__row" key={id}>
            <span>
              <span className="resume__bold-text">{name}</span> - {location}
            </span>
            <span className="resume__date">
              {startDate} - {endDate}
            </span>
          </p>
        );
      })}
    </>
  );
}

export default ResumeEducation;
