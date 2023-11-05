import styles from "./Input.module.css";

function Input({
  name,
  label,
  type,
  value,
  handleChange,
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
    </div>
  );
}

export default Input;
