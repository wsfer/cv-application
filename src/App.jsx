import { useState } from 'react';
import Resume from './components/Resume';
import FormController from './components/FormController';
import './App.css';

const placeholderResume = {
  name: 'your name',
  contacts: {
    github: 'github.com/you',
    linkedin: 'linkedin.com/asd',
    email: 'email@email.com',
    phone: '',
    website: '',
  },
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum obcaecati dicta quisquam corporis suscipit voluptatum hic quod consequatur alias enim nam, consectetur totam repellendus impedit. Necessitatibus ea magnam ad?',
  experiences: [
    {
      id: crypto.randomUUID(),
      title: 'job title',
      company: 'company',
      start: new Date(),
      end: null,
      activities: ['activity 1', 'activity 2'],
    },
    {
      id: crypto.randomUUID(),
      title: 'job 2',
      company: 'company name',
      start: new Date(),
      end: new Date(),
      activities: ['activity'],
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      name: 'project',
      link: 'github.com/your/project',
      activities: ['activity 1', 'activity 2'],
    },
    {
      id: crypto.randomUUID(),
      name: 'project name',
      link: 'github.com/your/project-name',
      activities: ['activity 1', 'activity'],
    },
  ],
  skills: {
    tools: 'figma, mathlab',
    languages: 'javascript, C++, python',
    frameworks: 'vue, angular, ruby on rails',
  },
  education: [
    {
      id: crypto.randomUUID(),
      name: 'course name',
      location: 'university name',
      start: new Date(),
      end: new Date(),
    },
    {
      id: crypto.randomUUID(),
      name: 'course',
      location: 'nothing',
      start: new Date(),
      end: null,
    },
  ],
};

function App() {
  const [resume, setResume] = useState(placeholderResume);

  return (
    <main className="main">
      <FormController resume={resume} setResume={setResume} />
      <section className="resume-container" aria-label="Resume">
        <Resume {...resume} />
      </section>
    </main>
  );
}

export default App;
