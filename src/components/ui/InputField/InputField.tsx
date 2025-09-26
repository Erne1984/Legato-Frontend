import styles from "./InputField.module.css";

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  fullWidth = false,
}: InputFieldProps) {
  return (

    <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ""}`}>
      
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={styles.input}
      />
    </div>
  );
}