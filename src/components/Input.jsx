import '../styles/Input.css';

// Reusable input
function Input({ value, onChange, name, type = 'text' }) {
  return (
    <div className="input">
      <label htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
      />
    </div>
  );
}

export default Input;
