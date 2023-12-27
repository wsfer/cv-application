import { useState } from 'react';
import Input from './Input';
import ActivitiesInput from './ActivitiesInput';
import FormSavedData from './FormSavedData';

function ProjectsForm({ projects, updateResume, setIsOpen }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [nameValue, setNameValue] = useState('');
  const [linkValue, setLinkValue] = useState('');
  const [currentActivities, setCurrentActivities] = useState([]);
  const [newActivityValue, setNewActivityValue] = useState('');

  const handleAddProject = (event) => {
    event.preventDefault();
    const unchangedProjects =
      selectedProjectIndex !== null
        ? projects.toSpliced(selectedProjectIndex, 1)
        : projects;

    updateResume({
      projects: [
        ...unchangedProjects,
        {
          id: crypto.randomUUID(),
          name: nameValue,
          link: linkValue,
          activities: currentActivities,
        },
      ],
    });
  };

  const handleDeleteProject = (index) => {
    const unchangedProjects = projects.toSpliced(index, 1);
    updateResume({ projects: unchangedProjects });
  };

  const handleEditProject = (index) => {
    const selectedProject = projects[index];
    setSelectedProjectIndex(index);
    setNameValue(selectedProject?.name || '');
    setLinkValue(selectedProject?.link || '');
    setCurrentActivities(selectedProject?.activities || []);
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
        onSubmit={handleAddProject}
        aria-label="Projects Form"
      >
        <div className="form__container">
          <div className="form__col">
            <Input
              value={nameValue}
              onChange={(event) => setNameValue(event.target.value)}
              name="name"
            />
            <Input
              value={linkValue}
              onChange={(event) => setLinkValue(event.target.value)}
              name="link"
            />
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
        type="projects"
        data={projects}
        newData={() => handleEditProject(null)}
        editData={handleEditProject}
        deleteData={handleDeleteProject}
      />
    </div>
  );
}

export default ProjectsForm;
