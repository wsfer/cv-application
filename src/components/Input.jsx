import '../styles/Input.css';

// Reusable input
function Input({ value, onChange, name, type = 'text', disabled = false }) {
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
        disabled={disabled ? 'disabled' : ''}
        aria-disabled={disabled ? 'true' : 'false'}
      />
    </div>
  );
}

export default Input;
