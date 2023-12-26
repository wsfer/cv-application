import { useState } from 'react';
import { dateToMonthYear, dateToMonthInput } from '../utils/dates';
import Input from './Input';
import ActivitiesInput from './ActivitiesInput';

function ExperiencesForm({ experiences, updateResume, setIsOpen }) {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(null);
  const [titleValue, setTitleValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [startValue, setStartValue] = useState(dateToMonthInput(new Date()));
  const [endValue, setEndValue] = useState(dateToMonthInput(new Date()));
  const [isCurrentJob, setIsCurrentJob] = useState(false);
  const [currentActivities, setCurrentActivities] = useState([]);
  const [newActivityValue, setNewActivityValue] = useState('');

  const handleAddExperience = (event) => {
    event.preventDefault();
    const unchangedExperiences =
      selectedExperienceIndex !== null
        ? experiences.toSpliced(selectedExperienceIndex, 1)
        : experiences;

    updateResume({
      experiences: [
        ...unchangedExperiences,
        {
          id: crypto.randomUUID(),
          title: titleValue,
          company: companyValue,
          start: new Date(startValue),
          end: isCurrentJob ? null : new Date(endValue),
          activities: currentActivities,
        },
      ],
    });
  };

  const handleDeleteExperience = (index) => {
    const unchangedExperiences = experiences.toSpliced(index, 1);
    updateResume({ experiences: unchangedExperiences });
  };

  const handleEditExperience = (index) => {
    const selectedExperience = experiences[index];
    setSelectedExperienceIndex(index);
    setTitleValue(selectedExperience?.title || '');
    setCompanyValue(selectedExperience?.company || '');
    setStartValue(
      dateToMonthInput(new Date(selectedExperience?.start || Date.now()))
    );
    setEndValue(
      dateToMonthInput(new Date(selectedExperience?.end || Date.now()))
    );
    setIsCurrentJob(selectedExperience?.end === null || false);
    setCurrentActivities(selectedExperience?.activities || []);
    setNewActivityValue('');
  };

  const handleAddActivity = () => {
    setCurrentActivities([...currentActivities, newActivityValue]);
    setNewActivityValue('');
  };

  const handleDeleteActivity = (index) => {
    const unchangedActivities = currentActivities.toSpliced(index, 1);
    setCurrentActivities(unchangedActivities);
  };

  return (
    <div>
      <form onSubmit={handleAddExperience} aria-label="Experiences Form">
        <div className="form__container">
          <div className="form__col">
            <Input
              value={titleValue}
              onChange={(event) => setTitleValue(event.target.value)}
              name="title"
            />
            <Input
              value={companyValue}
              onChange={(event) => setCompanyValue(event.target.value)}
              name="company"
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
              disabled={isCurrentJob}
            />
            <div>
              <label htmlFor="current">Current job?</label>
              <input
                checked={isCurrentJob ? true : false}
                onChange={(event) => setIsCurrentJob(event.target.checked)}
                type="checkbox"
                name="current"
                id="current"
              />
            </div>
          </div>
          <div className="form__col">
            <ActivitiesInput
              currentActivities={currentActivities}
              newActivityValue={newActivityValue}
              setNewActivityValue={setNewActivityValue}
              handleAddActivity={handleAddActivity}
              handleDeleteActivity={handleDeleteActivity}
            />
          </div>
        </div>
        <div className="form__buttons">
          <button type="button" onClick={setIsOpen}>
            Cancel
          </button>
          <button>Save</button>
        </div>
      </form>
      <section>
        <h3>Current experiences</h3>
        <button type="button" onClick={() => handleEditExperience(null)}>
          New
        </button>
        {experiences.length > 0 ? (
          experiences.map(({ id, title, company, start, end }, index) => {
            const startDate = dateToMonthYear(start);
            const endDate = end ? dateToMonthYear(end) : 'present';
            return (
              <div key={id}>
                <p>
                  {title}, {company} - {startDate} - {endDate}
                </p>
                <button
                  type="button"
                  onClick={() => handleEditExperience(index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteExperience(index)}
                >
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

export default ExperiencesForm;
