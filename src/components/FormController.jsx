import { useState } from 'react';
import GeneralForm from './GeneralForm';
import ExperiencesForm from './ExperiencesForm';
import ProjectsForm from './ProjectsForm';
import SkillsForm from './SkillsForm';
import EducationForm from './EducationForm';
import account from '../assets/account.svg';
import briefcase from '../assets/briefcase.svg';
import wrench from '../assets/wrench.svg';
import school from '../assets/school.svg';
import book from '../assets/book.svg';
import '../styles/Form.css';

function FormControllerButton({ text, icon, alt, onClick, isOpen }) {
  return (
    <button className="form-controller__button" onClick={onClick}>
      <img src={icon} alt={alt} />
      <span className="sr-only">Open </span>
      {text}
      <span className="sr-only"> Form</span>
      <svg
        style={{ transform: `rotate(${isOpen ? '180deg' : '0deg'})` }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    </button>
  );
}

function FormController({ resume, setResume }) {
  const [openedFormIndex, setOpenedFormIndex] = useState(null);

  const updateResume = (data) => {
    setResume({ ...resume, ...data });
    setOpenedFormIndex(null);
  };

  return (
    <section className="form-controller" aria-label="Resume Forms">
      <ul className="form-controller__list">
        <li>
          <FormControllerButton
            text="General"
            icon={account}
            alt="icon"
            onClick={() => setOpenedFormIndex(openedFormIndex === 0 ? null : 0)}
            isOpen={openedFormIndex === 0}
          />
          {openedFormIndex === 0 && (
            <GeneralForm
              resume={resume}
              updateResume={updateResume}
              setIsOpen={() =>
                setOpenedFormIndex(openedFormIndex === 0 ? null : 0)
              }
            />
          )}
        </li>
        <li>
          <FormControllerButton
            text="Experience"
            icon={briefcase}
            alt="icon"
            onClick={() => setOpenedFormIndex(openedFormIndex === 1 ? null : 1)}
            isOpen={openedFormIndex === 1}
          />
          {openedFormIndex === 1 && (
            <ExperiencesForm
              {...resume}
              updateResume={updateResume}
              setIsOpen={() =>
                setOpenedFormIndex(openedFormIndex === 1 ? null : 1)
              }
            />
          )}
        </li>
        <li>
          <FormControllerButton
            text="Projects"
            icon={wrench}
            alt="icon"
            onClick={() => setOpenedFormIndex(openedFormIndex === 2 ? null : 2)}
            isOpen={openedFormIndex === 2}
          />
          {openedFormIndex === 2 && (
            <ProjectsForm
              {...resume}
              updateResume={updateResume}
              setIsOpen={() =>
                setOpenedFormIndex(openedFormIndex === 2 ? null : 2)
              }
            />
          )}
        </li>
        <li>
          <FormControllerButton
            text="Skills"
            icon={book}
            alt="icon"
            onClick={() => setOpenedFormIndex(openedFormIndex === 3 ? null : 3)}
            isOpen={openedFormIndex === 3}
          />
          {openedFormIndex === 3 && (
            <SkillsForm
              {...resume}
              updateResume={updateResume}
              setIsOpen={() =>
                setOpenedFormIndex(openedFormIndex === 3 ? null : 3)
              }
            />
          )}
        </li>
        <li>
          <FormControllerButton
            text="Education"
            icon={school}
            alt="icon"
            onClick={() => setOpenedFormIndex(openedFormIndex === 4 ? null : 4)}
            isOpen={openedFormIndex === 4}
          />
          {openedFormIndex === 4 && (
            <EducationForm
              {...resume}
              updateResume={updateResume}
              setIsOpen={() =>
                setOpenedFormIndex(openedFormIndex === 4 ? null : 4)
              }
            />
          )}
        </li>
      </ul>
    </section>
  );
}

export default FormController;
