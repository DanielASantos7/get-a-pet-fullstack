import styles from "./InputAndTextarea.module.css";

function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  multiple,
}) {
  const isTextarea = type === "textarea";

  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      {isTextarea ? (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={value}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={value}
          {...(multiple ? { multiple } : "")}
        />
      )}
    </div>
  );
}

export default Input;
