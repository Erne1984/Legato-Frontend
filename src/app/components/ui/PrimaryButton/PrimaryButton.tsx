import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
  content: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
};

export default function PrimaryButton({ 
  content, 
  onClick, 
  disabled = false, 
  type = "button",
  fullWidth = false,
  size = "medium" 
}: PrimaryButtonProps) {

  return (
    <button 
      className={`${styles.container} ${styles[size]} ${fullWidth ? styles.fullWidth : ''}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {content}
    </button>
  );
}
