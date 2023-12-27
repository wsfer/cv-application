import { useState } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import FormController from './components/FormController';
import Footer from './components/Footer';
import './App.css';
import './styles/Buttons.css';

const placeholderResume = {
  name: 'Your name',
  contacts: {
    github: 'github.com/you',
    linkedin: 'linkedin.com/you',
    email: 'your@email.com',
    phone: '',
    website: '',
  },
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum obcaecati dicta quisquam corporis suscipit voluptatum hic quod consequatur alias enim nam, consectetur totam repellendus impedit. Necessitatibus ea magnam ad?',
  experiences: [
    {
      id: crypto.randomUUID(),
      title: 'Job title',
      company: 'company',
      start: new Date('2022-08'),
      end: null,
      activities: ['activity 1', 'activity 2'],
    },
    {
      id: crypto.randomUUID(),
      title: 'Job title',
      company: 'company',
      start: new Date('2020-03'),
      end: new Date('2022-08'),
      activities: ['activity 1', 'activity 2', 'activity 3'],
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      name: 'Project',
      link: 'github.com/your/project',
      activities: ['activity 1', 'activity 2'],
    },
    {
      id: crypto.randomUUID(),
      name: 'Project',
      link: 'github.com/your/project',
      activities: ['activity 1', 'activity 2'],
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
      name: 'Course',
      location: 'university',
      start: new Date('2018-04'),
      end: null,
    },
    {
      id: crypto.randomUUID(),
      name: 'Course',
      location: 'university',
      start: new Date('2012-01'),
      end: new Date('2017-11'),
    },
  ],
};

function App() {
  const [resume, setResume] = useState(placeholderResume);

  return (
    <>
      <Header />
      <main className="main">
        <FormController resume={resume} setResume={setResume} />
        <section className="resume-container" aria-label="Resume">
          <Resume {...resume} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
