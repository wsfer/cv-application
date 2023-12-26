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
          <div className="resume__course course" key={id}>
            <h4 className="course__name">
              <span>{name}</span> - {location}
            </h4>
            <span className="course__time">
              {startDate} - {endDate}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default ResumeEducation;
