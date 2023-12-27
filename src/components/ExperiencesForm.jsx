import { useState } from 'react';
import { dateToMonthYear, dateToMonthInput } from '../utils/dates';
import Input from './Input';
import ActivitiesInput from './ActivitiesInput';
import FormSavedData from './FormSavedData';

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
      <form
        className="form"
        onSubmit={handleAddExperience}
        aria-label="Experiences Form"
      >
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
              <input
                checked={isCurrentJob ? true : false}
                onChange={(event) => setIsCurrentJob(event.target.checked)}
                type="checkbox"
                name="current"
                id="current"
              />
              <label htmlFor="current">Current job?</label>
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
          <button className="cancel-button" type="button" onClick={setIsOpen}>
            Cancel
          </button>
          <button className="confirm-button">Save</button>
        </div>
      </form>
      <FormSavedData
        type="experience"
        data={experiences}
        newData={() => handleEditExperience(null)}
        editData={handleEditExperience}
        deleteData={handleDeleteExperience}
      />
    </div>
  );
}

export default ExperiencesForm;
