import styles from "./Input.module.css";

function Input({
  name,
  label,
  type,
  value,
  handleChange,
  inputButtonToggle = false,
  buttonText,
  handleClick
}) {
  return (
    <div>
      <label
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={styles.input}
        name={name}
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
      </input>
      {inputButtonToggle ?
        <button onClick={handleClick}>
          {buttonText}
        </button>
        : null
      }
    </div>
  );
}

export default Input;
