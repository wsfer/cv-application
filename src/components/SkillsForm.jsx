import { useState } from 'react';
import Input from './Input';

function SkillsForm({ skills, updateResume, setIsOpen }) {
  const { tools, languages, frameworks } = skills;
  const [toolsValue, setToolsValue] = useState(tools);
  const [languagesValue, setLanguagesValue] = useState(languages);
  const [frameworksValue, setFrameworksValue] = useState(frameworks);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateResume({
      skills: {
        tools: toolsValue,
        languages: languagesValue,
        frameworks: frameworksValue,
      },
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit} aria-label="Skills Form">
        <Input
          value={toolsValue}
          onChange={(event) => setToolsValue(event.target.value)}
          name="tools"
        />
        <Input
          value={languagesValue}
          onChange={(event) => setLanguagesValue(event.target.value)}
          name="languages"
        />
        <Input
          value={frameworksValue}
          onChange={(event) => setFrameworksValue(event.target.value)}
          name="frameworks"
        />
        <div className="form__buttons">
          <button className="cancel-button" type="button" onClick={setIsOpen}>
            Cancel
          </button>
          <button className="confirm-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default SkillsForm;
