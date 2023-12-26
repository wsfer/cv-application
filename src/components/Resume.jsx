import ResumeHeader from './ResumeHeader';
import ResumeSummary from './ResumeSummary';
import ResumeExperiences from './ResumeExperiences';
import ResumeProjects from './ResumeProjects';
import ResumeSkills from './ResumeSkills';
import ResumeEducation from './ResumeEducation';
import '../styles/Resume.css';

function Resume({
  name,
  contacts,
  summary,
  experiences,
  projects,
  skills,
  education,
}) {
  return (
    <section className="resume">
      <ResumeHeader name={name} contacts={contacts} />
      <ResumeSummary summary={summary} />
      <ResumeExperiences experiences={experiences} />
      <ResumeProjects projects={projects} />
      <ResumeSkills {...skills} />
      <ResumeEducation education={education} />
    </section>
  );
}

export default Resume;
