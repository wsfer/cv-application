import { useState } from 'react';
import { dateToMonthInput } from '../utils/dates';
import Input from './Input';

function EducationForm({ education, updateResume, setIsOpen }) {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [nameValue, setNameValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [startValue, setStartValue] = useState(dateToMonthInput(new Date()));
  const [endValue, setEndValue] = useState(dateToMonthInput(new Date()));
  const [isStudying, setIsStudying] = useState(false);

  const handleAddCourse = (event) => {
    event.preventDefault();
    const unchangedCourses =
      selectedCourseIndex !== null
        ? education.toSpliced(selectedCourseIndex, 1)
        : education;

    updateResume({
      education: [
        ...unchangedCourses,
        {
          id: crypto.randomUUID(),
          name: nameValue,
          location: locationValue,
          start: new Date(startValue),
          end: isStudying ? null : new Date(endValue),
        },
      ],
    });
  };

  const handleDeleteCourse = (index) => {
    const unchangedCourses = education.toSpliced(index, 1);
    updateResume({ education: unchangedCourses });
  };

  const handleEditCourse = (index) => {
    const selectedCourse = education[index];
    setSelectedCourseIndex(index);
    setNameValue(selectedCourse?.name || '');
    setLocationValue(selectedCourse?.location || '');
    setStartValue(
      dateToMonthInput(new Date(selectedCourse?.start || Date.now()))
    );
    setEndValue(dateToMonthInput(new Date(selectedCourse?.end || Date.now())));
    setIsStudying(selectedCourse?.end === null || false);
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={handleAddCourse}
        aria-label="Experiences Form"
      >
        <div>
          <Input
            value={nameValue}
            onChange={(event) => setNameValue(event.target.value)}
            name="name"
          />
          <Input
            value={locationValue}
            onChange={(event) => setLocationValue(event.target.value)}
            name="location"
          />
          <Input
            value={startValue}
            onChange={(event) => setStartValue(event.target.value)}
            name="start"
            type="month"
          />
          <Input
            value={endValue}
            onChange={(event) => setEndValue(event.target.value)}
            name="end"
            type="month"
            disabled={isStudying}
          />
          <div>
            <input
              checked={isStudying ? true : false}
              onChange={(event) => setIsStudying(event.target.checked)}
              type="checkbox"
              name="studying"
              id="studying"
            />
            <label htmlFor="studying">Is studying?</label>
          </div>
        </div>
        <div className="form__buttons">
          <button className="cancel-button" type="button" onClick={setIsOpen}>
            Cancel
          </button>
          <button className="confirm-button">Save</button>
        </div>
      </form>
      <section>
        <h3>Current courses</h3>
        <button type="button" onClick={() => handleEditCourse(null)}>
          New
        </button>
        {education.length > 0 ? (
          education.map(({ id, name, location }, index) => {
            return (
              <div key={id}>
                <p>
                  <span>{name}</span> - {location}
                </p>
                <button type="button" onClick={() => handleEditCourse(index)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDeleteCourse(index)}>
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <p>empty</p>
        )}
      </section>
    </div>
  );
}

export default EducationForm;
