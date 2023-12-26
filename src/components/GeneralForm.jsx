import { useState } from 'react';
import Input from './Input';

function GeneralForm({ resume, updateResume, setIsOpen }) {
  const { email, linkedin, github, phone, website } = resume.contacts;
  const [nameValue, setNameValue] = useState(resume.name);
  const [emailValue, setEmailValue] = useState(email);
  const [linkedinValue, setLinkedinValue] = useState(linkedin);
  const [githubValue, setGithubValue] = useState(github);
  const [phoneValue, setPhoneValue] = useState(phone);
  const [websiteValue, setWebsiteValue] = useState(website);
  const [summaryValue, setSummaryValue] = useState(resume.summary);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateResume({
      name: nameValue,
      contacts: {
        email: emailValue,
        linkedin: linkedinValue,
        github: githubValue,
        phone: phoneValue,
        website: websiteValue,
      },
      summary: summaryValue,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="General Form">
      <div className="form__container">
        <div className="form__col">
          <Input
            value={nameValue}
            onChange={(event) => setNameValue(event.target.value)}
            name="name"
          />
          <Input
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
            name="email"
            type="email"
          />
          <Input
            value={linkedinValue}
            onChange={(event) => setLinkedinValue(event.target.value)}
            name="linkedin"
          />
          <Input
            value={githubValue}
            onChange={(event) => setGithubValue(event.target.value)}
            name="github"
          />
        </div>
        <div className="form__col">
          <Input
            value={phoneValue}
            onChange={(event) => setPhoneValue(event.target.value)}
            name="phone"
          />
          <Input
            value={websiteValue}
            onChange={(event) => setWebsiteValue(event.target.alue)}
            name="website"
          />
          <div className="input">
            <label htmlFor="summary">Summary</label>
            <textarea
              value={summaryValue}
              onChange={(event) => setSummaryValue(event.target.value)}
              name="summary"
              id="summary"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="form__buttons">
        <button type="button" onClick={setIsOpen}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default GeneralForm;
